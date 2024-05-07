import axios from 'axios';
import { useState, useEffect, SetStateAction } from 'react';
import React from 'react';
import {

    Pagination,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { GetListCourese } from '../../redux/action/GetListCourses.tsx';
import Card from '../../components/Card/index.tsx';
import Search from '../../components/Search/index.tsx';
import Category from './Category.tsx';
export default function ListCourses() {
    const dispatch = useDispatch()
    const [page, setPage] = useState(1);
    const courses = useSelector(state => state.courses.list)
    const courseLength = useSelector(state => state.courses.length)
    const itemsPerPage = 9;
    const numPages = courseLength ? Math.ceil(courseLength / itemsPerPage) : 0;
    const handleChangePage = (event: any, value: SetStateAction<number>) => {
        setPage(value);
    };
    useEffect(() => {
        dispatch(GetListCourese(itemsPerPage, page))
    }, [page])
    return (
        <>

            <section style={{ backgroundColor: '#ebebf2', }} className="Selection event-Search">
                <div className="container">
                    <Search />
                    <div className="row">
                       <Category/>
                        <div className="col-lg-8">
                            <div className="row event-search-content">
                                {courses?.map((course, index) => (
                                    <div key={index} className="col-xl-4 col-md-6">
                                        <Card data={course} />
                                    </div>
                                ))}
                            </div>
                            <Pagination
                                count={numPages}
                                page={page}
                                onChange={handleChangePage}
                                color="primary"
                                sx={{
                                    marginTop: '16px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    fontSize: '25px', // Adjust the font size as needed
                                    '& .MuiPaginationItem-root': {
                                        fontSize: '24px', // Adjust the font size for pagination items if needed
                                    },
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

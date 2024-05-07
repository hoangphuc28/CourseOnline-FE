import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetListCourese } from '../../redux/action/GetListCourses.tsx';
import Card from '../../components/Card/index.tsx';

const CounterSection = () => {
    const courses = useSelector(state => state.courses.list)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetListCourese(8,1))
    }, [])
    return (
        <>
            <section className="section section--bg-offwhite-three featured-popular-courses main-popular-course">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="featured-popular-courses-heading d-flex align-content-center justify-content-between">
                                <div className="main-heading">
                                    <h3 className="font-title--md">Our Popular Courses</h3>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab">
                                <div className="row">
                                    {courses?.map((item, index) => (
                                        <div key={index} className="col-xl-3 col-md-6">
                                            <Card data={item} />
                                        </div>
                                    ))}
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 text-center">
                                        <a href="course-search.html" className="button button-lg button--primary">Browse all Courses</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="featured-popular-courses-shape">
                    <img src="../images/shape/dots/dots-img-12.png" alt="Shape" className="img-fluid dot-06" />
                    <img src="../images/shape/triangel.png" alt="Shape" className="img-fluid dot-07" />
                </div>
            </section>
        </>
    );
};

export default CounterSection;

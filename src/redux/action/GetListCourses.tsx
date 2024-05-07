import axios from "axios";
import {  getListCoursesAPI } from "../../api/Api.tsx";
import { addCourse, updateCourseLength } from "../reducer/courseReducer.tsx";

export const GetListCourese =  (size: number, page: number) => {
    return async (dispatch) => {
        try {
            const res =  await axios({
                method: 'GET',
                url: `${getListCoursesAPI}?pageSize=${size}&page=${page}`,
            })
            dispatch(addCourse(res.data.courses))
            dispatch(updateCourseLength(res.data.courseLength))
        }
        catch(err) {
            console.log(err)
        }
    }
}
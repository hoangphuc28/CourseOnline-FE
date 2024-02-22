import axios from "axios";
import { getListCourses } from "../../api/Api.tsx";
import { addCourse } from "../reducer/courseReducer.tsx";

export const GetListCourese =  (size: number, page: number) => {
    return async (dispatch) => {
        try {
            const res =  await axios({
                method: 'GET',
                url: `${getListCourses}?pageSize=${size}&page=${page}`,
            })
            dispatch(addCourse(res.data.courses))
        }
        catch(err) {
            console.log(err)
        }   
    }
    
}
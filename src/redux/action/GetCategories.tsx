import axios from "axios"
import { getCategoriesAPI } from "../../api/Api.tsx"
import { updateCategories } from "../reducer/categoryReducer.tsx"

export const GetCategories = () => {
    return async (dispatch) => {
        try {
            const res = await axios({
                url: getCategoriesAPI,
                method: 'GET'
            })
            dispatch(updateCategories(res.data.categories))
        } catch (error) {
            console.log(error)
        }
    }
}
import axios from "axios"
import {  loginAPI } from "../../api/Api.tsx"
import { updateUser } from "../reducer/userReducer.tsx"
import { updateLoader } from "../reducer/loaderReducer.tsx"
import { signInError } from "../reducer/authReducer.tsx"
export const Login = (data, callback) => {
    return  async (dispatch) => {
        dispatch(updateLoader(true))

        try {
            const res = await axios({
                url: loginAPI,
                method: 'POST',
                data: data
            })
            dispatch(updateUser(res.data.information))
            localStorage.setItem('token', JSON.stringify(res.data.accessToken));
            callback()
        }
        catch(err) {
            dispatch(signInError(err.response.data))
        }
        dispatch(updateLoader(false))

    } 
}
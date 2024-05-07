import axios from "axios"
import {  registerAPI } from "../../api/Api.tsx"
import { updateLoader } from "../reducer/loaderReducer.tsx"
import { registerError, registerSuccess } from "../reducer/authReducer.tsx"

export const Register = (data, resetForm) => {
    return async (dispatch) => {
        dispatch(updateLoader(true))
        try {
            const res = await axios({
                url: registerAPI,
                method: "POST",
                data: data
            })
            dispatch(registerError(null))
            dispatch(registerSuccess(res))
            resetForm()
        }
        catch (err) {
            dispatch(registerSuccess(null))
            dispatch(registerError(err))
        }
        dispatch(updateLoader(false))


    }
}
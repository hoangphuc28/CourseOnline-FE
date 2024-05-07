import axios from "axios"
import { signInError } from "../reducer/authReducer.tsx"
import { updateLoader } from "../reducer/loaderReducer.tsx"
import { verifyAccountAPI } from "../../api/Api.tsx"

export const VerifyAccount = (data) => {
    return async () => {
        try {
            const res = await axios({
                method: 'PATCH',
                url: `${verifyAccountAPI}/${data}`,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log(res)
        }
        catch(err) {
            console.log(err)
        }
    }
}

export const SendEmailVerify = (data, callback) => {
    return async (dispatch) => {
        dispatch(updateLoader(true))

        try {
            const res = await axios({
                method: 'POST',
                url: `${verifyAccountAPI}`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            })
            callback()
            dispatch(signInError(null))

        }
        catch(err) {
            console.log(err)
        }
        dispatch(updateLoader(false))

    }
}
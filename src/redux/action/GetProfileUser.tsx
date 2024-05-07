import axios from "axios"
import { getProfileUserAPI } from "../../api/Api.tsx"
import { updateUser } from "../reducer/userReducer.tsx"

export const GetProfileUser = (token) => {
    return async (dispatch) => {
        try {
            const res = await axios({
                method: 'GET',
                url: getProfileUserAPI,
                headers: { Authorization: `Bearer ${token}` },
            })
            dispatch(updateUser(res.data.information))
        }
        catch (err) {
            console.log(err)
        }
    }
}
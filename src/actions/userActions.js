import { FETCH_USER } from './main-types/main-actions'

//add cart action
export const fetchUser = (data) => {
    return { type: FETCH_USER, data }
}



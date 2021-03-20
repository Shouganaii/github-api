import { FETCH_REPOSITORIES } from './main-types/main-actions'

//add cart action
export const fetchRepositories = (data) => {
    return { type: FETCH_REPOSITORIES, data }
}



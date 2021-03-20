import { FETCH_REPOSITORIES } from '../actions/main-types/main-actions'

const initState = {
    repositories: []
}

const repositories = (state = initState, action) => {
    if (action.type === FETCH_REPOSITORIES) {
        return { ...state, repositories: 'action.data' };
    }
    return state;
}

export default repositories;

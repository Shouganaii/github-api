import { FETCH_REPOSITORIES } from '../actions/main-types/main-actions';
const initState = {
    orders: [],
}
const user = (state = initState, action) => {
    switch (action.type) {
        case FETCH_REPOSITORIES: {
            return { ...state, orders: action.orders }
        }
        default:
            return state;
    }
}

export default user;

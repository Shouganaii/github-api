const initState = {
    name: '',
    user_data: {}
}
const user = (state = initState, action) => {
    switch (action.type) {
        case 'SAVE_USER_NAME': {
            return { ...state, name: action.name }
        }
        case 'SAVE_USER_DATA': {
            return { ...state, user_data: action.user_data }
        }
        default:
            return state;
    }
}

export default user;

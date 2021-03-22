const initState = {
    name: '',
    user_data: {},
    repositories: [],
    single_repository: []
}

const user = (state = initState, action) => {
    switch (action.type) {
        case 'SAVE_USER_NAME': {
            return { ...state, name: action.name }
        }
        case 'SAVE_USER_DATA': {
            return { ...state, user_data: action.user_data }
        }
        case 'SAVE_REPOSITORIES': {
            return { ...state, repositories: action.repositories }
        }
        default:
            return state;
    }
}

export default user;

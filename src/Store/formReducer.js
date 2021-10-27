const defaultState = {
    login: '',
    password: '',
}

export const formReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'CHECK_LOGIN_VALUE':
            return {...state, login: state.login = action.payload}
        case 'CHECK_PASSWORD_VALUE':
            return {...state ,password: state.password = action.payload}
        default:
            return state
    }
}
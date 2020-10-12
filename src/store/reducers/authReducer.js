
const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: 'LOGIN_ERROR'
            }
        case 'LOGIN_SUCCESS':
            console.log('login success');
            console.log(state)
            return {
                ...state,
                authError: null
            }

        case 'LOGOUT_SUCCESS':
            console.log('logout success');
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('sign up was successful');
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('sign up failed');
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state
    }

}

export default authReducer;

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
            console.log(state)
            return {
                ...state,
                authError: null
            }
        default:
            return state
    }

}

export default authReducer;
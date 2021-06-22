const loggedInReducer = (state = false, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return !state; // could also say true here
        default:
            return state;
    }
};

export default loggedInReducer;
const selectIsUserLoggedIn = (state) => state?.domain?.session?.isLoggedIn

const selectIsLogInPending = (state) => state?.domain?.session?.isLogInPending

const selectIsSignUpPending = (state) => state?.domain?.session?.isSignUpPending

const selectToken = (state) => state?.domain?.session?.token

const selectUserId = (state) => state?.domain?.session?.userId

export default { 
    selectToken, 
    selectIsUserLoggedIn, 
    selectIsLogInPending, 
    selectIsSignUpPending, 
    selectUserId 
};
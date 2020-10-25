import Register from "../Register/Register";
import { connect } from "react-redux";
import { actions, selectors } from "../domain";

export const RegisterConnect = connect(
    state => ({
        isLoggedIn: selectors.selectIsUserLoggedIn(state),
        isSignUpPending: selectors.selectIsSignUpPending(state),
    }),
    { handleSignUp: actions.signUp })(Register)

export default RegisterConnect;
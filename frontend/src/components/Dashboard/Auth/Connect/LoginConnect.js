import Login from "../Login/index";
import { connect } from "react-redux";
import { actions, selectors } from "../domain";

const mapDispatchToProps = dispatch => {
    const handleLogIn = ({username, password}) => {
        dispatch(actions.logIn({username, password}))
    }
    return { handleLogIn }
}
const mapStateToProps = state => {
    return {
        isLoggedIn: selectors.selectIsUserLoggedIn(state),
        isLogInPending: selectors.selectIsLogInPending(state)
    }
}

export const LoginConnect = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginConnect;

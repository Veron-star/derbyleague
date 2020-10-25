import Logout from "../Logout/index";
import { connect } from "react-redux";
import { actions } from "../domain";

export const LogoutConnect = connect(undefined, {handleLogOut: actions.logOut})(Logout);

export default LogoutConnect;
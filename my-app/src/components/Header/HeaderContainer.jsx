import React from "react";
import { setUserData, setUserRole } from "../../redux/login-reducer";
import { connect } from "react-redux";
import Header from "./Header";
import axios from "axios";
import { loginAPI } from "../../api/loginAPI";


class HeaderContainer extends React.Component {
  componentDidMount() {
  }


  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.loginPage.isAuth,
    login: state.loginPage.login,
    id: state.loginPage.id,
    isFetching: state.loginPage.isFetching,
    userRole: state.loginPage.userRole
  };
};

export default connect(mapStateToProps, { setUserData, setUserRole })(HeaderContainer);

import React from "react";
import { connect } from "react-redux";
import { receive_loginData } from "../store/actions/fetch_login_data";
import Details from "./details";
import { Button } from "react-bootstrap";
import "./style.css";

const ERROR_MSG = "Username or password is incorrect";

class Login extends React.Component {
  state = {
    loginFlag: false,
  };
  componentDidMount() {
    this.props.receive_loginData();
  }

  username = (event) => {
    this.setState({
      ...this.state,
      username: event.target.value,
    });
  };

  password = (event) => {
    this.setState({
      ...this.state,
      password: event.target.value,
    });
  };

  checkLogin = () => {
    if (
      this.state.username === this.props.loginDetails.username &&
      this.state.password === this.props.loginDetails.password
    ) {
      this.setState({
        loginFlag: true,
        message: "",
      });
    } else {
      this.setState({
        message: ERROR_MSG,
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.loginFlag ? (
          <Details />
        ) : (
          <div className="loginPage">
            <h4>Login</h4>
            <div className="input-group">
              <label className="font-verdana">Username</label>
              <input
                type="text"
                placeholder="username"
                onChange={this.username}
              />
            </div>
            <div className="input-group">
              <label className="font-verdana">Password</label>
              <input
                type="password"
                placeholder="password"
                onChange={this.password}
              />
            </div>
            <Button onClick={this.checkLogin} className="margin-10">
              LOGIN
            </Button>
            <p className="font-color-red margin-to-10">{this.state.message}</p>
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  receive_loginData: () => dispatch(receive_loginData()),
});

const mapStateToProps = (state) => {
  return {
    loginDetails: state.dataReducer.loginDetails,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

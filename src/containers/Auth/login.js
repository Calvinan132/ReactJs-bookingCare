import React, { Component } from "react";
import { connect, useSelector } from "react-redux";
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import "./login.scss";
import { FormattedMessage } from "react-intl";
import { divide } from "lodash";
import { userService } from "../../services/userService";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isShowPass: true,
      errMessage: "",
      errCode: 0,
    };
  }

  handleOnchangeInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleLogin = async () => {
    this.setState({
      errMessage: "",
    });
    try {
      let data = await userService.handleLogin(
        this.state.username,
        this.state.password
      );
      if (data && data.errCode !== 0) {
        this.setState({
          errMessage: data.message,
          errCode: data.errCode,
        });
      }
      if (data && data.errCode === 0) {
        this.props.userLoginSuccess(data.user);
        console.log("Login succeeds");
      }
    } catch (e) {
      if (e.response) {
        if (e.response.data) {
          this.setState({
            errMessage: e.response.data.message,
            errCode: e.response.data.errCode,
          });
        }
      }
    }
  };

  showPassword = (e) => {
    this.setState({
      isShowPass: !this.state.isShowPass,
    });
  };

  render() {
    return (
      <div className="login-bgr">
        <div className="login-container">
          <div className="login-content row">
            <div className="col-12 text-login">Login</div>
            <div className="col-12 form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control text-input"
                name="username"
                placeholder="Enter your username"
                value={this.state.username}
                onChange={(event) => {
                  this.handleOnchangeInput(event);
                }}
              />
            </div>
            <div className="col-12 form-group ">
              <label>Password</label>
              <div className="pass-eye">
                <input
                  type={this.state.isShowPass ? "password" : "text"}
                  className="form-control text-input"
                  name="password"
                  placeholder="Enter your password"
                  value={this.state.password}
                  onChange={(event) => {
                    this.handleOnchangeInput(event);
                  }}
                />
                <div
                  onClick={(e) => {
                    this.showPassword(e);
                  }}
                >
                  <i
                    className={
                      this.state.isShowPass
                        ? "fas fa-eye-slash eye"
                        : "fas fa-eye eye"
                    }
                  ></i>
                </div>
              </div>
            </div>

            <div
              className="col-12"
              style={{ color: this.state.errCode === 0 ? "green" : "red" }}
            >
              {this.state.errMessage}
            </div>

            <div className="col-12">
              <button
                className="btn-input"
                onClick={() => {
                  this.handleLogin();
                }}
              >
                Login
              </button>
            </div>
            <div className="col-12 text-right">
              <span>Forgot your password ?</span>
            </div>
            <div className="col-12 text-center">
              <span className="other-login">Or login with:</span>
            </div>
            <div className="col-12 app-login">
              <i className="fab fa-google gg"></i>
              <i className="fab fa-facebook-f fb"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    // userLoginFail: () => dispatch(actions.userLoginFail()),
    userLoginSuccess: (userInfo) =>
      dispatch(actions.userLoginSuccess(userInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

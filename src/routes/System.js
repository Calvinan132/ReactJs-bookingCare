import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import UserManage from "../containers/System/UserManage";
import CreateUser from "../containers/System/CreateUser";

import RegisterPackageGroupOrAcc from "../containers/System/RegisterPackageGroupOrAcc";
import Header from "../containers/Header/Header";

class System extends Component {
  render() {
    const { systemMenuPath, isLoggedIn } = this.props;
    return (
      <React.Fragment>
        {this.props.isLoggedIn && <Header />}
        <div className="system-container" style={{ height: "100%" }}>
          <div className="system-list" style={{ height: "100%" }}>
            <Switch>
              <Route path="/system/user-manage" component={UserManage} />
              <Route path="/system/CreateUser" component={CreateUser} />
              <Route
                path="/system/register-package-group-or-account"
                component={RegisterPackageGroupOrAcc}
              />
              <Route
                component={() => {
                  return <Redirect to={systemMenuPath} />;
                }}
              />
            </Switch>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    systemMenuPath: state.app.systemMenuPath,
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(System);

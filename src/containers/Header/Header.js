import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { LANGUAGES } from "../../utils";
import * as actions from "../../store/actions";
import Navigator from "../../components/Navigator";
import { adminMenu } from "./menuApp";
import "./Header.scss";
import { changeLanguageAction } from "../../store/actions";

class Header extends Component {
  changeLanguage = async (language) => {
    await this.props.changeLanguageActionRedux(language);
  };
  render() {
    const { processLogout, userInfo, language } = this.props;
    let nowLang = language;
    return (
      <div className="header-container">
        {/* thanh navigator */}
        <div className="header-tabs-container">
          <Navigator menus={adminMenu} />
        </div>

        {/* nút logout */}
        <div className="right-content">
          <div className="Welcome">
            <FormattedMessage id="homeHeader.Welcome"></FormattedMessage>{" "}
            {userInfo && userInfo.firstName ? userInfo.firstName : ""} !
          </div>
          <div className="language">
            <div
              className={
                nowLang === LANGUAGES.VI ? "lang-vi active" : "lang-vi"
              }
            >
              <span onClick={() => this.changeLanguage(LANGUAGES.VI)}>VN</span>
            </div>
            <div
              className={
                nowLang === LANGUAGES.EN ? "lang-en active" : "lang-en"
              }
            >
              <span onClick={() => this.changeLanguage(LANGUAGES.EN)}>EN</span>
            </div>
          </div>
          <div className="btn btn-logout" onClick={processLogout}>
            <i className="fas fa-sign-out-alt"></i>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    userInfo: state.user.userInfo,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguageActionRedux: (language) =>
      dispatch(changeLanguageAction(language)),
    processLogout: () => dispatch(actions.processLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

import React, { Component } from "react";
import { connect } from "react-redux";
import "./Homeheader.scss";
import { FormattedMessage } from "react-intl";
import { LANGUAGES } from "../../utils";
import { changeLanguageAction } from "../../store/actions";
import { Link } from "react-router-dom";
import { path } from "../../utils";

import img1 from "../../assets/Banner-Option/kham_chuyenkhoa.png";
import img2 from "../../assets/Banner-Option/kham_tuxa.png";
import img3 from "../../assets/Banner-Option/kham_tongquat.png";
import img4 from "../../assets/Banner-Option/dichvu_xetnghiem.png";
import img5 from "../../assets/Banner-Option/suckhoe_tinhthan.png";
import img6 from "../../assets/Banner-Option/kham_nhakhoa.png";

class HomeHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchPlaceholder: "",
      index: 0,
      isSubNav: false,
    };
    if (this.props.language === "vi") {
      this.words = [
        "Tìm lý do khám bệnh",
        "Tìm gói khám",
        "Tìm chuyên khoa",
        "Tìm bác sĩ",
      ];
    } else {
      this.words = [
        "Telemedicine consultation",
        "General health checkup",
        "Medical tests",
        "Mental health",
        "Dental checkup",
      ];
    }
  }

  handleSubNav = (e) => {
    this.setState({
      isSubNav: !this.state.isSubNav,
    });
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => {
        const newIndex = (prevState.index + 1) % this.words.length;
        return {
          index: newIndex,
          searchPlaceholder: this.words[newIndex],
        };
      });
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  BannerOption = (props) => {
    return (
      <div className="contentContainer">
        <div className="content-img">
          <img src={props.img} alt={props.title}></img>
        </div>
        <div className="content-option">{props.name}</div>
      </div>
    );
  };

  bannerData = [
    {
      img: img1,
      title: <FormattedMessage id="bannerContent.content1"></FormattedMessage>,
      name: <FormattedMessage id="bannerContent.content1"></FormattedMessage>,
    },
    {
      img: img2,
      title: <FormattedMessage id="bannerContent.content2"></FormattedMessage>,
      name: <FormattedMessage id="bannerContent.content2"></FormattedMessage>,
    },

    {
      img: img3,
      title: <FormattedMessage id="bannerContent.content3"></FormattedMessage>,
      name: <FormattedMessage id="bannerContent.content3"></FormattedMessage>,
    },
    {
      img: img4,
      title: <FormattedMessage id="bannerContent.content4"></FormattedMessage>,
      name: <FormattedMessage id="bannerContent.content4"></FormattedMessage>,
    },
    {
      img: img5,
      title: <FormattedMessage id="bannerContent.content5"></FormattedMessage>,
      name: <FormattedMessage id="bannerContent.content5"></FormattedMessage>,
    },
    {
      img: img6,
      title: <FormattedMessage id="bannerContent.content6"></FormattedMessage>,
      name: <FormattedMessage id="bannerContent.content6"></FormattedMessage>,
    },
  ];

  changeLanguage = async (language) => {
    await this.props.changeLanguageActionRedux(language);
    if (this.props.language === "vi") {
      this.words = [
        "Tìm lý do khám bệnh",
        "Tìm gói khám",
        "Tìm chuyên khoa",
        "Tìm bác sĩ",
      ];
    } else {
      this.words = [
        "Telemedicine consultation",
        "General health checkup",
        "Medical tests",
        "Mental health",
        "Dental checkup",
      ];
    }
  };
  render() {
    let nowLang = this.props.language;
    return (
      <React.Fragment>
        <div className="Home-header-container">
          <div className="Home-header-content">
            <div className="content-left">
              <i
                onClick={(e) => this.handleSubNav(e)}
                className="bars fas fa-bars"
              ></i>
              <div className="content-logo"></div>
            </div>
            <div className="content-mid">
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="homeHeader.Specialty"></FormattedMessage>
                  </b>
                </div>
                <div>
                  <FormattedMessage id="homeHeader.Specialty-sub"></FormattedMessage>
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="homeHeader.Healthcare-facility"></FormattedMessage>
                  </b>
                </div>
                <div>
                  <FormattedMessage id="homeHeader.Healthcare-facility-sub"></FormattedMessage>
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="homeHeader.Doctor"></FormattedMessage>
                  </b>
                </div>
                <div>
                  <FormattedMessage id="homeHeader.Doctor-sub"></FormattedMessage>
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="homeHeader.Health-check-package"></FormattedMessage>
                  </b>
                </div>
                <div>
                  <FormattedMessage id="homeHeader.Health-check-package-sub"></FormattedMessage>
                </div>
              </div>
            </div>
            <div className="content-right">
              <div className="support">
                <i className="fas fa-question-circle"></i>
                <div className="support-text">
                  <FormattedMessage id="homeHeader.Support"></FormattedMessage>
                </div>
              </div>
              <div className="lang">
                <div
                  className={
                    nowLang === LANGUAGES.VI ? "lang-vi active" : "lang-vi"
                  }
                >
                  <span onClick={() => this.changeLanguage(LANGUAGES.VI)}>
                    VN
                  </span>
                </div>
                <div
                  className={
                    nowLang === LANGUAGES.EN ? "lang-en active" : "lang-en"
                  }
                >
                  <span onClick={() => this.changeLanguage(LANGUAGES.EN)}>
                    EN
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={this.state.isSubNav ? "Sub-nav" : "Sub-nav active"}
          onClick={(e) => this.handleSubNav(e)}
        >
          <div
            className="Sub-nav-container"
            onClick={(e) => e.stopPropagation()}
          >
            <ul>
              <li>
                <i
                  onClick={(e) => this.handleSubNav(e)}
                  className="fas fa-times"
                  style={{
                    position: "absolute",
                    top: "0",
                    right: "0",
                    padding: "15px",
                    fontSize: "20px",
                    cursor: "pointer",
                  }}
                ></i>
              </li>
              <li>
                <div className="sub-nav-title">Trang chủ</div>
                <i className="fas fa-home"></i>
              </li>
              <li>
                <Link to={path.SYSTEM}>
                  Quản lý <i className="fas fa-tasks"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{ width: "100%", height: "70px", backgroundColor: "white" }}
        ></div>
        <div className="Home-header-banner">
          <div className="banner-container-up">
            <h1 className="tile-banner">
              <FormattedMessage id="midHeaderContent.title1"></FormattedMessage>
              <br></br>
              <b>
                <FormattedMessage id="midHeaderContent.title2"></FormattedMessage>
              </b>
            </h1>
            <div className="search">
              <i className="fas fa-search"></i>
              <input
                type="text"
                placeholder={this.state.searchPlaceholder}
              ></input>
            </div>
            <div className="option"></div>
          </div>
          <div className="banner-container-down">
            {this.bannerData.map((item, index) => (
              <this.BannerOption
                key={index}
                img={item.img}
                title={item.title}
                name={item.name}
              />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguageActionRedux: (language) =>
      dispatch(changeLanguageAction(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);

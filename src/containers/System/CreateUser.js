import React, { Component } from "react";
// import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./CreateUser.scss";
import { getAllCode } from "../../services/userService";
import { LANGUAGES } from "../../utils";
import * as actions from "../../store/actions";
class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genderArr: [],
      roleArr: [],
      positionArr: [],
    };
  }

  async componentDidMount() {
    this.props.getGenderStart();
    // try {
    //   let res = await getAllCode("gender");
    //   if (res && res.errCode === 0) {
    //     this.setState({
    //       genderArr: res.data,
    //     });
    //   }
    // } catch (e) {
    //   console.log(e);
    // }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.genderRedux !== this.props.genderRedux) {
      this.setState({
        genderArr: this.props.genderRedux,
      });
    }
  }
  render() {
    let genders = this.state.genderArr;
    let nowLang = this.props.language;

    return (
      <React.Fragment>
        <div className="register-container">
          <div className="register-content">
            <div className="container row">
              <div className="col-12 mt-3">
                <b>Trang đăng kí</b>
              </div>
              <div className="col-6 mt-5">
                <label>First Name</label>
                <input className="form-control" type="text"></input>
              </div>
              <div className="col-6 mt-5">
                <label>Last Name</label>
                <input className="form-control" type="text"></input>
              </div>
              <div className="col-6 mt-3">
                <label>Email</label>
                <input className="form-control" type="email"></input>
              </div>
              <div className="col-6 mt-3">
                <label>Phone Number</label>
                <input className="form-control" type="text"></input>
              </div>
              <div className="col-6 mt-3">
                <label>Password</label>
                <input className="form-control" type="password"></input>
              </div>
              <div className="col-6 mt-3">
                <label>Confirm Password</label>
                <input className="form-control" type="password"></input>
              </div>
              <div className="col-6 mt-3">
                <label>Address</label>
                <input className="form-control" type="text"></input>
              </div>
              <div className="col-3 mt-3">
                <label>Role</label>
                <select name="role" class="form-control">
                  <option value="1">Admin</option>
                  <option value="2">Doctor</option>
                  <option value="3">Patient</option>
                </select>
              </div>
              <div className="col-3 mt-3">
                <label>Position</label>
                <select name="position" class="form-control">
                  <option value="1">Tiến sĩ</option>
                  <option value="2">Bác sĩ</option>
                  <option value="3">Phó tiến sĩ</option>
                </select>
              </div>
              <div className="col-3 mt-3">
                <label>Gender</label>
                <select name="position" class="form-control">
                  {genders && genders.length > 0 ? (
                    genders.map((item, index) => {
                      return (
                        <option value={index}>
                          {nowLang === LANGUAGES.VI
                            ? item.valueVi
                            : item.valueEn}
                        </option>
                      );
                    })
                  ) : (
                    <option value="1">Choose...</option>
                  )}
                </select>
              </div>
              <div className="col-3 mt-3">
                <label>Avatar</label>
                <input className="form-control" type="text"></input>
              </div>
              <div className="col-12 mt-3 d-flex justify-content-center">
                <button>Register</button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    genderRedux: state.admin.genders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGenderStart: () => dispatch(actions.fetchGenderStart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);

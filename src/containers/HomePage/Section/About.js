import React, { Component } from "react";
import { connect } from "react-redux";
import "./About.scss";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="about-container">
        <div className="about-content row">
          <div className="left-content col-6">
            <div className="logo"></div>
            <strong>Công ty Cổ phần Công nghệ BookingCare</strong>
            <div className="address-left">
              <i class="fas fa-map-marker-alt"></i>
              <div>28 Thành Thái, Dịch Vọng, Cầu Giấy, Hà Nội</div>
            </div>
            <div className="address-left">
              <i class="fas fa-check"></i>
              <div>ĐKKD số: 0106790291. Sở KHĐT Hà Nội cấp ngày 16/03/2015</div>
            </div>
            <div className="checkVar">
              <div className="img1"></div>
              <div className="img2"></div>
            </div>
          </div>
          <div className="mid-content col-3">
            <ul>
              <li>
                <a>Liên hệ hợp tác</a>
              </li>
              <li>
                <a>Gói chuyển đổi số doanh nghiệp</a>
              </li>
              <li>
                <a>Tuyển dụng</a>
              </li>
              <li>
                <a>Câu hỏi thường gặp</a>
              </li>
              <li>
                <a>Điều khoản sử dụng</a>
              </li>
              <li>
                <a>Chính sách bảo mật</a>
              </li>
              <li>
                <a>Quy trình hỗ trợ giải quyết khiếu nại</a>
              </li>
              <li>
                <a>Quy chế hoạt động</a>
              </li>
            </ul>
          </div>
          <div className="right-content col-3">
            <div className="headQuarter">
              <strong>Trụ sở tại Hà Nội</strong>
              <br></br>
              <div className="address-right">
                28 Thành Thái, Dịch Vọng, Cầu Giấy, Hà Nội
              </div>
            </div>
            <div className="headQuarter">
              <strong>Văn phòng tại TP Hồ Chí Minh</strong>
              <br></br>
              <div className="address-right">
                Số 01, Hồ Bá Kiện, Phường 15, Quận 10
              </div>
            </div>
            <div className="headQuarter">
              <strong>Hỗ trợ khách hàng</strong>
              <br></br>
              <div className="address-right">
                support@bookingcare.vn (7h30 - 20h)
              </div>
            </div>
          </div>
        </div>
      </div>
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(About);

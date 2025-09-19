import React, { Component } from "react";
import { connect } from "react-redux";
import "./Handbook.scss";

import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import img
import img1 from "../../../assets/Slider/handbook/153242-benh-vien-kham-ho-hap-ha-noi.png";
import img2 from "../../../assets/Slider/handbook/001754-bac-si-ho-hap-gioi-ha-noi.png";
import img3 from "../../../assets/Slider/handbook/162807-nieng-rang-tphcm.png";
import img4 from "../../../assets/Slider/handbook/012040-review--nha-khoa-trong-rang-implant--uy-tin-tai-tp-hcm-phan-2.jpg";

class Handbook extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  slickSlider = (props) => {
    return (
      <div className="img-container">
        <div
          className="img"
          style={{
            background: `url(${props.img}) center center`,
            textAlign: "center",
          }}
        ></div>
        <div
          style={{ textAlign: "center", fontWeight: "bold", marginTop: "5px" }}
        >
          {props.title}
        </div>
      </div>
    );
  };

  SliderHandbook = [
    {
      img: img1,
      title: "Top 6 bệnh viện, phòng khám Hô hấp uy tín Hà Nội",
    },
    {
      img: img2,
      title: "Top 7 bác sĩ Hô hấp giỏi, có tiếng tại Hà Nội",
    },
    {
      img: img3,
      title: "7 Địa chỉ niềng răng uy tín tại TP.Hồ Chí Minh",
    },
    {
      img: img4,
      title: "8 Địa chỉ trồng răng uy tín tại TP.Hồ Chí Minh",
    },
  ];

  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 10000,
      responsive: [
        {
          breakpoint: 576, // mobile lớn
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false, // ẩn mũi tên để gọn hơn
          },
        },
      ],
    };
    return (
      <div className="Handbook-container">
        <div className="Handbook-content">
          <div className="slider-title">
            <h3>cẩm nang</h3>
          </div>
          <div className="seeMore">Tất cả bài viết</div>
          <Slider {...settings}>
            {this.SliderHandbook.map((item, index) => (
              <this.slickSlider img={item.img} title={item.title} />
            ))}
          </Slider>
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

export default connect(mapStateToProps, mapDispatchToProps)(Handbook);

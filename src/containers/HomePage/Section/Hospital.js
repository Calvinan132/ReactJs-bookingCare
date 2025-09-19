import React, { Component } from "react";
import { connect } from "react-redux";
import "./Hospital.scss";

import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import img

import bvVietDuc from "../../../assets/Slider/hospital/lo-go-viet-duc.jpg";
import bvchoray from "../../../assets/Slider/hospital/logo-bvcr-moi.jpg";
import bvYDuoc from "../../../assets/Slider/hospital/logo-y-duoc-1.jpg";
import bvHungVuong from "../../../assets/Slider/hospital/benhvienhungviet1.png";
import bvK from "../../../assets/Slider/hospital/anh-bia-bvk.jpg";
import bvyCoTruyenTW from "../../../assets/Slider/hospital/bv-yhcttw.jpg";

class Hospital extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  slickSlider = (props) => {
    return (
      <div>
        <div
          className="img"
          style={{
            background: `url(${props.img}) center center`,
            textAlign: "center",
          }}
        ></div>
        <div style={{ textAlign: "center" }}>{props.name}</div>
      </div>
    );
  };

  SliderHospital = [
    {
      img: bvVietDuc,
      name: "Bệnh viện hữu nghị Việt Đức",
    },
    {
      img: bvchoray,
      name: "Bệnh viện Chợ Rẫy",
    },
    {
      img: bvYDuoc,
      name: "Đại học y dược",
    },
    {
      img: bvHungVuong,
      name: "Bệnh viện Hùng Vương",
    },
    {
      img: bvK,
      name: "Bệnh viện K - cơ sở 1",
    },
    {
      img: bvyCoTruyenTW,
      name: "Bệnh viện y học cổ truyển trung ương",
    },
  ];

  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 10000,
      responsive: [
        {
          breakpoint: 1440, // màn hình desktop lớn
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 1200, // laptop
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992, // tablet ngang
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768, // tablet dọc
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 576, // mobile lớn
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false, // ẩn mũi tên để gọn hơn
          },
        },
        {
          breakpoint: 375, // mobile nhỏ
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          },
        },
      ],
    };
    return (
      <div className="Hospital-container">
        <div className="Hospital-content">
          <div className="slider-title">
            <h3>Cơ sở y tế nổi bật</h3>
          </div>
          <div className="seeMore">Xem thêm</div>
          <Slider {...settings}>
            {this.SliderHospital.map((item, index) => (
              <this.slickSlider img={item.img} name={item.name} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Hospital);

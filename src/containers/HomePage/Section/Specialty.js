import React, { Component } from "react";
import { connect } from "react-redux";
import "./Specialty.scss";

import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import img
import xuongKhop from "../../../assets/Slider/Specialty/120331-co-xuong-khop.jpg";
import timMach from "../../../assets/Slider/Specialty/120741-tim-mach.jpg";
import tieuHoa from "../../../assets/Slider/Specialty/120933-tieu-hoa.jpg";
import thanKinh from "../../../assets/Slider/Specialty/121042-than-kinh.jpg";
import taiMuiHong from "../../../assets/Slider/Specialty/121146-tai-mui-hong.jpg";
import cotSong from "../../../assets/Slider/Specialty/121215-cot-song.jpg";
import yCoTruyen from "../../../assets/Slider/Specialty/121232-y-hoc-co-truyen.jpg";
import chamCuu from "../../../assets/Slider/Specialty/121305-cham-cuu.jpg";
import sanPhu from "../../../assets/Slider/Specialty/181822-san-phu-khoa.jpg";
import nhiKhoa from "../../../assets/Slider/Specialty/175620-nhi-khoa.jpg";

class Specialty extends Component {
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

  SliderSpecialty = [
    {
      img: xuongKhop,
      name: "Khoa xương khớp",
    },
    {
      img: timMach,
      name: "Khoa tim mạch",
    },
    {
      img: tieuHoa,
      name: "Khoa tiêu hóa",
    },
    {
      img: thanKinh,
      name: "Khoa thần kinh",
    },
    {
      img: taiMuiHong,
      name: "Khoa tai mũi họng",
    },
    {
      img: cotSong,
      name: "Khoa cột sống",
    },
    {
      img: yCoTruyen,
      name: "Khoa y học cổ truyền",
    },
    {
      img: chamCuu,
      name: "Khoa châm cứu",
    },
    {
      img: sanPhu,
      name: "Khoa sản phụ",
    },
    {
      img: nhiKhoa,
      name: "Khoa nhi",
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
      <div className="Specialty-container">
        <div className="Specialty-content">
          <div className="slider-title">
            <h3>Chuyên khoa phổ biến</h3>
          </div>
          <div className="seeMore">Xem thêm</div>
          <Slider {...settings}>
            {this.SliderSpecialty.map((item, index) => (
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);

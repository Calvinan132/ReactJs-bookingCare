import React, { Component } from "react";
import { connect } from "react-redux";
import "./OutStandingDoctor.scss";

import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import img
import PhamKienHuu from "../../../assets/Slider/outStandingDoctor/121012giao-su-pham-kien-huu.jpg";
import NguyenThanhBinh from "../../../assets/Slider/outStandingDoctor/144258pho-giao-su-nguyen-thanh-binh-c.jpg";
import VuThaiHa from "../../../assets/Slider/outStandingDoctor/180640bac-si-vu-thai-ha.jpg";
import NguyenVanDoanh from "../../../assets/Slider/outStandingDoctor/170155nguyen-van-doanh.jpg";
import DoNhuHon from "../../../assets/Slider/outStandingDoctor/113131-gs-do-nhu-hon.jpg";

class OutStandingDoctor extends Component {
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
          style={{
            textAlign: "center",
            marginTop: "10px",
            fontWeight: "bold",
            fontSize: "smaller",
          }}
        >
          {props.name}
        </div>

        <div className="specialty" style={{ color: "gray" }}>
          {props.specialty}
        </div>
      </div>
    );
  };

  SliderDoctor = [
    {
      img: PhamKienHuu,
      name: "Giáo sư, Tiến sĩ Phạm Kiên Hữu",
      specialty: "Tai mũi họng",
    },
    {
      img: NguyenThanhBinh,
      name: "Phó giáo sư, Tiến sĩ Nguyễn Thanh Bình",
      specialty: "Thần kinh",
    },
    {
      img: VuThaiHa,
      name: "Tiến sĩ, Bác sĩ Vũ Thái Hà",
      specialty: "Da liễu",
    },
    {
      img: NguyenVanDoanh,
      name: "Tiến sĩ, Bác sĩ Nguyễn Văn Doanh",
      specialty: "Thần kinh",
    },
    {
      img: DoNhuHon,
      name: "Giáo sư,Thầy thuốc nhân dân Đỗ Như Hơn",
      specialty: "Khoa mắt",
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
      <div className="OutStandingDoctor-container">
        <div className="OutStandingDoctor-content">
          <div className="slider-title">
            <h3>Bác sĩ nổi bật tuần qua</h3>
          </div>
          <div className="seeMore">Xem thêm</div>
          <Slider {...settings}>
            {this.SliderDoctor.map((item, index) => (
              <this.slickSlider
                img={item.img}
                name={item.name}
                specialty={item.specialty}
              />
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

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);

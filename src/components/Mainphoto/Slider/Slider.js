import React, { Component } from "react";
import Slider from "react-slick";
import '../Slider/Slider.scss'

  
export default class Responsive extends Component {
    render() {
      var settings = {
        dots:false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      return (
        <div className="container__slide">
          <Slider {...settings}>
            <div className="slide__img">
              <img src={require("../../../assets/casts/1.jpg")} alt="logo" />
            </div>
            <div className="slide__img">
              <img src={require("../../../assets/casts/2.jpg")} alt="logo" />
            </div>
            <div className="slide__img">
              <img src={require("../../../assets/casts/3.jpg")} alt="logo" />
            </div>
            <div className="slide__img">
              <img src={require("../../../assets/casts/4.jpg")} alt="logo" />
            </div>
            <div className="slide__img">
              <img src={require("../../../assets/casts/5.jpg")} alt="logo" />
            </div>
            <div className="slide__img">
              <img src={require("../../../assets/casts/6.jpg")} alt="logo" />
            </div>
            <div className="slide__img">
              <img src={require("../../../assets/casts/7.jpg")} alt="logo" />
            </div>
            <div className="slide__img">
              <img src={require("../../../assets/casts/8.jpg")} alt="logo" />
            </div>
          </Slider>
        </div>
      );
    }
  }

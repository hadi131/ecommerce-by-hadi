import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const header = () => {
  const banner = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed:2000,
    dots: false,
    arrows: false,
 autoplay:true,
 autoplaySpeed:2000
  };
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 4,
    initialSlide: 0,
   
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6
          
          // infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <header>
        <marquee behavior="" direction="left" className="header-marquee">
          Deliveries in Islamabad and Lahore might get delayed due to weather
          conditions.
        </marquee>
        <div className="headerNavigation">
          <div className="headerLogo">
            <div className="menuIcon">
              <AiOutlineMenu />
            </div>
            <div className="logo">
              <Link href={"/"}>EDIFY</Link>
            </div>
          </div>

          <div className="headerSearch">
            <input
              type="text"
              className="headerSearchBar"
              placeholder="Search..."
            />
          </div>

          <div className="loginRegister">
            <button className="login headerBtn">Log In</button>
            <button className="register headerBtn">Register</button>
          </div>
        </div>
      </header>
      <div className="productNaviagtion">
        <div className="productNaviagtionInnerDiv">
          <Slider {...settings}>
            <div className="navElements">
              <div className="navImages">
                {" "}
                <Image
                  src="https://static.priceoye.pk/images/home/mobiles.svg"
                  width={50}
                  height={50}
                ></Image>
              </div>
              Mobiles
            </div>
            <div className="navElements">
              <div className="navImages">
                {" "}
                <Image
                  src="https://static.priceoye.pk/images/home/smart-watches.svg"
                  width={50}
                  height={50}
                ></Image>
              </div>
              Smart Watches
            </div>
            <div className="navElements">
              <div className="navImages">
                <Image
                  src="https://static.priceoye.pk/images/home/wireless-earbuds.svg"
                  width={50}
                  height={50}
                ></Image>
              </div>
              Wireless Buds
            </div>
            <div className="navElements">
              <div className="navImages">
                <Image
                  src="https://static.priceoye.pk/images/home/bluetooth-speakers.svg"
                  width={50}
                  height={50}
                ></Image>
              </div>
              Bluetooth Speaker
            </div>
            <div className="navElements">
              <div className="navImages">
                <Image
                  src="https://static.priceoye.pk/images/home/power-banks.svg"
                  width={50}
                  height={50}
                ></Image>
              </div>
              Power Banks
            </div>
            <div className="navElements">
              <div className="navImages">
                <Image
                  src="https://static.priceoye.pk/images/home/laptops.svg"
                  width={50}
                  height={50}
                ></Image>
              </div>
              Laptops
            </div>
            <div className="navElements">
              <div className="navImages">
                <Image
                  src="https://static.priceoye.pk/images/home/tablets.svg"
                  width={50}
                  height={50}
                ></Image>
              </div>
              Tablets
            </div>
          </Slider>
        </div>
      </div>
      <div className="banner">
        <Slider {...banner}>
          <div>
            <img className="bannerImg" src="/images/headerBanner.jpg" alt="" />
          </div>

          <div>
            <img className="bannerImg" src="/images/headerBanner3.jpg" alt="" />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default header;

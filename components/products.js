import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
const products = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 4,
    initialSlide: 0,
   
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll:4 
          
          // infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          // initialSlide: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
  return (
    <>
      <div className="maxWidthBody" style={{ paddingBottom: "20px" }}>
        <h3 className="latest">Latest Wireless Earbuds </h3>
        <div className="cardGrid">

<Slider {...settings}>

<div>

          <div className="card">
            <div className="imageDiv">
              <img className="productImg" src="/images/product.webp" alt="" />
            </div>
            <div className="prodDesc">M10 TWS Wireless Bluetooth Earbuds</div>
            <div className="price">Rs. 1,149</div>
            <div className="discPrice">
              <span className="origional">Rs. 2,499</span>
              <span className="discount"> 54% OFF</span>
            </div>
          </div>










          <div className="card">
            <div className="imageDiv">
              <img className="productImg" src="/images/product.webp" alt="" />
            </div>
            <div className="prodDesc">M10 TWS Wireless Bluetooth Earbuds</div>
            <div className="price">Rs.1,149</div>
            <div className="discPrice">
              <span className="origional">Rs. 2,499</span>
              <span className="discount"> 54% OFF</span>
            </div>
          </div>



</div>





<div>


          <div className="card">
            <div className="imageDiv">
              <img className="productImg" src="/images/product.webp" alt="" />
            </div>
            <div className="prodDesc">M10 TWS Wireless Bluetooth Earbuds</div>
            <div className="price">Rs. 1,149</div>
            <div className="discPrice">
              <span className="origional">Rs. 2,499</span>
              <span className="discount"> 54% OFF</span>
            </div>
          </div>










          <div className="card">
            <div className="imageDiv">
              <img className="productImg" src="/images/product.webp" alt="" />
            </div>
            <div className="prodDesc">M10 TWS Wireless Bluetooth Earbuds</div>
            <div className="price">Rs. 1,149</div>
            <div className="discPrice">
              <span className="origional">Rs. 2,499</span>
              <span className="discount"> 54% OFF</span>
            </div>
          </div>




</div>


<div>




          <div className="card">
            <div className="imageDiv">
              <img className="productImg" src="/images/product.webp" alt="" />
            </div>
            <div className="prodDesc">M10 TWS Wireless Bluetooth Earbuds</div>
            <div className="price">Rs. 1,149</div>
            <div className="discPrice">
              <span className="origional">Rs. 2,499</span>
              <span className="discount"> 54% OFF</span>
            </div>
          </div>










          <div className="card">
            <div className="imageDiv">
              <img className="productImg" src="/images/product.webp" alt="" />
            </div>
            <div className="prodDesc">M10 TWS Wireless Bluetooth Earbuds</div>
            <div className="price">Rs. 1,149</div>
            <div className="discPrice">
              <span className="origional">Rs. 2,499</span>
              <span className="discount"> 54% OFF</span>
            </div>
          </div>






</div>


<div>


          <div className="card">
            <div className="imageDiv">
              <img className="productImg" src="/images/product.webp" alt="" />
            </div>
            <div className="prodDesc">M10 TWS Wireless Bluetooth Earbuds</div>
            <div className="price">Rs. 1,149</div>
            <div className="discPrice">
              <span className="origional">Rs. 2,499</span>
              <span className="discount"> 54% OFF</span>
            </div>
          </div>










          <div className="card">
            <div className="imageDiv">
              <img className="productImg" src="/images/product.webp" alt="" />
            </div>
            <div className="prodDesc">M10 TWS Wireless Bluetooth Earbuds</div>
            <div className="price">Rs. 1,149</div>
            <div className="discPrice">
              <span className="origional">Rs. 2,499</span>
              <span className="discount"> 54% OFF</span>
            </div>
          </div>


</div>

<div>


          <div className="card">
            <div className="imageDiv">
              <img className="productImg" src="/images/product.webp" alt="" />
            </div>
            <div className="prodDesc">M10 TWS Wireless Bluetooth Earbuds</div>
            <div className="price">Rs. 1,149</div>
            <div className="discPrice">
              <span className="origional">Rs. 2,499</span>
              <span className="discount"> 54% OFF</span>
            </div>
          </div>










          <div className="card">
            <div className="imageDiv">
              <img className="productImg" src="/images/product.webp" alt="" />
            </div>
            <div className="prodDesc">M10 TWS Wireless Bluetooth Earbuds</div>
            <div className="price">Rs. 1,149</div>
            <div className="discPrice">
              <span className="origional">Rs. 2,499</span>
              <span className="discount"> 54% OFF</span>
            </div>
          </div>


</div>

<div>


          <div className="card">
            <div className="imageDiv">
              <img className="productImg" src="/images/product.webp" alt="" />
            </div>
            <div className="prodDesc">M10 TWS Wireless Bluetooth Earbuds</div>
            <div className="price">Rs. 1,149</div>
            <div className="discPrice">
              <span className="origional">Rs. 2,499</span>
              <span className="discount"> 54% OFF</span>
            </div>
          </div>










          <div className="card">
            <div className="imageDiv">
              <img className="productImg" src="/images/product.webp" alt="" />
            </div>
            <div className="prodDesc">M10 TWS Wireless Bluetooth Earbuds</div>
            <div className="price">Rs. 1,149</div>
            <div className="discPrice">
              <span className="origional">Rs. 2,499</span>
              <span className="discount"> 54% OFF</span>
            </div>
          </div>


</div>

<div>


          <div className="card">
            <div className="imageDiv">
              <img className="productImg" src="/images/product.webp" alt="" />
            </div>
            <div className="prodDesc">M10 TWS Wireless Bluetooth Earbuds</div>
            <div className="price">Rs. 1,149</div>
            <div className="discPrice">
              <span className="origional">Rs. 2,499</span>
              <span className="discount"> 54% OFF</span>
            </div>
          </div>










          <div className="card">
            <div className="imageDiv">
              <img className="productImg" src="/images/product.webp" alt="" />
            </div>
            <div className="prodDesc">M10 TWS Wireless Bluetooth Earbuds</div>
            <div className="price">Rs. 1,149</div>
            <div className="discPrice">
              <span className="origional">Rs. 2,499</span>
              <span className="discount"> 54% OFF</span>
            </div>
          </div>


</div>










</Slider>
          
        </div>
      </div>
    </>
  );
};

export default products;

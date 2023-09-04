import React from "react";
import "../Assets/CSS/Navbar.css";
import logo from "../Assets/Images/logodemo.png";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
// import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

// import slider1 from "../Assets/Images/sld1.jpg";
// import slider2 from "../Assets/Images/sld2.jpg";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar_contents">
          <div className="tagline">
            <p>The Premier Showroom In Your City - Now Also Available Online</p>
          </div>
          <div>
            <div className="currency_default"><div className="currency_rupees"><p>₹ Currency </p></div>
<div className="currency_change">
  <p>$ Dollar</p>
  <p>¥ Yen</p>
  <p>€ Euro</p>
</div>
            </div>
          </div>
        </div>
      </div>
      <div className="menubar_position">
        <div className="menubar">
          <img className="logo" alt="logo" src={logo}></img>
          <div className="menu">
            <div className="menuactions">
              {" "}
              <p>Women</p>
              <div className="women_menu_contents">
                <div className="wmc_position">
                  <div className="wmc_jewellery">
                    <h4 className="wmc_menus">Jewellery</h4>
                    <p className="wmc_menus">Necklace</p>
                    <p className="wmc_menus">Bracelet</p>
                    <p className="wmc_menus">Ring</p>
                  </div>
                  <div className="wmc_fashion">
                    <h4 className="wmc_menus">Fashion</h4>
                    <p className="wmc_menus">Kurti</p>
                    <p className="wmc_menus">Saree</p>
                    <p className="wmc_menus">Lehenga</p>
                  </div>
                  <div className="wmc_accessories">
                  <h4 className="wmc_menus">Accessories</h4>
                    <p className="wmc_menus">Handbag</p>
                    <p className="wmc_menus">Shoes</p>
                    <p className="wmc_menus">stickers</p>
                  </div>
                </div>
              </div>
            </div>
            <p>Men</p>
            <p>Kids</p>
            <p>Footwear</p>
            <p>Examples</p>
          </div>
          <div className="menubaricons">
            <div className="searchicon">
              <SearchIcon />
            </div>
            <div className="signicon">
              <PersonIcon />
              <p className="menuicontext">sign in</p>
            </div>
            <div className="basketicon">
              <ShoppingBasketIcon />
              <p className="menuicontext">items</p>
            </div>
          </div>
        </div>
      </div>
      <div className="banner">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className="sliderimage">
              <div className="slider_content">
                <h1 className="sliderh1">Fresh arrival in your</h1>
                <h1 className="sliderh1">city store</h1>
                <p className="sliderpara">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text.
                </p>
                <button className="sliderbutton">Shop Now</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sliderimage2">
              <div className="slider_content2">
                <h1 className="sliderh1">Fresh arrival in your</h1>
                <h1 className="sliderh1">city store</h1>
                <p className="sliderpara">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text.
                </p>
                <button className="sliderbutton">Shop Now</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import banner01 from "../../assests/images/banner/banner-image-01.png"
const Slider = () => { 


  return (
    <section className="main-banner">
    <div className="container">
        <div className="row">
            <div className="col-lg-7 mb-lg-0 order-2 order-lg-0 d-flex align-items-center">
                <div className="banner-two-start">
                    <h1 className="font-title--lg">Learn with Expert Anytime Anywhere.</h1>
                    <p>
                        Our mision is to help people to find the best course online and learn with expert anytime, anywhere.
                    </p>
                    <form>
                        <div className="banner-input">
                            <div className="main-input">
                                <input type="text" placeholder="what do you want to learn today..." />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-search"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </div>
                            <div className="search-button">
                                <button className="button button-lg button--primary">Search</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-lg-5 order-1 order-lg-0">
                <div className="main-banner-end">
                    <img src={banner01} alt="image" className="img-fluid" />
                </div>
            </div>
        </div>
    </div>
</section>
  );
};

export default Slider;


import React, { useState, useRef, useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { getHomePage } from '../Store/home';
import Slider from 'react-slick';
import img from '../image/Booklet-Guy-Logo.jpeg'
import img1 from '../image/HES-logo_blackbg.png'
import img2 from '../image/Logo_IndiaPositiveCitizen.jpg'
import img3 from '../image/TSIC-New-Logo2.png'
import img4 from '../image/Tiger-Comics-Logo.png'
import img5 from '../image/adepto.png'
import img6 from '../image/core.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Partners = () => {

    //REDUCER START
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getHomePage());
    // }, []);

    // const homePage = useSelector(state => state.home.HomePage);


    const settings1 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <>
            <section className="py-4">
                <div className="container text-center partner">
                    <h1>Our Partners</h1>
                    <div className="partner-items">
                        <Slider {...settings1}>
                                <div className="m-1">
                                    <div className="partner-list">
                                        <img src={img} style={{objectFit:'cover'}} className="img-fluid" />
                                    </div>
                                </div>
                                <div className="m-1">
                                    <div className="partner-list">
                                        <img src={img1} className="img-fluid" />
                                    </div>
                                </div><div className="m-1">
                                    <div className="partner-list">
                                        <img src={img2} className="img-fluid" />
                                    </div>
                                </div><div className="m-1">
                                    <div className="partner-list">
                                        <img src={img3} className="img-fluid" />
                                    </div>
                                </div><div className="m-1">
                                    <div className="partner-list">
                                        <img src={img4} className="img-fluid" />
                                    </div>
                                </div><div className="m-1">
                                    <div className="partner-list">
                                        <img src={img5} className="img-fluid" />
                                    </div>
                                </div>
                                <div className="m-1">
                                    <div className="partner-list">
                                        <img src={img6} className="img-fluid" />
                                    </div>
                                </div>
                        </Slider>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Partners

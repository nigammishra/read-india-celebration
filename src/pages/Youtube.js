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

const Youtube = () => {

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
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
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
                        <Slider {...settings1}>
                        <div className="col">
  <div className="">
    <div className>
      <iframe src="https://www.youtube.com/embed/Wmz2HSEFA1I" title="Read India Celebration 2020 | Episode 2 | WION News" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
      <div className="card-body">
        <h5 className="card-title" style={{textAlign: 'center'}}>Happy</h5>
      </div>
    </div>
  </div>
</div>
<div className="col">
  <div className="">
    <div className>
      <iframe src="https://www.youtube.com/embed/Wmz2HSEFA1I" title="Read India Celebration 2020 | Episode 2 | WION News" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
      <div className="card-body">
        <h5 className="card-title" style={{textAlign: 'center'}}>Happy</h5>
      </div>
    </div>
  </div>
</div><div className="m-1">
<div className="col">
  <div className="">
    <div className>
      <iframe src="https://www.youtube.com/embed/Wmz2HSEFA1I" title="Read India Celebration 2020 | Episode 2 | WION News" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
      <div className="card-body">
        <h5 className="card-title" style={{textAlign: 'center'}}>Happy</h5>
      </div>
    </div>
  </div>
</div>
                                </div><div className="col">
  <div className="">
    <div className>
      <iframe src="https://www.youtube.com/embed/Wmz2HSEFA1I" title="Read India Celebration 2020 | Episode 2 | WION News" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
      <div className="card-body">
        <h5 className="card-title" style={{textAlign: 'center'}}>Happy</h5>
      </div>
    </div>
  </div>
</div><div className="m-1">
<div className="col">
  <div className="">
    <div className>
      <iframe src="https://www.youtube.com/embed/Wmz2HSEFA1I" title="Read India Celebration 2020 | Episode 2 | WION News" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
      <div className="card-body">
        <h5 className="card-title" style={{textAlign: 'center'}}>Happy</h5>
      </div>
    </div>
  </div>
</div>
                                </div><div className="col">
  <div className="">
    <div className>
      <iframe src="https://www.youtube.com/embed/Wmz2HSEFA1I" title="Read India Celebration 2020 | Episode 2 | WION News" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
      <div className="card-body">
        <h5 className="card-title" style={{textAlign: 'center'}}>Happy</h5>
      </div>
    </div>
  </div>
</div>
<div className="col">
  <div className="">
    <div className>
      <iframe src="https://www.youtube.com/embed/Wmz2HSEFA1I" title="Read India Celebration 2020 | Episode 2 | WION News" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
      <div className="card-body">
        <h5 className="card-title" style={{textAlign: 'center'}}>Happy</h5>
      </div>
    </div>
  </div>
</div>
                        </Slider>
                    
                </div>

            </section>

        </>
    )
}

export default Youtube;

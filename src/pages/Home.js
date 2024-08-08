import React from 'react'
import { Carousel } from 'react-bootstrap';
import image from '../image/1688539054_journey.png';
import image1 from '../image/1688539146_reading-student.png';
import image2 from '../image/1688539112_ignorance.png';
import image3 from '../image/1688539130_intelligence.png';
import image4 from '../image/1688539086_vision.png';
import readgraphic from '../image/read-graphic-1.png';
import actremovebg from'../image/act-removebg-preview.png';
import thinkremovebg from '../image/think-removebg-preview.png';
import thinking from '../image/1688128782_thinking.png';
// import book from '../image/1687846976_book.png';
import happiness from '../image/1687859461_happiness.svg';
import learning from '../image/1687859504_learning.svg';
import wisdom from '../image/1687859531_wisdom.svg';
import knowledge from '../image/1688034139_knowledge.svg';
// import Header from '../component/Header';
// import ImageSlider from './Imageslider';
import ric2021 from '../image/1688791676_ric-2021.png';
import teacher from '../image/1688791676_teachers.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import playstore from '../image/play store.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../image/bgimage.png';
import Youtube from './Youtube';
import { Fade,zoom } from "react-awesome-reveal";
const Home = () => {



 



  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            },
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
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
    <div>
        <>
       <div className="container-fluid p-0">
  <div id="carouselExampleCaptions" className="carousel slide">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={3} aria-label="Slide 4" />
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={4} aria-label="Slide 5" />
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="flex-group">
          <div className="flex-item">
            <span className="slide-head wow fadeInUp banner-desc">
              <h2>Reading Ignites Imagination And Innovation...</h2>
              <p>Welcome to India's biggest reading festival!</p>
            </span>
            <a className="btn btn-rounded btn-md btn-success" href="https://readindia.info/initiatives/ric2023-international">
              <i className="fa fa-plus" aria-hidden="true" />
              &nbsp;Join RIC2023
            </a>
            <span>
              <a href="https://play.google.com/store/apps/details?id=com.readindiacelebration&hl=en_US">
                <img src={playstore} alt style={{height: 'auto', width: 135, marginLeft: '2%'}} />
              </a>
            </span>
          </div>
          <div className="flex-item bnrimage">
            <img src={image1} className="img-fluid wow zoomIn" alt="Join RIC2023" title="Join RIC2023" style={{height: 300}} />
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="flex-group">
          <div className="flex-item">
            <span className="slide-head wow fadeInUp banner-desc">
              <h2>Do intelligence and ignorance go together in the "I"?</h2>
              <p>10 minutes of reading (books, self, and situations) every day is your key to
                awareness...</p>
            </span>
            <a className="btn btn-rounded btn-md btn-success" href="https://readindia.info/initiatives/ric2023-international">
              <i className="fa fa-plus" aria-hidden="true" />
              &nbsp;Join RIC2023
            </a>
            <span>
              <a href="https://play.google.com/store/apps/details?id=com.readindiacelebration&hl=en_US">
                <img src={playstore} alt style={{height: 'auto', width: 135, marginLeft: '2%'}} />
              </a>
            </span>
          </div>
          <div className="flex-item bnrimage">
            <img src={image3} className="img-fluid wow zoomIn" alt="Join RIC2023" title="Join RIC2023" style={{height: 300}} />
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="flex-group">
          <div className="flex-item">
            <span className="slide-head wow fadeInUp banner-desc">
              <h2>Education that does not enable independent thinking and knowing is devoid of
                something fundamental</h2>
              <p>Reading diverse non-academic books is the seed for creativity, harmony, and success!
              </p>
            </span>
            <a className="btn btn-rounded btn-md btn-success" href="https://readindia.info/initiatives/ric2023-international">
              <i className="fa fa-plus" aria-hidden="true" />
              &nbsp;Join RIC2023
            </a>
            <span>
              <a href="https://play.google.com/store/apps/details?id=com.readindiacelebration&hl=en_US">
                <img src={playstore} alt style={{height: 'auto', width: 135, marginLeft: '2%'}} />
              </a>
            </span>
          </div>
          <div className="flex-item bnrimage">
            <img src={image2} className="img-fluid wow zoomIn" alt="Join RIC2023" title="Join RIC2023" style={{height: 300}} />
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="flex-group">
          <div className="flex-item">
            <span className="slide-head wow fadeInUp banner-desc">
              <h2>RIC Is Your Chance To Transform Sight Into Insight...</h2>
              <p>What are you waiting for? Come and be a part of the #ReadIndiaCelebration's Knowledge
                Movement!</p>
            </span>
            <a className="btn btn-rounded btn-md btn-success" href="https://readindia.info/initiatives/ric2023-international">
              <i className="fa fa-plus" aria-hidden="true" />
              &nbsp;Join RIC2023
            </a>
            <span>
              <a href="https://play.google.com/store/apps/details?id=com.readindiacelebration&hl=en_US">
                <img src={playstore} alt style={{height: 'auto', width: 135, marginLeft: '2%'}} />
              </a>
            </span>
          </div>
          <div className="flex-item bnrimage">
            <img src={image}className="img-fluid wow zoomIn" alt="Join RIC2023" title="Join RIC2023" style={{height: 300}} />
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="flex-group">
          <div className="flex-item">
            <span className="slide-head wow fadeInUp banner-desc">
              <h2>RIC Is Your Chance To Transform Sight Into Insight...</h2>
              <p>What are you waiting for? Come and be a part of the #ReadIndiaCelebration's Knowledge
                Movement!</p>
            </span>
            <a className="btn btn-rounded btn-md btn-success" href="https://readindia.info/initiatives/ric2023-international">
              <i className="fa fa-plus" aria-hidden="true" />
              &nbsp;Join RIC2023
            </a>
            <span>
              <a href="https://play.google.com/store/apps/details?id=com.readindiacelebration&hl=en_US">
                <img src={playstore} alt style={{height: 'auto', width: 135, marginLeft: '2%'}} />
              </a>
            </span>
          </div>
          <div className="flex-item bnrimage">
            <img src={image4} className="img-fluid wow zoomIn" alt="Join RIC2023" title="Join RIC2023" style={{height: 300}} />
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
      </button>
  </div>
</div>

        </>

        {/*after caroseol of home item  */}
        <>
        <section className="section-wrapper about-company">
  <div className="container">
    <div className="flex-close">
      <div className="flexItem" style={{justifyContent: 'center', alignItems: 'center'}}>
        <div className="green-bg btn-rounded text-uppercase wow fadeInUp">Read, Think, Act</div>
        <h1 className="head1 wow fadeInUp">RIC is a transformative readership and leadership experience</h1>
      </div>
      <div className="flexItem flexGroup p-0">
        <div className="cardgroup">
          <div className="cardBx">
            <div className="css-0">
              <img src={readgraphic} className="img-fluid wow fadeInUp fadeInDown top-down-animation " data-wow-delay="0.2" alt="asdsad" title="Read India" />
            </div>
            <h3>Read</h3>
            <p>3 R's - Read Books, Read Self, Read Situations</p>
          </div>
          <div className="cardBx">
            <div className="css-0">
              <img src={actremovebg} className="img-fluid wow fadeInLeft animated" data-wow-delay="0.4" alt="asrsdfd" title="Read India" />
            </div>
            <h3>Act</h3>
            <p>Implement 3 actions daily...</p>
          </div>
        </div>
        <div className="cardgroup">
          <div className="cardBx">
            <div className="css-0">
              <img src={thinkremovebg} className="img-fluid wow zoomIn zoom-hover" data-wow-delay="0.6" alt="safds" title="Read India" /></div>
            <h3>Think</h3>
            <p>3 Actions that will lead you to growth and joy</p>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="think-wrap pt-5 pb-4 text-center">
        <h1 className="head1 text-center text-uppercase spacing">IS YOUR THINKING</h1>
        <p>Borrowed (Smart_Idiot) or Independent (Intelligent)?</p>
        <img src={thinking} className="img-fluid" alt="test" title="Is Your Thinking" />
        <h3 className="head3 spacing secondary-color text-uppercase">WANT TO KNOW?</h3>
      </div>
    </div>
  </div>
</section>

        </>
        <>
        <div className='container'>
     <div className="row " >
      {/* <div className='col-md-3'>
        n xcmn n
      </div> */}
      {/* <div className='col-md-9'> */}
        
      

      <Slider {...settings1}>
  <div className="col h-100 pe-3"> 
    <div className="card h-100 ">
      <div className='carddesign '>
      <img  src={happiness} className="card-img-top  " alt="..." />
      <div className="card-body textdesign">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  </div>
  <div className="col h-100 pe-3">
    <div className="card h-100">
    <div className='carddesign '>
      <img src={wisdom}className="card-img-top" alt="..." />
      <div className="card-body textdesign">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      </div>
    </div>
  </div>
  <div className="col pe-3 h-100">
    <div className="card h-100">
    <div className='carddesign '>
      <img src={learning} className="card-img-top" alt="..." />
      <div className="card-body textdesign">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      </div>
    </div>
  </div>
  <div className="col pe-3 h-100">
    <div className="card h-100">
    <div className='carddesign '>
      <img src={knowledge} className="card-img-top" alt="..." />
      <div className="card-body textdesign">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
    </div>
  </div>
  <div className="col pe-3 h-100">
    <div className="card h-100">
    <div className='carddesign '>
      <img src={learning} className="card-img-top" alt="..." />
      <div className="card-body textdesign">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      </div>
    </div>
  </div>
  </Slider>
  {/* </div> */}
</div>

</div>
<h3 class="head3 spacing secondary-color text-center text-uppercase">CELEBRATING, THE ESSENCE OF LIFE</h3>
        </>
        <>
        <div>
  <section className="section-wrapper mt-5 secondary-shape" >
    <div className="section-grid">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-sm-12">
            <div className="set-graphic">
              <div className="css-1sj2t5c animated" style={{animationDelay: '0ms'}}>
                <img src={ric2021} className="img-fluid wow fadeInLeft" alt="RIC 2021 (International)" title="RIC 2021 (International)" /></div>
            </div>
          </div>
          <div className="col-lg-6 col-lg-6 col-sm-12">
            <div className="wrapper-content mt-5 down-to-top">
              <div className="css-0">
                <h3 className="head3 mb-4 wow fadeInUp ">#RIC-Connecting a Billion Readers!</h3>
              </div>
              <div className="css-0">
                <p className="mb-4 wow fadeInUp">It is not a competition but a celebration of "Knowledge and
                  Knowing (the essence of life!)".<br />
                  <br />
                  <strong><big>Want To Experience?</big></strong> Why all successful people in the
                  world are readers and independent thinkers? Come, join the knowledge revolution!
                </p>
              </div>
              <div className="css-0">
                <a href className="btn btn-rounded btn-success btn-lg wow fadeInUp">
                  <i className="fa fa-plus" aria-hidden="true" /> Read More</a></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-lg-6 col-sm-12">
            <div className="wrapper-content mt-5 down-to-top">
              <div className="css-1pvcaf" style={{animationDelay: '0ms'}}>
                <h3 className="head3 mb-4 wow fadeInUp">RIC Teachers</h3>
              </div>
              <div className="css-1pvcaf" style={{animationDelay: '0ms'}}>
                <p className="mb-4 wow fadeInUp">This is to encourage teachers to read non-academic books,
                  encourage debates on topics that matter to students, society, nation, and the world
                  at large.</p>
              </div>
              <div className="css-0 "><a href className="btn btn-rounded btn-success btn-lg wow fadeInUp"><i className="fa fa-play" aria-hidden="true" /> Read More</a></div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12">
            <div className="set-graphic right-to-zero">
              <div className="css-1bwerz7" style={{animationDelay: '0ms'}}>
                <img src={teacher}className="img-fluid wow fadeInRight" alt="RIC 2021 (International)" title="RIC 2021 (International)" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section-wrapper pt-0 joinus text-center">
    <div className="container initial-animated">
      <div className="css-0">
        <h3 className="head3 text-uppercase wow fadeInUp">READ INDIA CELEBRATION - IS A READING MOVEMENT..</h3>
      </div>
      <div className="css-0 ">
        <h4 className="text-uppercase head4 wow fadeInUp">INDIA HAS SEEN THE GREEN REVOLUTION, INDIA HAS SEEN THE
          WHITE REVOLUTION, AND NOW IS THE TIME FOR A KNOWLEDGE REVOLUTION. COME ON, INDIA! LET'S READ AND
          BECOME A PART OF THIS KNOWLEDGE REVOLUTION.</h4>
      </div>
      <div className="css-0">
        <a href="https://readindia.info/ric/ReadIndiaOnline/about-us" className="btn btn-lg btn-rounded btn-success wow fadeInUp">
          <i className="fa fa-plus" aria-hidden="true" />&nbsp; Know More</a></div>
    </div>
  </section>
  <section className="section-wrapper impact" style={{backgroundImage: `url(${img})`,backgroundRepeat:'no-repeat',backgroundSize: 'cover'}}>
    <div className="container">
      <div className="row">
        <div className="col-md-5 col-lg-5 col-sm-12">
          <div className="wrapper-content flex-center">
            <div className="head-wrap">
              <div className="css-0">
                <h1 className="head1 wow fadeInUp">The Change Makers</h1>
              </div>
              <div className="css-0">
                <p className="mb-4 wow fadeInUp">
                </p><p>Listen to the voices that make a difference…</p>
                <p />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-7 col-lg-7 col-sm-12">
          <div className="videos-group row">
            <div className="col-md-6">
              <div className="video-cover">
                <div className="picture"><iframe frameBorder={0} allowFullScreen className="w-100" style={{height: 200}} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Dr.  Pradeep Ramancharla, Chief Mentor - Read India Celebrations" src="https://www.youtube.com/embed/_OIM0CJmKJM?enablejsapi=1&origin=https%3A%2F%2Freadindia.info&widgetid=9" id="widget10" /></div>
              </div>
              <div className="video-list mt30">
                <div className="video-cover">
                  <div className><iframe frameBorder={0} allowFullScreen className="w-100" style={{height: 200}} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="RIC2020 WION TV Promo" src="https://www.youtube.com/embed/xG7oWhzI6gs?enablejsapi=1&origin=https%3A%2F%2Freadindia.info&widgetid=11" id="widget12" /></div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-5">
              <div className="video-cover">
                <div className><iframe frameBorder={0} allowFullScreen className="w-100" style={{height: 200}} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="#ReadIndiaCelebration2023 - Transformative book reading and leadership initiative for students!!" src="https://www.youtube.com/embed/X3zGr07Q4nQ?enablejsapi=1&origin=https%3A%2F%2Freadindia.info&widgetid=13" id="widget14" /></div>
              </div>
              <div className="video-list mt30">
                <div className="video-cover">
                  <div className><iframe frameBorder={0} allowFullScreen className="w-100" style={{height: 200}} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="READ INDIA CELEBRATION 2023 - Is your thinking BORROWED or INDEPENDENT?" src="https://www.youtube.com/embed/YWFo5Te5Lsw?enablejsapi=1&origin=https%3A%2F%2Freadindia.info&widgetid=15" id="widget16" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

        </>
        <>
        <section className="section-wrapper news-wrap pt-0">
  <h1 className="text-center head1">Latest News</h1>
  <div className="container">
    <Youtube/>
  </div>
</section>

       </>
    </div>
  )
}

export default Home
import React, { useState, useEffect, useRef } from "react";
// import ContactSVG from '../Components/assets/img/contact.svg';
import { Fade, Slide, Bounce, Zoom } from "react-awesome-reveal";
import BeatLoader from "react-spinners/BeatLoader";
import { useDispatch, useSelector} from 'react-redux';
import {  saveContact } from "../store/home";
import { useForm } from 'react-hook-form';
// import phone from "../Components/assets/img/phone-icon.png";
// import email from "../Components/assets/img/email-icon.png";
// import facebook from "../Components/assets/img/facebook-icon.png";
// import twitter from "../Components/assets/img/twitter-icon.png";
// import instagram from "../Components/assets/img/instagram-icon.png";


const Contact = () => {


      // loading
  const [loaderStatus, setLoaderStatus] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoaderStatus(false);
    }, 2000);
  }, []);


  const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getContact());
//   }, []);
  const st = useSelector(state => state.home);
  const contact = useSelector(state => state.home.Contact);

//   const banners = useSelector(state => state.home.contact_banner);
//   console.log('banners', banners);
//   const bannrpath = useSelector(state => state.home.bannrpath);




  //state variable for success msg
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Add a ref to the form element
  const formRef = useRef();

  // Handle form submission start
  const { register, handleSubmit, reset, formState: { errors } } = useForm();


  const onSubmit = (data) => {
    dispatch(saveContact(data));

    // Reset the form after successful submission
    reset();

    // Show the success message
    setShowSuccessMessage(true);

    // Reset the success message after 5 seconds (10000 milliseconds)
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 10000);

  };

  // Handle form submission end
  const success_msg = st?.contact_submit;
  console.log(success_msg)



  const contactMessage = () => {

    if (st?.contact_submit) {
      return <span className='register-msg-style'>{st?.contact_submit}</span>
    }
  }

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {st.loaderStatus ? (
        <div className="loader-container">
          <BeatLoader loading={st.loaderStatus} size={50} color="#36d7b7" />
        </div>
      ) : (
        <div>

          {/* <!-- carousel --> */}
          <div className="slide-wrap inner">
            <div className="container">
            
                <div className="flex-grid" >
                  <Slide direction="up">
                    <div
                      className="page-heading wow fadeInUp  text-color-p"
                     
                    ></div>
                  </Slide>
                  <Zoom>
                    <div className="page-img wow fadeInUp">
                      <img
                      
                        className="img-fluid"
                        alt={"about us"}
                        title="about us" />
                    </div>
                  </Zoom>
                </div>
              
            </div>
          </div>
          {/* <!-- end --> */}
          {/* <!-- corporate --> */}
          <div className="section-wrapper">
            <div className="container">
              <div className="row mt-5 justify-content-center">
                {/* <div className="col-md-6 address" dangerouslySetInnerHTML={{ __html: contact }}> */}
                <div className="col-md-6 address" >
                  <h3 className="head3">We would love to hear from you!</h3>
                  <p className="pb-3">Please write or call us with your questions or comments.</p>
                  <h5 className="mb-0">Contact</h5>
                  <div className="contact-row">
                    <div className="contact-list">
                      <div className="icon">
                        {/* <img src={phone} style={{ 'height': '38px' }}></img> */}
                      </div>
                      <a href="tel:+91 9441456061">+91 9441456061</a>
                    </div>
                    <div className="contact-list">
                      <div className="icon">
                        {/* <img src={email} style={{ 'height': '22px', 'width': '28px' }}></img> */}
                      </div>
                      <a href="mailto:info@readindia.info">info@readindia.info</a>
                    </div>
                  </div>
                  <div className="social-group mt-4" >
                    <h5>Keep In Touch</h5>
                    <ul className="list-unstyled socials" >
                      <li><a href="https://www.facebook.com/ReadIndiaTeam" target="_blank" className="facebook">
                        {/* <img src={facebook} style={{ 'height': '36px' }} /> */}
                      </a></li>
                      <li><a href="https://twitter.com/readindiateam" target="_blank" >
                        {/* <img src={twitter} style={{ 'height': '44px' }} /> */}
                      </a></li>
                      <li><a href="https://www.instagram.com/readindiacelebration/" target="_blank">
                        {/* <img src={instagram} style={{ 'height': '33px' }} /> */}
                      </a></li>
                    </ul>
                  </div>
                </div>
                {/* <!-- form --> */}

                <div className="col-md-6 col-lg-6 col-sm-12">
                  <div className="contact_form">
                    {showSuccessMessage && (
                      <span class="register-msg-style" style={{ 'color': '#306013', 'fontSize': '20px', 'fontWeight': '500' }}>
                        {contactMessage()}
                      </span>
                    )}
                    <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="row pt-4">
                      <div className="form-group col-md-6">
                        <label>Your Name <span className="red-text">*</span></label>
                        <input
                          type="text"
                          name="fullName"
                          className="form-control"
                          placeholder="Enter Full Name"
                          {...register('fullName', { required: true })}
                        />
                        {errors.fullName && <span className="error text-danger" style={{ 'fontSize': '13px' }}>Please enter your full name</span>}
                      </div>
                      <div className="form-group col-md-6">
                        <label>Email <span className="red-text ">*</span></label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Enter your email"
                          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                        />
                        {errors.email && <span className="error text-danger" style={{ 'fontSize': '13px' }}>Please enter a valid email address</span>}
                      </div>
                      <div className="form-group col-md-6">
                        <label>Phone <span className="red-text">*</span></label>
                        <input
                          type="tel"
                          name="phone"
                          className="form-control"
                          placeholder="Phone number"
                          {...register('phone', { required: true, pattern: /^[0-9]{10}$/i })}
                        />
                        {errors.phone && <span className="error text-danger" style={{ 'fontSize': '13px' }}>Please enter a 10-digit phone number</span>}
                      </div>
                      <div className="form-group col-md-6">
                        <label>Subject <span className="red-text">*</span></label>
                        <input
                          type="text"
                          name="subject"
                          className="form-control"
                          placeholder="Subject"
                          {...register('subject', { required: true })}
                        />
                        {errors.subject && <span className="error text-danger" style={{ 'fontSize': '13px' }}>Please enter the subject</span>}
                      </div>
                      <div className="form-group col-md-12">
                        <label>Write Query <span className="red-text">*</span></label>
                        <textarea
                          rows="3"
                          cols="3"
                          className="form-control"
                          placeholder="Write your query.."
                          {...register('query', { required: true })}
                        ></textarea>
                        {errors.query && <span className="error text-danger" style={{ 'fontSize': '13px' }}>Please write your query</span>}
                      </div>
                      <div className="form-group mt-2">
                        <button type="submit" onClick={handleScrollToTop} className="btn btn-success btn-rounded btn-lg">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Contact
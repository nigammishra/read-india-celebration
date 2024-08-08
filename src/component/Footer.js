import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import facebook from '../image/facebook-icon.2432b527336e1068a840.png';
import twitter from '../image/twitter-icon.041e12d8d248e49b821d.png';
import instagram from '../image/instagram-icon.21b5c4a5a452f4716a4b.png'

const Footer = () => {
  return (
    <div>
       <footer className="footer">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-3 col-lg-3 col-sm-12">
        <div className="footer-item">
          <h3>About Us</h3>
          <ul className="list-unstyled service-item">
            <li><a href="https://readindia.info/">Home</a></li>
            <li><a href="https://readindia.info/about-us">About</a></li>
            <li><a href="https://readindia.info/initiatives">Initiatives</a></li>
            <li><a href="https://readindia.info/gallery">Gallery</a></li>
            <li><a href="https://readindia.info/team">Team</a></li>
            <li><a href="https://readindia.info/contact-us">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="col-md-3 col-lg-3 col-sm-12">
        <div className="footer-item">
          <h3>Quick Links</h3>
          <ul className="list-unstyled service-item">
            <li><a href="https://readindia.info/about-us" target="_blank">Who we are</a></li>
            <li><a href="https://www.leadingself.net/" target="_blank">www.leadingself.net</a></li>
          </ul>
        </div>
      </div>
      <div className="col-md-5 col-lg-5 col-sm-12">
        <div className="footer-item">
          <h3>Subscribe to our Newsletter</h3>
          <div className="content">Subscribe To Newsletter To Stay Up To Date On Our Latest News</div>
          <div className="subscribe mt-3">
            <form>
              <div className="form-group"><input type="email" name="email" className="form-control" placeholder="Enter your email" /><button type="submit" className="btn btn-warning mx-2 footerbtn">Subscribe</button></div>
            </form>
          </div>
          <ul className="list-unstyled socials">
            <li>
              <a href="https://www.facebook.com/ReadIndiaTeam" target="_blank" className="facebook">
                <img src={facebook} style={{height: 36}} /></a>
            </li>
            <li>
              <a href="https://twitter.com/readindiateam" target="_blank">
                <img src={twitter} style={{height: 44}} />
                </a>
            </li>
            <li>
              <a href="https://www.instagram.com/readindiacelebration/" target="_blank">
                <img src={instagram}style={{height: 33}} />
                </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="company-right text-center">© 2024. All Rights Reserved. | <a href="/disclaimer">Disclaimer</a>
    </div>
  </div>
  <div className="back-to-top d-flex align-items-center justify-content-center active"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 448 512" className="scroll-to-top-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
      <path d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z">
      </path>
    </svg></div>
</footer>

    </div>
  )
}

export default Footer
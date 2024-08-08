import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import image5 from '../image/logo.png'
const Header = () => {
  return (
    <div>
      <>
      <div className="icon-bar">
  <a href="https://www.facebook.com/ReadIndiaTeam" target="_blank" className="facebook">
    <i className="fa fa-facebook-official" aria-hidden="true" />
  </a>
  <a href="https://twitter.com/readindiateam" target="_blank" className="twitter">
    <i className="fa fa-twitter-square" aria-hidden="true" />
  </a>
  <a href="https://www.instagram.com/readindiacelebration/" target="_blank" className="instagram">
    <i className="fa fa-instagram" aria-hidden="true" /></a>
  <a href="https://www.youtube.com/channel/UCYOHD0v6J_7rkRpvFS69hrA/videos" target="_blank" className="youtube">
    <i className="fa fa-youtube-play" aria-hidden="true" /></a>
</div>

      </>
        
        <>
        <div className="container-fluid">
  <header id="headerMain" style={{background: 'transparent', top: 40, zIndex: 999, transition: 'background-color 0.3s ease 0s', position: 'fixed'}}>
    <nav className="navbar navbar-expand-lg fixed-top navbar-light  fadeIn p-0" style={{background: 'transparent', top: 0, zIndex: 999, transition: 'background-color 0.3s ease 0s', position: 'fixed'}}>
      <div className="container-fluid" style={{background: 'linear-gradient(to right, #020e1a, #185490)'}}>
        <a className="navbar-brand" href="/">
          <img alt="ric" title="Read India Celebration" data-src="img/logo.png" className="img-fluid lazyloaded" src={image5} style={{marginLeft: 100, height: 90}} />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarScroll" aria-controls="navbarScroll" aria-expanded="true" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse " id="navbarScroll">
          <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll" style={{columnGap: 25}}>
            <li className="nav-item dropdown">
              <a className="nav-link"  href="index.html" style={{color:'#fff'}}>Home</a>
              </li>
            <li className="nav-item dropdown">
               <a className="nav-link" href="/About"style={{color:'#fff'}}>About</a>
               </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="Initiative"style={{color:'#fff'}}>Initiatives</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="/Gallery"style={{color:'#fff'}}>Gallery</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="team.html"style={{color:'#fff'}}>Team</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="/contact"style={{color:'#fff'}}>Contact</a>
            </li>
            <li id="menu-item-3438" className="btn-high menu-item menu-item-type-custom menu-item-object-custom menu-item-3438 nav-item design" style={{backgroundColor: 'rgb(240, 127, 45)', borderRadius: 4, boxShadow: 'rgb(64, 5, 5) 0px 2px 6px 1px'}}>
              <a href="login page.html" target="_blank" className="nav-link effect">Login /
                Signup</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</div>

        </>
        
    </div>
  )
}

export default Header;
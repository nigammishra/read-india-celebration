import React from 'react'
import LightGallery from "lightgallery/react/Lightgallery.es5";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";
 
// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgVideo from "lightgallery/plugins/video";
import lgShare from "lightgallery/plugins/share";
import lgRotate from "lightgallery/plugins/rotate";
import DrSomnath2 from '../image/Dr Somnath2.jpeg';
import DrSomnath1 from '../image/Dr. Somnath1.jpeg'
import ric1 from '../image/RIC2022_GOA_Launch_Hon_CM_Dr_Pramod_Sawant_Ji.jpg'
import ric2 from '../image/Kaavya_Kakkad_Winner_Class_3-5_Category.jpeg'
import ric3 from '../image/thumbs_RIC2022-Goa-Launch-Dr.-Pramod-Sawant-Ji-Raghu.jpeg'
import ric4 from '../image/RIC2022_GOA_Launch1.jpg'
import ric5 from '../image/RIC2022_GOA_Launch_Gnanpith_Awardee_Shri_Damodar_Mauzo.jpg'
import ric6 from '../image/RIC2022_GOA_Launch4.jpg';
import ric7 from '../image/Shri.-Deepak-Kesarkar-Hon-Education-Minister-Maharashtra1-RIC2022.jpeg'
import ric8 from '../image/RIC2022_Mitali_Ragtah_Runner_Up_Class3-5_Category.jpeg'
import ric9 from '../image/RIC2022_Miraya_Chitkara_Runner_Up_Class3-5_Category.jpg'
import ric10 from '../image/RIC2022_Arkeis_MCB_Winner_Undergrad-Grad_Category.jpeg'
import ric11 from '../image/RIC2022_Mrunal_Rajput_Runner_Up_Undergrad-Grad_Category.jpeg'
import ric12 from '../image/RIC2022_Sharmat_Goltekar_Winner_Class10-12_Category.jpeg'
import ric13 from '../image/RIC2022_Aditya_Kirkire_Runner_Up_Class_6-9_Category (1).jpeg'



const Gallery = () => {





   

  return (
    <div>
      <>
      <div className="slide-wrap inner">
  <div className="container">
    <div className="flex-grid">
      <div className="css-1pvcaf" style={{animationDelay: '0ms'}}>
        <div className="page-heading wow fadeInUp">
          <h3>Gallery</h3>
          <div className="content">
            <p>Glimpses of the RIC journey…</p>
          </div>
        </div>
      </div>
      <div className="css-1vscx9z">
        <div className="page-img wow fadeInUp"><img src="img/1688543226_gallery.png" className="img-fluid" alt="gallery banner" title="GallerySVG" /></div>
      </div>
    </div>
  </div>
</div>

      </>
      <>
      <div className="section-wrapper">
          <div className="container">
            <h1 className="head1 text-center">Ric Gallery</h1>
            <div className="gallery-container" id="gallery-container">
              <LightGallery
                speed={200}
                plugins={[ lgThumbnail, lgZoom, lgShare, lgRotate, lgVideo, lgAutoplay, ]} >
                
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={DrSomnath2}
                      data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={DrSomnath2}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={DrSomnath1}
                      data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={DrSomnath1}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={ric1}
                      data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={ric1}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={ric2}
                      data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={ric2}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={ric3}
                      data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={ric3}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={ric4}
                      data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={ric4}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={ric5}
                      data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={ric5}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={ric6}
                      data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={ric6}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={ric7}
                      data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={ric7}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={ric8}
                      data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={ric8}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={ric9}
                      data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={ric9}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={ric10}
                      data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={ric10}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={ric11}
                      data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={ric11}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={ric12}
                      data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={ric12}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={ric13}
                      data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={ric13}
                        alt=""
                      />
                    </a>

              </LightGallery>
            </div>
          </div>
         </div>
      </>
       
    </div>
  )
}

export default Gallery
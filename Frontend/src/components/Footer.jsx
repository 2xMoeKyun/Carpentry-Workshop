import React from "react";

function Footer() {
  return (
    <section className="footer-section">
      <div className="container">
        <div className="footer-logo text-center">
          <a href="/">
            <img src="./img/MainLogo.png" alt="" />
          </a>
        </div>
        <div className="row ">
          <div className="col-lg-3 col-sm-6 footer_row">
            <div className="footer-widget about-widget">
              <h2>About</h2>
              <p>
                Donec vitae purus nunc. Morbi faucibus erat sit amet congue
                mattis. Nullam frin-gilla faucibus urna, id dapibus erat iaculis
                ut. Integer ac sem.
              </p>
              <img src="img/cards.png" alt="" />
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 footer_row">
            <div className="footer-widget about-widget">
              <h2>Info</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores vero 
                dolorum accusantium libero dignissimos sapiente quibusdam rem rerum quis provident. 
                Eum excepturi ducimus ipsam dignissimos. Voluptatibus minus quisquam placeat aliquam.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="footer-widget contact-widget">
              <h2>Questions</h2>
              <div className="con-info">
                <span>C.</span>
                <p>Your Company Ltd </p>
              </div>
              <div className="con-info">
                <span>B.</span>
                <p>1481 Creekside Lane Avila Beach, CA 93424, P.O. BOX 68 </p>
              </div>
              <div className="con-info">
                <span>T.</span>
                <p>+53 345 7953 32453</p>
              </div>
              <div className="con-info">
                <span>E.</span>
                <p>office@youremail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="social-links-warp">
        <div className="container">
          <div className="social-links">
            <a href="" className="instagram">
              <i className="fa fa-instagram"></i>
              <span>instagram</span>
            </a>
            <a href="" className="google-plus">
              <i className="fa fa-google-plus"></i>
              <span>g+plus</span>
            </a>
            <a href="" className="pinterest">
              <i className="fa fa-pinterest"></i>
              <span>pinterest</span>
            </a>
            <a href="" className="facebook">
              <i className="fa fa-facebook"></i>
              <span>facebook</span>
            </a>
            <a href="" className="twitter">
              <i className="fa fa-twitter"></i>
              <span>twitter</span>
            </a>
            <a href="" className="youtube">
              <i className="fa fa-youtube"></i>
              <span>youtube</span>
            </a>
            <a href="" className="tumblr">
              <i className="fa fa-tumblr-square"></i>
              <span>tumblr</span>
            </a>
          </div>

          
        </div>
      </div>
    </section>
  );
}

export default Footer;

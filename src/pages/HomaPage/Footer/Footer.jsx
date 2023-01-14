import React from "react";
import "./Footer.scss";
import logo from "../../../assets/logo.png";
import facebook_icon from "../../../assets/facebook-social-media-svgrepo-com.svg";
import snapchat_icon from "../../../assets/snapchat-social-media-svgrepo-com.svg";
import twitter_icon from "../../../assets/twitter-social-media-svgrepo-com.svg";
import instagram_icon from "../../../assets/icons8-instagram.svg";

const Footer = () => {
  return (
    <div>
      {" "}
      <section id="TitleSecOne" className="container form_Section">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-6">
              <form action="">
                <input
                  type="email"
                  maxLength="50"
                  required
                  placeholder="Enter your email address"
                />
                <button className="bt">Subscribe</button>
              </form>{" "}
            </div>
            <div className="col-md-6">
              <div className="card-body TitleSecOne_prag">
                <h5 className="card-title">انضم الينا</h5>
                <p className="card-text">
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                  توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا
                  النص أو العديد من النصوص الأخرى إضافة
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4 footer-column">
              <div id="social_media">
                <a href="#">
                  <img src={facebook_icon} />
                </a>
                <a href="#">
                  <img src={snapchat_icon} />
                </a>
                <a href="#">
                  <img src={twitter_icon} />
                </a>
                <a href="#">
                  <img src={instagram_icon} />
                </a>
              </div>
            </div>
            <div className="col-md-4 footer-column align-items-center">
              <ul className="list-inline quick-links">
                <li className="list-inline-item">
                  <a href="#"> سياسة الخصوصية</a>
                </li>
                <li className="list-inline-item">
                  <a href="#"> سياسة الاستخدام</a>
                </li>
                <li className="list-inline-item">
                  <a href="#"> تواصل معنا</a>
                </li>
              </ul>{" "}
              <span className="copyright quick-links">
                © 2022, جميع الحقوق محفوظة.
              </span>
            </div>
            <div className="col-md-4 footer-column">
              <h1 className="navbar-logo">
                <span>
                  <h5>الشعار</h5>
                  <h6>السولقن</h6>
                </span>
                <img className="fab fa-react" src={logo} />
              </h1>
            </div>
          </div>
        </div>
      </footer>{" "}
    </div>
  );
};

export default Footer;

import React from "react";
import "./Footer.scss";
import logo from "../../../assets/logo.png";
import facebook_icon from "../../../assets/face3.svg";
import snapchat_icon from "../../../assets/snap3.svg";
import twitter_icon from "../../../assets/twiter3.svg";
import instagram_icon from "../../../assets/insta3.svg";

const Footer = () => {
  return (
    <div>
      {" "}
      <section id="TitleSecOne" className="container form_Section ">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-6">
              <form action="">
                <input
                  type="email"
                  maxLength="50"
                  required
                  placeholder="البريد الالكترونى"
                />
                <button className="bt">اشتراك</button>
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
        <div className="container Footer_sec">
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
              <h1 className="Footer-logo">
                <span className="title_logo">
                  <h5>الشعار</h5>
                  <h6>السولقن</h6>
                </span>
                <span className="logo_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="76"
                    height="76"
                    viewBox="0 0 76 76"
                  >
                    <g
                      id="Group_16439"
                      data-name="Group 16439"
                      transform="translate(-1664 -48)"
                    >
                      <g
                        id="Ellipse_1"
                        data-name="Ellipse 1"
                        transform="translate(1664 48)"
                        fill="#fff"
                        stroke="#059e4b"
                        strokeWidth="1"
                      >
                        <circle cx="38" cy="38" r="38" stroke="none" />
                        <circle cx="38" cy="38" r="37.5" fill="none" />
                      </g>
                      <g
                        id="Rectangle_2463"
                        data-name="Rectangle 2463"
                        transform="translate(1701.646 50.498) rotate(45)"
                        fill="#fff"
                        stroke="#049d4a"
                        strokeWidth="1"
                      >
                        <rect width="50" height="49" stroke="none" />
                        <rect
                          x="0.5"
                          y="0.5"
                          width="49"
                          height="48"
                          fill="none"
                        />
                      </g>
                    </g>
                  </svg>
                </span>{" "}
              </h1>
            </div>
          </div>
        </div>
      </footer>{" "}
    </div>
  );
};

export default Footer;

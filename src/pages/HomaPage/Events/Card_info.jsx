import React from "react";
import image from "../../../assets/imagesec1.png";

const Card_info = () => {
  return (
    <div>
      {" "}
      <section id="TitleSecOne" className="container">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body TitleSecOne_prag">
                <h5 className="card-title">العنوان </h5>
                <p className="card-text">
                  الشيخ محمد بن إبراهيم،، الدرعية الجديدة، الدرعية 13734
                </p>
                <p className="card-text">https://saudi-eventshow.com/</p>
                <div className="socialmedia_info ">
                  <h6>
                    حساب الفيس بوك<i className="fab fa-facebook-f"></i>
                  </h6>{" "}
                  <h6>
                    حساب الانستا<i className="fab fa-instagram"></i>
                  </h6>
                </div>
              </div>
            </div>{" "}
            <div className="col-md-4">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    width="600"
                    height="500"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                  ></iframe>
                  <a href="https://123movies-to.org"></a>
                  <br />
                  <a href="https://www.embedgooglemap.net"></a>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card_info;

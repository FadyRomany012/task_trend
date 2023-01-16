import React from "react";
import insta from "../../../assets/insta4.svg";
import face from "../../../assets/face4.svg";
import www from "../../../assets/www1.svg";

const Card_info = () => {
  return (
    <div>
      {" "}
      <section id="TitleSecOne" className="container">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-6">
              <div className="card-body TitleSecOne_prag">
                <h5 className="card-title">العنوان </h5>
                <p className="card-text">
                  الشيخ محمد بن إبراهيم،، الدرعية الجديدة، الدرعية 13734
                </p>
                <div className="wwwibe">
                  {" "}
                  <p className="card-text">https://saudi-eventshow.com/</p>
                  <img src={www} />
                </div>
                <div className="socialmedia_info ">
                  <span>
                    {" "}
                    <p> حساب الفيس بوك</p> <img src={face} />
                  </span>
                  <span>
                    {" "}
                    <p> حساب الانستا</p>
                    <img src={insta} />{" "}
                  </span>
                </div>
              </div>
            </div>{" "}
            <div className="col-md-6">
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

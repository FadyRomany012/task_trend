import React from "react";
import data from "../../../data";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import like_icon from "../../../assets/like-svgrepo-com.svg";
import message_icon from "../../../assets/message-svgrepo-com.svg";
import view_icon from "../../../assets/view-svgrepo-com.svg";
import facebook_icon from "../../../assets/facebook-social-media-svgrepo-com.svg";
import snapchat_icon from "../../../assets/snapchat-social-media-svgrepo-com.svg";
import twitter_icon from "../../../assets/twitter-social-media-svgrepo-com.svg";
import instagram_icon from "../../../assets/icons8-instagram.svg";
import google_play_icon from "../../../assets/google-play-badge-logo-svgrepo-com.svg";
import app_store_icon from "../../../assets/download-on-the-app-store-apple-logo-svgrepo-com.svg";

const SideBarEvent = () => {
  return (
    <div>
      {" "}
      <h2>الاخبار</h2>
      {data.Events.map((item, index) => {
        return (
          <div className="col-xs-12s col-sm-12 col-md-12 col-lg-12" key={index}>
            <Link to={`/Card_data/` + item.id}>
              <div className="">
                <div className="card mb-3">
                  <div className="row g-0 row_rev">
                    <div className="col-md-12 img_pos">
                      <img
                        src={item.imagSrc}
                        className="img-fluid rounded "
                        alt="..."
                      />
                      <div className="date_side_event">
                        <p>اخبار عاجلة</p>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="card-body TitleSecOne_prag">
                        <p className="card-text">{item.awards}</p>
                      </div>
                      <hr />
                      <div className="Links">
                        <div className="location">
                          4322
                          <span
                            className="glyphicon glyphicon-star"
                            aria-hidden="true"
                          >
                            <img className="card_icon" src={like_icon} />
                          </span>
                        </div>
                        <div className="timeZone">
                          21
                          <span
                            className="glyphicon glyphicon-star"
                            aria-hidden="true"
                          >
                            <img className="card_icon" src={message_icon} />
                          </span>
                        </div>
                        <div className="viewicone">
                          234
                          <span
                            className="glyphicon glyphicon-star"
                            aria-hidden="true"
                          >
                            <img className="card_icon" src={view_icon} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
      <h2>ابق علي اطلاق</h2>
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
      <h2>حمل التطبيق</h2>{" "}
      <p className="text-right">
        تطبيق شامل يقدم لك آخر الأحداث في السعودية عبر تغطية مستمرة
      </p>{" "}
      <div id="download_apps">
        <a href="#">
          <img src={app_store_icon} />
        </a>
        <a href="#">
          <img src={google_play_icon} />
        </a>
      </div>
    </div>
  );
};

export default SideBarEvent;

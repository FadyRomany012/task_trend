import React from "react";
import data from "../../../data";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import like_icon from "../../../assets/like1.svg";
import message_icon from "../../../assets/massage1.svg";
import view_icon from "../../../assets/view1.svg";
import facebook_icon from "../../../assets/face1.svg";
import snapchat_icon from "../../../assets/snap.svg";
import twitter_icon from "../../../assets/twiter.svg";
import instagram_icon from "../../../assets/insta1.svg";
import google_play_icon from "../../../assets/googleplay2.svg";
import app_store_icon from "../../../assets/appstore2.svg";

const SideBarEvent = () => {
  return (
    <div id="SideBarEvent">
      <p className="fw-bold text-right">اخر الاخبار</p>
      {data.Events.map((item, index) => {
        return (
          <div className="col-xs-12s col-sm-12 col-md-12 col-lg-12" key={index}>
            <Link to={`/Card_data/` + item.id}>
              <div className="">
                <div className="card mb-3">
                  <div className="row g-0 ">
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
                        <div className="icons_sidebar">
                          <p> 4322</p>
                          <span
                            className="glyphicon glyphicon-star"
                            aria-hidden="true"
                          >
                            <img className="card_icon" src={like_icon} />
                          </span>
                        </div>
                        <div className="icons_sidebar">
                          <p> 21</p>
                          <span
                            className="glyphicon glyphicon-star"
                            aria-hidden="true"
                          >
                            <img className="card_icon" src={message_icon} />
                          </span>
                        </div>
                        <div className="icons_sidebar">
                          <p> 234</p>
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
      <h5 className="fw-bold text-right">ابق علي اطلاق</h5>
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
      <h5 className="fw-bold text-right">حمل التطبيق</h5>
      <p className="text-right">
        تطبيق شامل يقدم لك آخر الأحداث في السعودية عبر تغطية مستمرة
      </p>
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

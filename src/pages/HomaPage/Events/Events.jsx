import React, { useState } from "react";
import data from "../../../data";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TitleSecOne from "../TitleSecOne";
import location_icon from "../../../assets/location-sign-svgrepo-com.svg";
import timezone_icon from "../../../assets/clock-svgrepo-com.svg";
import share_icon from "../../../assets/share-button-svgrepo-com.svg";
import SideBarEvent from "./SideBarEvent";
const Events = () => {
  return (
    <div>
      <TitleSecOne></TitleSecOne>

      <div id="cards_landscape_wrap-2">
        <div className="container">
          <div className="row align-self-start">
            <div className="col-xs-12s col-sm-12 col-md-4 col-lg-4">
              <SideBarEvent></SideBarEvent>
            </div>
            <div className="col-xs-12s col-sm-12 col-md-8 col-lg-8">
              <h2>الفعاليات</h2>
              {data.Events.map((item, index) => {
                return (
                  <div className="col-xs-12s col-sm-12 col-md-12 col-lg-12">
                    <Link to={`/Card_data/` + item.id}>
                      <div className="" key={index}>
                        <div className="card mb-3">
                          <div className="row g-0 row_rev">
                            <div className="col-md-8">
                              <div className="card-body TitleSecOne_prag">
                                <h6 className="card-title">{item.title}</h6>
                                <p className="card-text">{item.desc}</p>
                              </div>
                              <hr />
                              <div className="Links">
                                <div className="location">
                                  {item.address}
                                  <span
                                    className="glyphicon glyphicon-star"
                                    aria-hidden="true"
                                  >
                                    <img
                                      className="card_icon"
                                      src={location_icon}
                                    />
                                  </span>
                                </div>
                                <div className="timeZone">
                                  12:00ص
                                  <span
                                    className="glyphicon glyphicon-star"
                                    aria-hidden="true"
                                  >
                                    <img
                                      className="card_icon"
                                      src={timezone_icon}
                                    />
                                  </span>
                                </div>
                                <div className="shareicone">
                                  <span
                                    className="glyphicon glyphicon-star"
                                    aria-hidden="true"
                                  >
                                    <img
                                      className="card_icon"
                                      src={share_icon}
                                    />
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 img_pos">
                              <img
                                src={item.imagSrc}
                                className="img-fluid rounded "
                                alt="..."
                              />
                              <div className="date_event">
                                <p>ديسمبر</p>
                                <h5>22</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default Events;

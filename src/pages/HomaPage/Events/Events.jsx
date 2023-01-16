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
          <div className="row align-self-start row_rev">
            <div className="col-xs-12s col-sm-12 col-md-4 col-lg-4">
              <SideBarEvent></SideBarEvent>
            </div>
            <div className="col-xs-12s col-sm-12 col-md-8 col-lg-8">
              <h2 className="fw-bold">الفاعليات</h2>
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
                                  <p> {item.address}</p>
                                  <span
                                    className="glyphicon glyphicon-star"
                                    aria-hidden="true"
                                  >
                                    <svg
                                      className="card_icon"
                                      id="Group_16265"
                                      data-name="Group 16265"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="21.072"
                                      height="26.903"
                                      viewBox="0 0 21.072 26.903"
                                    >
                                      <path
                                        id="Path_5528"
                                        data-name="Path 5528"
                                        d="M958.5,381.878c0-4.967,2.476-8.8,6.436-10.423a10.462,10.462,0,0,1,14.438,7.849,10.866,10.866,0,0,1-2.392,9.15c-2.322,2.84-4.659,5.666-6.981,8.506a1.084,1.084,0,0,1-1.917,0c-2.322-2.84-4.659-5.666-7-8.506A10.788,10.788,0,0,1,958.5,381.878Zm6.394-.909a4.134,4.134,0,1,0,4.169-4.113A4.153,4.153,0,0,0,964.894,380.969Z"
                                        transform="translate(-958.5 -370.634)"
                                        fill="#777e90"
                                      />
                                    </svg>
                                  </span>
                                </div>
                                <div className="timeZone">
                                  <p> 12:00ص</p>
                                  <span
                                    className="glyphicon glyphicon-star"
                                    aria-hidden="true"
                                  >
                                    <svg
                                      className="card_icon"
                                      id="Group_16266"
                                      data-name="Group 16266"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="26.903"
                                      height="26.902"
                                      viewBox="0 0 26.903 26.902"
                                    >
                                      <path
                                        id="Path_5531"
                                        data-name="Path 5531"
                                        d="M761.741,417.2a13.451,13.451,0,1,1,13.46-13.51A13.485,13.485,0,0,1,761.741,417.2Zm-1.217-17.146h0v3.6a1.209,1.209,0,0,0,.338.913c1.234,1.251,2.486,2.486,3.72,3.72a1.1,1.1,0,0,0,1.167.271,1.214,1.214,0,0,0,.49-2.063c-1.015-1.031-2.046-2.063-3.077-3.077a.633.633,0,0,1-.22-.49c.017-2.131,0-4.261,0-6.392a1.548,1.548,0,0,0-.135-.727,1.219,1.219,0,0,0-2.3.524C760.524,397.6,760.524,398.822,760.524,400.057Z"
                                        transform="translate(-748.298 -390.3)"
                                        fill="#777e90"
                                      />
                                    </svg>
                                  </span>
                                </div>
                                <div className="shareicone">
                                  <span
                                    className="glyphicon glyphicon-star"
                                    aria-hidden="true"
                                  >
                                    <svg
                                      className="card_icon"
                                      id="Group_626"
                                      data-name="Group 626"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="23.662"
                                      height="25.766"
                                      viewBox="0 0 23.662 25.766"
                                    >
                                      <path
                                        id="Path_1980"
                                        data-name="Path 1980"
                                        d="M101.3,771.834c-.059-.095-.164-.069-.246-.086a4.29,4.29,0,0,1-3.365-5.045.221.221,0,0,0-.138-.287q-3.759-2.134-7.513-4.275a.262.262,0,0,0-.366.037,4.293,4.293,0,0,1-7.114-3.519,4.3,4.3,0,0,1,7.1-2.947.283.283,0,0,0,.386.047q3.729-2.135,7.468-4.252c.144-.082.209-.139.173-.339a4.3,4.3,0,1,1,5.042,3.407,4.217,4.217,0,0,1-3.838-1.161.22.22,0,0,0-.316-.046q-3.721,2.125-7.447,4.238c-.117.067-.16.12-.12.267a4.076,4.076,0,0,1,0,2.16c-.041.152.012.2.124.266q3.715,2.11,7.424,4.228c.158.091.236.057.356-.057a4.29,4.29,0,1,1,3.573,7.318c-.035,0-.065.008-.074.048C102.035,771.834,101.665,771.834,101.3,771.834Z"
                                        transform="translate(-82.538 -746.071)"
                                        fill="#059e4b"
                                      />
                                    </svg>
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
                                <h4 className="fw-bold">22</h4>
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

import React from "react";
import { useParams } from "react-router-dom";
import data from "../../../data";
import SideBarEvent from "./SideBarEvent";
import location_icon from "../../../assets/location-sign-svgrepo-com.svg";
import timezone_icon from "../../../assets/clock-svgrepo-com.svg";
import share_icon from "../../../assets/share-button-svgrepo-com.svg";
import Card_info from "./Card_info";
const Card_data = () => {
  const params = useParams();
  const selectedEvent = data.Events.find((value) => value.id === params.id);

  // console.log("selectedEvent", typeof params.id);
  return (
    <div>
      <div id="cards_landscape_wrap-2" className="card_details">
        <div className="container">
          <section id="TitleSecOne" className="container">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-4">
                  <h3 className="navbreadcrumb_title">الرجوع الي الرئيسية</h3>
                </div>
                <div className="col-8">
                  <nav className="navbreadcrumb" aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item active">
                        <a href="#">الرئيسية</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        الاحداث
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        حدث جديد
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </section>

          <div className="row align-self-start row_rev">
            <div className="col-xs-12s col-sm-12 col-md-4 col-lg-4">
              <SideBarEvent></SideBarEvent>
            </div>
            <div className="col-xs-12s col-sm-12 col-md-8 col-lg-8">
              <div className="col-xs-12s col-sm-12 col-md-12 col-lg-12">
                <div className="">
                  <div className="card mb-3">
                    <div className="row g-0 ">
                      <div className="col-md-6 img_pos">
                        <img
                          src={selectedEvent.imagSrc}
                          className="img-fluid rounded "
                          alt="..."
                        />
                      </div>
                      <div className="col-md-6">
                        <div className="card-body TitleSecOne_prag">
                          <div className="row">
                            <div className="col-9">
                              <h6 className="card-title">
                                {selectedEvent.title}
                              </h6>
                            </div>
                            <div className="col-3">
                              <div className="date_event_card">
                                <p>ديسمبر</p>
                                <h4 className="fw-bold">22</h4>
                              </div>
                            </div>
                          </div>
                          <p className="card-text">{selectedEvent.desc}</p>
                        </div>
                        <hr />
                      </div>
                      <div className="Links card_details_zone">
                        <div className="location">
                          <p> {selectedEvent.address}</p>
                          <span
                            className="glyphicon glyphicon-star"
                            aria-hidden="true"
                          >
                            <img className="card_icon" src={location_icon} />
                          </span>
                        </div>
                        <div className="timeZone">
                          <p> 12:00ص</p>
                          <span
                            className="glyphicon glyphicon-star"
                            aria-hidden="true"
                          >
                            <img className="card_icon" src={timezone_icon} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Card_info></Card_info>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card_data;

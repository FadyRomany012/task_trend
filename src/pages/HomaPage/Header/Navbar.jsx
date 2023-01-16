import React, { useState } from "react";
import menuItems from "./MenuItems";
import Button from "react-bootstrap/Button";
import logo from "../../../assets/logo.png";
import "./Header.scss";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="container">
      <nav className="navbar">
        <div className="buttons d_none_res">
          <Button className="sign_button ">تسجيل الدخول</Button>
          <Button className="m-1 btn-outline sign_button sign_in">
            انشاء حساب
          </Button>
        </div>
        <div className="menu-icon" onClick={handleClick}>
          <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <div className="menu_res">
          <div>
            <ul className={active ? "nav-menu active" : "nav-menu"}>
              
              <div className="buttons d_block_res">
                <Button className="sign_button ">تسجيل الدخول</Button>
                <Button className="m-1 btn-outline sign_button sign_in">
                  انشاء حساب
                </Button>
              </div>
              <li>
                <a className="nav-links">تواصل معنا</a>
              </li>
              <li>
                <a className="nav-links">الفاعليات </a>
              </li>
              <li>
                
                <NavDropdown title="من نحن" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    عن الشركه
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    اعرف عنا
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    فريق العمل
                  </NavDropdown.Item>
                </NavDropdown>
              </li>
              <li>
                <a className="nav-links ">الرئيسية</a>
              </li>
            </ul>
          </div>
        </div>
        <h1 className="navbar-logo">
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
                  <rect x="0.5" y="0.5" width="49" height="48" fill="none" />
                </g>
              </g>
            </svg>
          </span>
        </h1>
      </nav>
    </div>
  );
};

export default Navbar;

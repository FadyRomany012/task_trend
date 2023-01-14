import React, { useState } from "react";
import menuItems from "./MenuItems";
import Button from "react-bootstrap/Button";
import logo from "../../../assets/logo.png";
import "./Header.scss";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="navbar">
      <div className="buttons d_none_res">
        <Button className="sign_button ">تسسجيل دخول</Button>
        <Button className="m-1 btn-outline sign_button sign_in">
          انشاء حساب
        </Button>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <div className="menu_res">
        <ul className={active ? "nav-menu active" : "nav-menu"}>
          <li>
            <a className="nav-links">الفاعليات </a>
          </li>
          <li>
            <a className="nav-links">تواصل معنا</a>
          </li>
          <li>
            <a className="nav-links">الرئيسية</a>
          </li>
          <div className="buttons d_block_res">
            <Button className="sign_button ">تسسجيل دخول</Button>
            <Button className="m-1 btn-outline sign_button sign_in">
              انشاء حساب
            </Button>
          </div>
        </ul>
      </div>
      <h1 className="navbar-logo">
        <span>
          <h5>الشعار</h5>
          <h6>السولقن</h6>
        </span>
        <img className="fab fa-react" src={logo} />
      </h1>
    </nav>
  );
};

export default Navbar;

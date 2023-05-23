import { useContext } from "react";
import { CText } from "../context/Context";
import "../../style/components/header.scss";
import { handleStatusModal } from "../../services/utils";
import LoginModal from "../Login";
import SignUpModal from "../SignUp";
import { NavLink } from "react-router-dom";

const Header = () => {
  const ct = useContext(CText);
  return (
    <>
      <header>
        <div className="container">
          <div className="sub-header">
            <ul>
              <li>
                <i className="fa fa-caret-square-o-right"></i>
                <a
                  onClick={() =>
                    handleStatusModal(ct.loginStatus, ct.setLoginStatus)
                  }
                  href="#"
                >
                  login
                </a>
              </li>
              <li>
                <i className="fa fa-caret-square-o-right"></i>
                <a href="#">terms & conditions</a>
              </li>
            </ul>
            <div className="socials">
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
            </div>
          </div>
          <div className="main-header">
            <div className="header-logo">
              <a href="/">
                <img src="images/logo.png" alt="" />
              </a>
            </div>
            <div id="nav">
              <ul
                id="nav-list"
                className={`${ct.menuStatus.menuNav ? "menu-mobile" : ""}`}
              >
                <li>
                  <NavLink to="/" >
                    <div className="title">Home</div>
                    <div className="nav-border"></div>
                    <div className="sup-title">start here</div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/design-drawings" >
                    <div className="title">Design Drawings</div>
                    <div className="nav-border"></div>
                    <div className="sup-title">what we have</div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/service">
                    <div className="title">Services</div>
                    <div className="nav-border"></div>
                    <div className="sup-title">what we offer</div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about">
                    <div className="title">About</div>
                    <div className="nav-border"></div>
                    <div className="sup-title">who we are</div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact">
                    <div className="title">Contact</div>
                    <div className="nav-border"></div>
                    <div className="sup-title">get in touch</div>
                  </NavLink>
                </li>
              </ul>
              <div className="sub-nav">
                <div className="icon">
                  <input
                    onChange={() => ct.handleToggleMenu("menuNav")}
                    type="checkbox"
                    id="menu"
                  />
                  <label htmlFor="menu" className="toggle">
                    <div className="bars" id="bar1"></div>
                    <div className="bars" id="bar2"></div>
                    <div className="bars" id="bar3"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <LoginModal />
      <SignUpModal />
    </>
  );
};

export default Header;

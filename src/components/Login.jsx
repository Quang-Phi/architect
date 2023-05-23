import { useContext, useState } from "react";
import "../style/components/login.scss";
import { handleStatusModal } from "../services/utils";
import { CText } from "./context/Context";
const LoginModal = () => {
  const ct = useContext(CText);
  return (
    <div id="login" className={`${ct.loginStatus ? "active" : ""}`}>
      <div
        onClick={() => handleStatusModal(ct.loginStatus, ct.setLoginStatus)}
        className="close"
      >
        <i className="fa-solid fa-xmark"></i>
      </div>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form>
        <h3>Login Here</h3>

        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" />
        <div className="link-group">
          <a className="forgot" href="#">
            {" "}
            Forgot Password?
          </a>
          <p>
            {" "}
            Have you not registered yet?{" "}
            <a
              onClick={() => {
                handleStatusModal(ct.loginStatus, ct.setLoginStatus);
                handleStatusModal(ct.signUpStatus, ct.setSignUpStatus);
              }}
              href="#"
            >
              {" "}
              Sign Up Here
            </a>
          </p>
        </div>
        <button>Log In</button>
        <div className="social">
          <div className="go">
            <i className="fa fa-google"></i> Google
          </div>
          <div className="fb">
            <i className="fa fa-facebook"></i> Facebook
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginModal;

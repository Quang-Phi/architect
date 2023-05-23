import { useContext } from "react";
import "../style/components/login.scss";
import { handleStatusModal } from "../services/utils";
import { CText } from "./context/Context";
const SignUpModal = () => {
  const ct = useContext(CText);
  return (
    <div id="login" className={`${ct.signUpStatus ? "active" : ""}`}>
      <div
        onClick={() => handleStatusModal(ct.signUpStatus, ct.setSignUpStatus)}
        className="close"
      >
        <i className="fa-solid fa-xmark"></i>
      </div>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form>
        <h3>SignUp Now</h3>

        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" />

        <label htmlFor="confirm-password">Confirm Password</label>
        <input type="password" placeholder="Confirm Password" id="confirm-password" />
        <div className="link-group">
          <p>
            {" "}
           You already have an account?{" "}
            <a
              onClick={() => {
                handleStatusModal(ct.loginStatus, ct.setLoginStatus);
                handleStatusModal(ct.signUpStatus, ct.setSignUpStatus);
              }}
              href="#"
            >
              {" "}
              Log In Here
            </a>
          </p>
        </div>

        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpModal;

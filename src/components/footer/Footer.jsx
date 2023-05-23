import { useContext } from "react";
import { CText } from "../context/Context";
import "../../style/components/footer.scss";
import { handleStatusModal } from "../../services/utils";

const Footer = () => {
  const ct = useContext(CText);
  return (
    <>
      <section
        className={`info-box  ${ct.menuStatus.menuInfo ? "active" : ""} `}
      >
        <span
          className="info-toggle"
          onClick={() => ct.handleToggleMenu("menuInfo")}
        >
          <i className="fa fa-info-circle"></i>
        </span>

        <div
          className={`info-content  ${ct.menuStatus.menuInfo ? "active" : ""} `}
        >
          <ul>
            <li>
              <i className="fa fa-phone"></i>0964298523
            </li>
            <li>
              <i className="fa fa-envelope"></i>
              <a href="#">contact@admin.com</a>
            </li>
            <li>
              <i className="fa fa-home"></i>123 Street, HCM City.
            </li>
          </ul>
        </div>
      </section>
      <footer>
        <div className="inner-footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12 message-form">
                <img src="images/logo2.png" alt="" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, cum.
                </p>
                <div className="send-message">
                  <form id="contact-form">
                    <h4>Send us a Message</h4>
                    <div className="group-input d-flex">
                        <input
                          name="name"
                          id="name"
                          type="text"
                          placeholder="Name"
                        />
                        <input
                          name="mail"
                          id="mail"
                          type="text"
                          placeholder="Email"
                        />
                    </div>
                    <div className="submit-area">
                      <textarea
                        name="comment"
                        id="comment"
                        placeholder="Message"
                      ></textarea>
                      <input
                        type="submit"
                        id="submit_contact"
                        className="main-button"
                        value="Send"
                      />
                      <div id="msg" className="message"></div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 contact">
                <h4>Recent Posts</h4>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-arrow-circle-right"></i> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, doloribus.
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-arrow-circle-right"></i> Lorem ipsum dolor sit amet.
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-arrow-circle-right"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-arrow-circle-right"></i> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente quaerat fuga unde?
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-12 tags">
                <div className="tags-content">
                  <h4>Popular Tags</h4>
                  <a href="#">architect</a>
                  <a href="#">design home</a>
                  <a href="#">drawing home</a>
                  <a href="#">villa design</a>
                  <a href="#">drawing villa</a>
                  <a href="#">architect product</a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 flickr">
                <div className="singup">
                  <h4>NEWSLETTER SIGNUP</h4>
                  <p>
                    This is Photoshop's version of Lorem Ipsum. Proin gravida
                    nibh vel velit auctor aliquet.
                  </p>
                  <button onClick={() =>  handleStatusModal(ct.signUpStatus, ct.setSignUpStatus)} className="btn btn-success">Sign Up</button>
                </div>
                <div className="flickr-content">
                  <h4>Flickr Widget</h4>
                  <div className="container">
                    <ul className="row">
                      <li className="col-4">
                        <a href="#">
                          <img src="images/flickr2.jpg" alt="" />
                        </a>
                      </li>
                      <li className="col-4">
                        <a href="#">
                          <img src="images/flickr3.jpg" alt="" />
                        </a>
                      </li>
                      <li className="col-4">
                        <a href="#">
                          <img src="images/flickr4.jpg" alt="" />
                        </a>
                      </li>
                    </ul>
                    <ul className="row">
                      <li className="col-4">
                        <a href="#">
                          <img src="images/flickr5.jpg" alt="" />
                        </a>
                      </li>
                      <li className="col-4">
                        <a href="#">
                          <img src="images/flickr2.jpg" alt="" />
                        </a>
                      </li>
                      <li className="col-4">
                        <a href="#">
                          <img src="images/flickr3.jpg" alt="" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="last-div">
          <div className="container d-flex justify-content-between">
            <div className="copyright">
              © Architect, All Rights Reserved
            </div>
            <div id="back-to-top">
              <a href="#top">Back to Top</a>
            </div>
            <div className="f-socials">
              <a href="#">
                <i className="fa fa-google-plus"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa fa-pinterest"></i>
              </a>
              <a href="#">
                <i className="fa fa-dribbble"></i>
              </a>
              <a href="#">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;

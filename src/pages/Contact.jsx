import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import "../style/pages/contact.scss";

const Contact = () => {
  return (
    <>
      <div id="container">
        <Header />
        <div className="head-banner">
          <div className="container d-flex justify-content-between align-items-center">
            <h4>Services</h4>
            <div className="site_map capitalize">
              <a className="capitalize" href="/">
                Home
              </a>{" "}
              Contact
            </div>
          </div>
        </div>

        <div className="contact-content mt-5">
          {/* <div className="map mb30">
            <div id="google_map"></div>
            <ul id="map_controls">
              <li>
                <a id="zoom_in">
                  <span className="icon-plus icon-white"></span>
                </a>
              </li>
              <li>
                <a id="zoom_out">
                  <span className="icon-minus icon-white"></span>
                </a>
              </li>
              <li>
                <a id="reset">
                  <span className="icon-refresh icon-white"></span>
                </a>
              </li>
            </ul>
          </div> */}

          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="contact-info">
                  <h3 className="main-title">Contact Info</h3>
                  <span className="main-subtitle">
                    our email, phone and street address
                  </span>

                  <p>
                    Lorem ipsum dolor sit <span> amet consectetur</span>,
                    adipisicing elit. Quod esse necessitatibus nobis sunt
                    excepturi in ipsa impedit veniam. Nihil, temporibus?
                  </p>
                  <p>
                    <span>Lorem</span> ipsum dolor sit amet consectetur,
                    adipisicing elit. Earum tempora quam maiores sunt sequi,
                    sint incidunt totam provident, at, perferendis sapiente
                    dolore magnam mollitia? Eligendi veniam nulla incidunt
                    eveniet error.
                  </p>

                  <div className="post-meta">
                    <div className="post-home">
                      <i className="fa fa-home"></i>
                      HCM City.
                    </div>

                    <div className="post-phone">
                      <i className="fa fa-phone"></i>
                      +84 (123) 456 789
                    </div>

                    <div className="post-mail">
                      <a href="#">
                        <i className="fa fa-envelope"></i>
                        contact@admin.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="contact-box">
                  <form id="contact-form">
                    <h3 className="main-title">Get in touch</h3>
                    <span className="main-subtitle">send us a message</span>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="text-fields">
                          <div className="contact-input">
                            <input
                              name="name"
                              id="name"
                              type="text"
                              placeholder="Name"
                            />
                            <span>
                              <i className="fa fa-user"></i>
                            </span>
                          </div>
                          <div className="contact-input">
                            <input
                              name="mail"
                              id="mail"
                              type="text"
                              placeholder="e-mail"
                            />
                            <span>
                              <i className="fa fa-envelope-o"></i>
                            </span>
                          </div>
                          <div className="contact-input">
                            <input
                              name="website"
                              id="website"
                              type="text"
                              placeholder="website"
                            />
                            <span>
                              <i className="fa fa-link"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
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
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};
export default Contact;

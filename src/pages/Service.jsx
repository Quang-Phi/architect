import { useContext, useState } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { CText } from "../components/context/Context";
import "../style/pages/service.scss";

const Service = () => {
  const ct = useContext(CText);
  const [tab, setTab] = useState("tab1");
  return (
    <>
      <div id="container">
        <Header />
        <div className="head-banner">
          <div className="container d-flex justify-content-between align-items-center">
            <h4>Services</h4>
            <div className="site_map capitalize">
              <a className="capitalize" href="/">Home</a> Services
            </div>
          </div>
        </div>

        <div className="container">
          <div className="service-welcome">
            <h3 className="main-title">What We Ofer</h3>
            <span className="main-subtitle">Our awesome servicest</span>

            <p>
              This is <span>Photoshop's</span> version of Lorem Ipsum. Proin
              gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
              quis bibendum auctor, nisi elit
            </p>

            <p>
              Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
              Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor
              a ornare odio. Sed non mauris vitae erat consequat auctor eu in
              elit. <span>Class aptent taciti</span> sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos.{" "}
            </p>
          </div>
          <div className="about-service">
            <div className="services row">
              <div className="col-lg-3 col-md-6 col-12">
                <div className="our-service">
                  <div className="icon">
                  <i   className="fa-solid fa-swatchbook"></i>
                  </div>
                  <h3 className="capitalize">Free housing design consultation</h3>
                  <p>
                    Gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
                    lorem{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                {" "}
                <div className="our-service">
                  <div className="icon">
                  <i   className="fa-solid fa-book"></i>
                  </div>
                  <h3 className="capitalize">Consultancy on legal procedures</h3>
                  <p>
                    Gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
                    lorem{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="our-service">
                  <div className="icon">
                  <i   className="fa-solid fa-mountain-sun"></i>
                  </div>
                  <h3 className="capitalize">Design with feng shui</h3>
                  <p>
                    Gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
                    lorem{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="our-service">
                  <div className="icon">
                  <i   className="fa-solid fa-building"></i>
                  </div>
                  <h3 className="capitalize">project monitoring</h3>
                  <p>
                    Gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
                    lorem{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="tabs service-tabs my-5">
            <div className="tabs-widget">
              <ul className="tab-links">
                <li
                  onClick={() => setTab("tab1")}
                  className={`${tab === "tab1" ? "active" : ""}`}
                >
                  <a href="#fastsupport">Fast Support</a>
                </li>
                <li
                  onClick={() => setTab("tab2")}
                  className={`${tab === "tab2" ? "active" : ""}`}
                >
                  <a href="#quality">High Quality</a>
                </li>
                <li
                  onClick={() => setTab("tab3")}
                  className={`${tab === "tab3" ? "active" : ""}`}
                >
                  <a href="#moneyback">Money back</a>
                </li>
                <li
                  onClick={() => setTab("tab4")}
                  className={`${tab === "tab4" ? "active" : ""}`}
                >
                  <a href="#cleangode">Clean Gode</a>
                </li>
              </ul>

              <div
                id="support"
                className={` ${tab === "tab1" ? "active" : ""}`}
              >
                <ul>
                  <li>
                    <p>
                      This is <span>Photoshop's</span> version of Lorem Ipsum.
                      Proin gravida nibh vel velit auctor aliquet. Aenean
                      sollicitudin, lorem quis bibendum auctor, nisi elit{" "}
                    </p>

                    <p>
                      Duis sed odio sit amet nibh vulputate cursus a sit amet
                      mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio
                      tincidunt auctor a ornare odio. Sed non mauris vitae erat
                      consequat auctor eu in elit.{" "}
                      <span>Class aptent taciti</span> sociosqu ad litora
                      torquent per conubia nostra, per inceptos himenaeos.
                    </p>

                    <p>
                      Mauris in erat justo. Nullam ac urna eu felis dapibus
                      condimentum sit amet a augue.vulputate cursus a sit amet
                      mauris. Morbi accumsan ipsum velit.{" "}
                    </p>
                  </li>
                </ul>
              </div>

              <div id="visual" className={` ${tab === "tab2" ? "active" : ""}`}>
                <ul>
                  <li>
                    <p>
                      Lorem ipsum dolor sit amet <span>consectetur</span>{" "}
                      adipisicing elit. Dolore, saepe!
                    </p>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nesciunt, eligendi illum, nemo animi expedita iste dolorem
                      sit consequatur maiores totam laboriosam dolorum error
                      quidem hic temporibus maxime? Assumenda, harum dolorem?
                      <span> Class aptent taciti</span> sociosqu ad litora
                      torquent per conubia nostra, per inceptos himenaeos.
                    </p>

                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Quo ipsum amet aspernatur animi delectus fugiat? Laborum
                      dolores veniam veritatis quisquam!
                    </p>
                  </li>
                </ul>
              </div>

              <div id="econom" className={` ${tab === "tab3" ? "active" : ""}`}>
                <ul>
                  <li>
                    <p>
                      This is <span>Photoshop's</span> version of Lorem Ipsum.
                      Proin gravida nibh vel velit auctor aliquet. Aenean
                      sollicitudin, lorem quis bibendum auctor, nisi elit{" "}
                    </p>

                    <p>
                      Duis sed odio sit amet nibh vulputate cursus a sit amet
                      mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio
                      tincidunt auctor a ornare odio. Sed non mauris vitae erat
                      consequat auctor eu in elit.{" "}
                      <span>Class aptent taciti</span> sociosqu ad litora
                      torquent per conubia nostra, per inceptos himenaeos.
                    </p>

                    <p>
                      Mauris in erat justo. Nullam ac urna eu felis dapibus
                      condimentum sit amet a augue.vulputate cursus a sit amet
                      mauris. Morbi accumsan ipsum velit.{" "}
                    </p>
                  </li>
                </ul>
              </div>

              <div id="clean" className={` ${tab === "tab4" ? "active" : ""}`}>
                <ul>
                  <li>
                    <p>
                      Lorem ipsum dolor sit amet <span>consectetur</span>{" "}
                      adipisicing elit. Dolore, saepe!
                    </p>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nesciunt, eligendi illum, nemo animi expedita iste dolorem
                      sit consequatur maiores totam laboriosam dolorum error
                      quidem hic temporibus maxime? Assumenda, harum dolorem?
                      <span> Class aptent taciti</span> sociosqu ad litora
                      torquent per conubia nostra, per inceptos himenaeos.
                    </p>

                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Quo ipsum amet aspernatur animi delectus fugiat? Laborum
                      dolores veniam veritatis quisquam!
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Service;

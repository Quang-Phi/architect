import { useContext } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Slick from "../components/slick/Slick";
import { CText } from "../components/context/Context";
import "../style/pages/about.scss";
const About = () => {
  const ct = useContext(CText);
  return (
    <>
      <div id="container">
        <Header />
        <div className="head-banner">
          <div className="container d-flex justify-content-between align-items-center">
            <h4>About Us</h4>
            <div className="site_map capitalize">
              <a className="capitalize" href="/">
                Home
              </a>{" "}
              About Us
            </div>
          </div>
        </div>

        <div className="about-us container mb30">
          <div className="biograph">
            <div className="about-title">Biography</div>
            <div className="about-sub">company story</div>

            <p>
              Lorem ipsum <span>dolor</span>, sit amet consectetur adipisicing
              elit. <span>Vero</span> itaque incidunt quis saepe voluptatem
              ducimus blanditiis, distinctio amet odit? Blanditiis.
            </p>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. <span>Quis
              ducimus velit</span> magnam voluptate dignissimos id minus voluptatum
              animi sunt totam eos eligendi facere, debitis doloribus, ratione
              deserunt amet, perferendis corrupti suscipit sint optio neque
              eveniet atque? Enim dolore dolores voluptatibus reiciendis,
              voluptas sed ratione minima praesentium beatae laudantium in
              consectetur.
            </p>

            <p>
              Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum
              sit amet a augue.vulputate cursus a sit amet mauris. Morbi
              accumsan ipsum velit.{" "}
            </p>
          </div>
        </div>

        <section className="mb-5 our-team">
          <h3 className="main-title">Meet our Team</h3>
          <span className="main-subtitle">our cool & professional staff</span>
          <div className="container">
            <Slick
              config={{
                dots: false,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 4,
                autoplay: false,
                responsive: ct.breakpoint.ourTeams,
              }}
            >
              {ct.ourTeams.map((item, index) => {
                return (
                  <div className="slide" key={index}>
                    <a href="#">
                      <div className="team-mates imagesiny">
                        <img className="" src={item.img} alt="picture" />
                        <div className="team-mask"></div>
                      </div>
                    </a>
                    <div className="team-descr">
                      <h3>{item.name}</h3>
                      <h5>{item.designation}</h5>
                    </div>
                    <div className="additionalicons">
                      <a href="#">
                        <i className="fa fa-google-plus"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-dribbble"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </div>
                  </div>
                );
              })}
            </Slick>
          </div>
        </section>

        <div className="fun-facts mb30">
          <h3 className="main-title">Fun Facts</h3>
          <span className="main-subtitle">company stats and achievements</span>

          <div className="our-services">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="service-item">
                    <i className="fa fa-flask"></i>
                    <h3>9779</h3>
                    <span className="capitalize">number of designed drawings</span>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-12">
                  <div className="service-item">
                    <i className="fa fa-coffee"></i>
                    <h3>1479</h3>
                    <span className="capitalize">Customer Satisfaction</span>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-12">
                  <div className="service-item">
                    <i className="fa fa-users"></i>
                    <h3>578</h3>
                    <span className="capitalize">Happy Clients</span>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-12">
                  <div className="service-item">
                    <i className="fa fa-suitcase"></i>
                    <h3>2178</h3>
                    <span className="capitalize">Projects Done</span>
                  </div>
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

export default About;

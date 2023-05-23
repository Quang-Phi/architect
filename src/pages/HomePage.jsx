import Slick from "../components/slick/Slick";
import "../style/style.scss";
import "../style/pages/homePage.scss";
import { useContext } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { CText } from "../components/context/Context";
const HomePage = (props) => {
  const ct = useContext(CText);
  const products = ct.dataFull.slice(0, 10);

  return (
    <>
      <div id="home-page">
        <Header />
        <div className="banner">
          <ul>
            <Slick
              config={{
                dots: true,
                infinite: true,
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 4000,
                pauseOnHover: true,
                fade: true,
              }}
            >
              <li className="slide-item">
                <img src="images/slide1.jpg" alt="slide" />
                <div className="caption">
                  <h4>Welcome to our Website</h4>
                  <p>we are the Architects</p>
                  <a href="/about">
                    <i className="fa fa-arrow-circle-o-right"></i>Learn More
                  </a>
                </div>
                <div className="caption">
                  <img src="images/sketch.png" alt="Image" />
                </div>
                <div className="caption">
                  <img src="images/compas.png" alt="Image" />
                </div>
                <div className="caption">
                  <img src="images/pen.png" alt="Image 6" />
                </div>
              </li>
              <li className="slice-sc">
                <img src="images/slide3.jpg" alt="slide" />
                <div className="caption">
                  <div className="title">
                    Creative Architecture Template for your <span>Company</span>
                  </div>
                  <div className="desc">
                    <span>Well Organised Layers</span>
                  </div>
                  <div className="group-icon d-flex">
                    <div>
                      <img src="images/revolution/icon1.png" alt="Image 1" />
                      <span>
                        update <br />
                        notification
                      </span>
                    </div>
                    <div>
                      <img src="images/revolution/icon1.png" alt="Image 2" />
                      <span>
                        typography <br />
                        settings
                      </span>
                    </div>
                    <div>
                      <img src="images/revolution/icon3.png" alt="Image 2" />
                      <span>
                        unlimited <br />
                        portfolios
                      </span>
                    </div>
                    <div>
                      <img src="images/revolution/icon4.png" alt="Image 2" />
                      <span>
                        extended <br />
                        documentation
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            </Slick>
          </ul>
        </div>
        <section className="mb-5 dark features">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-12">
                <div className="feature-box">
                  <div className="title">
                    <h4>Architecture Design</h4>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Eum facere autem dolorum assumenda magnam sed fuga ullam,
                      porro totam voluptas quaerat accusamus illum quos
                      quisquam, nulla harum reprehenderit doloremque laudantium!
                    </p>
                  </div>
                  <i className="fa fa-pencil-square-o"></i>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="feature-box">
                  <div className="title">
                    <h4>Building Contracts</h4>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Eum facere autem dolorum assumenda magnam sed fuga ullam,
                      porro totam voluptas quaerat accusamus illum quos
                      quisquam, nulla harum reprehenderit doloremque laudantium!
                    </p>
                  </div>
                  <i className="fa fa-copy"></i>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="feature-box">
                  <div className="title">
                    <h4>Building Surveys</h4>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Eum facere autem dolorum assumenda magnam sed fuga ullam,
                      porro totam voluptas quaerat accusamus illum quos
                      quisquam, nulla harum reprehenderit doloremque laudantium!
                    </p>
                  </div>
                  <i className="fa fa-check-square-o "></i>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-5 recent-work">
          <h3 className="main-title">Recent Work</h3>
          <span className="main-subtitle">
            some handpicked projects we’ve done
          </span>
          <div className="list_carousel responsive">
            <ul>
              <Slick
                config={{
                  dots: false,
                  infinite: true,
                  speed: 500,
                  slidesToShow: 5,
                  slidesToScroll: 1,
                  autoplay: true,
                  autoplaySpeed: 2000,
                  pauseOnHover: true,
                  responsive: ct.breakpoint.serecentWorks,
                }}
              >
                {products.map((item, index) => {
                  return (
                    <li key={index}>
                      <div className="content">
                        <img src={item.image} alt="" />
                        <div className="mask">
                          <a href={item.image} data-fancybox-group="group">
                            <i className="fa fa-search"></i>
                          </a>
                          <a href="#">
                            <i className="fa fa-file-o"></i>
                          </a>
                        </div>
                      </div>
                      <div className="desc">
                        <h4>Architecture Design</h4>
                        <span>plans, buildings</span>
                      </div>
                    </li>
                  );
                })}
              </Slick>
            </ul>
          </div>
        </section>
        <section className="mb-5 whychoose">
          <div className="container">
            <h3 className="main-title">Why Choose Us ?</h3>
            <span className="main-subtitle">
              some reasons why you should choose <span>Metrical</span> for your
              next project
            </span>
            <div className="row">
              <div className="col-lg-3 mb-4">
                <img src="images/choose.jpg" alt="" />
              </div>
              <div className="col-lg-9">
                <div className="whychose-box">
                  <div className="icons">
                    <i className="fa fa-cogs"></i>
                    <p>Fast Support</p>
                  </div>
                  <div className="descr">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Voluptas ut nemo accusantium?
                    </p>
                  </div>
                </div>
                <div className="whychose-box">
                  <div className="icons">
                    <i className="fa-solid fa-money-bill"></i>
                    <p>Money Back</p>
                  </div>
                  <div className="descr">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Ea, impedit!
                    </p>
                  </div>
                </div>
                <div className="whychose-box">
                  <div className="icons">
                    <i className="fa-solid fa-thumbs-up"></i>{" "}
                    <p>High Quality</p>
                  </div>
                  <div className="descr">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-5 testimonials">
          <div className="container">
            <h3 className="main-title">What customers say about us</h3>
            <span className="main-subtitle">
              Positive reviews about our awesome company
            </span>
            <ul className="slider">
              <Slick
                config={{
                  dots: true,
                  infinite: true,
                  speed: 500,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplay: false,
                }}
              >
                {ct.testimonials.map((item, index) => {
                  return (
                    <li key={index}>
                      <img src="images/user-thumb.png" alt="" />
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Non illo asperiores, eaque voluptatibus repellat,
                        rerum debitis quisquam, deleniti animi voluptate quam
                        reprehenderit quidem explicabo magni saepe reiciendis
                        dolores tempore placeat?
                      </p>
                      <div className="test-border"></div>
                      <span>
                        John Smith, CEO at <strong>A</strong>
                      </span>
                    </li>
                  );
                })}
              </Slick>
            </ul>
          </div>
        </section>
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
        <section className="mb-5 recent-posts">
          <h3 className="main-title">Recent Posts</h3>
          <span className="main-subtitle">
            fresh news from architect company
          </span>
          <div className="container">
            <Slick
              config={{
                dots: false,
                speed: 1000,
                slidesToShow: 4,
                slidesToScroll: 4,
                autoplay: true,
                infinite: true,
                autoplaySpeed: 3000,
                responsive: ct.breakpoint.recentPosts,
              }}
            >
              {products.map((item, index) => {
                return (
                  <div className="slide" key={index}>
                    <div className="content imagesiny">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="repost-text">
                      <a href="#">
                        <h4>{item.name}</h4>
                      </a>
                      <p>{item.desc}</p>
                    </div>
                    <ul className="post-tags">
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-compass-drafting"></i>
                          {item.image ? item.image.length : 0} drawings
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-calendar"></i>
                          {item.createdAt}
                        </a>
                      </li>
                    </ul>
                  </div>
                );
              })}
            </Slick>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};
export default HomePage;

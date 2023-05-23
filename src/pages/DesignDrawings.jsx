import { useContext, useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { CText } from "../components/context/Context";
import "../style/pages/shop.scss";
import usePagination from "../hooks/usePagination";
import { Pagination } from "@mui/material";
import uuid from "react-uuid";

const DesignDrawings = () => {
  const ct = useContext(CText);
  const products = ct.dataFull;
  const [loadingCate, setLoadingCate] = useState(false);
  const [tab, setTab] = useState("tab");

  //filter
  const [result, setResult] = useState(products);
  useEffect(() => {
    let timer;
    if (loadingCate) {
      timer = setTimeout(() => {
        setLoadingCate(false);
      }, Math.random() * 1000);
    }
    return () => clearTimeout(timer);
  }, [loadingCate]);

  const handleFilter = (category) => {
    setLoadingCate(true);
    const filteredProducts = products.filter((item) =>
      item.category.toLowerCase().includes(category.toLowerCase())
    );
    setResult(filteredProducts);
  };
  //end
  //pagination
  const list = [];
  const [showPerPage, setShowPerPage] = useState(12);
  const [totalPages, startPg, endPg, setEndPg, displayPg] = usePagination(
    showPerPage,
    result.length
  );
  //change per page
  const handleChangeOption = (e) => {
    setShowPerPage(e.target.value);
    setEndPg(startPg + Number(e.target.value));
  };

  (() => {
    for (
      let i = startPg;
      i < (result.length < showPerPage ? result.length : endPg);
      i++
    ) {
      const newp = { ...result[i] };
      list.push(newp);
    }
    return list;
  })();
  //end

  return (
    result && (
      <>
        <div id="container">
          {loadingCate ? (
            <div className="f-loader">
              <span className="f-load"></span>
            </div>
          ) : (
            ""
          )}
          <Header />
          <div className="head-banner mb30">
            <div className="container d-flex justify-content-between align-items-center  ">
              <h4>Product</h4>
              <div className="site_map capitalize">
                <a className="capitalize" href="/">
                  Home
                </a>{" "}
                Blog
              </div>
            </div>
          </div>

          <div className="main-content">
            <div className="container">
              <div className="row">
                <div className="col-lg-9 col-md-12">
                  <div className="shop-content">
                    <div className="toolbar d-flex justify-content-between">
                      <div className="sort-select">
                        <label>Sort by</label>
                        <select className="select-box">
                          <option>Name A-Z</option>
                          <option>Name Z-A</option>
                          <option>Price from Low to High</option>
                          <option>Price from High to Low</option>
                        </select>
                      </div>
                      <div className="sort-select">
                        <label>Show</label>
                        <select
                          onChange={(e) => handleChangeOption(e)}
                          className="select-box"
                        >
                          <option key={uuid()} value={12}>
                            12 per page
                          </option>
                          <option key={uuid()} value={24}>
                            24 per page
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="row">
                      {result &&
                        list.map((product) => {
                          return (
                            <div
                              key={product.id}
                              className="col-lg-4 col-md-6 col-12"
                            >
                              <div className="grid-item">
                                <div className="content">
                                  <img src={product.image} alt="" />
                                </div>
                                <div className="repost-text">
                                  <a href="#">
                                    <h4>{product.name}</h4>
                                  </a>
                                  <p>{product.desc}</p>
                                  <a
                                    href="/contact"
                                    class="btn-view-all"
                                  >
                                    <p>Contact for a price quote</p>
                                    <svg
                                      stroke-width="4"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      class="h-6 w-6"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        stroke-linejoin="round"
                                        stroke-linecap="round"
                                      ></path>
                                    </svg>
                                  </a>
                                </div>
                                <ul className="post-tags">
                                  <li>
                                    <a href="#">
                                      <i className="fa-solid fa-compass-drafting"></i>
                                      {product.image ? product.image.length : 0}{" "}
                                      drawings
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fa fa-calendar"></i>
                                      {product.createdAt}
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          );
                        })}
                      <div className="pagination">
                        <Pagination
                          count={totalPages}
                          onChange={(e, value) => displayPg(value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-12">
                  <div className="shop-aside">
                    <div className="category mb30">
                      <h3>Categories</h3>
                      <div className="category-list">
                        <div
                          className="category-item"
                          onClick={() => {
                            handleFilter("");
                            setTab("tab");
                          }}
                        >
                          <div
                            className={`category-header ${
                              tab === "tab" ? "active" : ""
                            }`}
                          >
                            <h2 style={{ cursor: "pointer" }}>
                              All Design Drawings
                            </h2>
                          </div>
                        </div>
                        <div className="category-item">
                          <div className="category-header">
                            <h2>villa design drawings</h2>
                            <div
                              onClick={() =>
                                ct.handleToggleMenu(["menuCategories", "cate1"])
                              }
                              className="icon-group"
                            >
                              {!ct.menuStatus.menuCategories.cate1 ? (
                                <i className="ri-add-circle-line"></i>
                              ) : (
                                <i className="ri-indeterminate-circle-line"></i>
                              )}
                            </div>
                          </div>
                          <div
                            className={`category-content ${
                              ct.menuStatus.menuCategories.cate1 ? "active" : ""
                            }`}
                          >
                            <ul>
                              <li
                                key={uuid()}
                                className={`${tab === "tab1" ? "active" : ""}`}
                                onClick={() => setTab("tab1")}
                              >
                                <a
                                  onClick={() => handleFilter("modern type")}
                                  href="#"
                                >
                                  • modern type
                                </a>
                              </li>
                              <li
                                key={uuid()}
                                className={`${tab === "tab2" ? "active" : ""}`}
                                onClick={() => setTab("tab2")}
                              >
                                <a
                                  onClick={() => handleFilter("Classic Villa")}
                                  href="#"
                                >
                                  • Classic Villa
                                </a>
                              </li>
                              <li
                                key={uuid()}
                                className={`${tab === "tab3" ? "active" : ""}`}
                                onClick={() => setTab("tab3")}
                              >
                                <a
                                  onClick={() =>
                                    handleFilter("Neoclassical villa")
                                  }
                                  href="#"
                                >
                                  • Neoclassical villa
                                </a>
                              </li>
                              <li
                                key={uuid()}
                                className={`${tab === "tab4" ? "active" : ""}`}
                                onClick={() => setTab("tab4")}
                              >
                                <a
                                  onClick={() => handleFilter("mini villa")}
                                  href="#"
                                >
                                  • mini villa
                                </a>
                              </li>
                              <li
                                key={uuid()}
                                className={`${tab === "tab5" ? "active" : ""}`}
                                onClick={() => setTab("tab5")}
                              >
                                <a
                                  onClick={() => handleFilter("Villa 1 floor")}
                                  href="#"
                                >
                                  • Villa 1 floor
                                </a>
                              </li>
                              <li
                                key={uuid()}
                                className={`${tab === "tab6" ? "active" : ""}`}
                                onClick={() => setTab("tab6")}
                              >
                                <a
                                  onClick={() => handleFilter("Villa 2 floor")}
                                  href="#"
                                >
                                  • Villa 2 floor
                                </a>
                              </li>
                              <li
                                key={uuid()}
                                className={`${tab === "tab7" ? "active" : ""}`}
                                onClick={() => setTab("tab7")}
                              >
                                <a
                                  onClick={() => handleFilter("Villa 3 floor")}
                                  href="#"
                                >
                                  • Villa 3 floor
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="category-item">
                          <div className="category-header">
                            <h2>tube House design drawings</h2>
                            <div
                              onClick={() =>
                                ct.handleToggleMenu(["menuCategories", "cate2"])
                              }
                              className="icon-group"
                            >
                              {!ct.menuStatus.menuCategories.cate2 ? (
                                <i className="ri-add-circle-line"></i>
                              ) : (
                                <i className="ri-indeterminate-circle-line"></i>
                              )}
                            </div>
                          </div>
                          <div
                            className={`category-content ${
                              ct.menuStatus.menuCategories.cate2 ? "active" : ""
                            }`}
                          >
                            <ul>
                              <li
                                key={uuid()}
                                className={`${tab === "tab8" ? "active" : ""}`}
                                onClick={() => setTab("tab8")}
                              >
                                <a
                                  onClick={() =>
                                    handleFilter("1-storey tube house")
                                  }
                                  href="#"
                                >
                                  • 1-storey tube house{" "}
                                </a>
                              </li>
                              <li
                                key={uuid()}
                                className={`${tab === "tab9" ? "active" : ""}`}
                                onClick={() => setTab("tab9")}
                              >
                                <a
                                  onClick={() =>
                                    handleFilter("2-storey tube house")
                                  }
                                  href="#"
                                >
                                  • 2-storey tube house{" "}
                                </a>
                              </li>
                              <li
                                key={uuid()}
                                className={`${tab === "tab10" ? "active" : ""}`}
                                onClick={() => setTab("tab10")}
                              >
                                <a
                                  onClick={() =>
                                    handleFilter("3-storey tube house")
                                  }
                                  href="#"
                                >
                                  • 3-storey tube house{" "}
                                </a>
                              </li>
                              <li
                                key={uuid()}
                                className={`${tab === "tab11" ? "active" : ""}`}
                                onClick={() => setTab("tab11")}
                              >
                                <a
                                  onClick={() =>
                                    handleFilter("Neoclassical tube house")
                                  }
                                  href="#"
                                >
                                  • Neoclassical tube house{" "}
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="category-item">
                          <div className="category-header">
                            <h2>model house level 4 design drawings</h2>
                            <div
                              onClick={() =>
                                ct.handleToggleMenu(["menuCategories", "cate3"])
                              }
                              className="icon-group"
                            >
                              {!ct.menuStatus.menuCategories.cate3 ? (
                                <i className="ri-add-circle-line"></i>
                              ) : (
                                <i className="ri-indeterminate-circle-line"></i>
                              )}
                            </div>
                          </div>
                          <div
                            className={`category-content ${
                              ct.menuStatus.menuCategories.cate3 ? "active" : ""
                            }`}
                          >
                            <ul>
                              <li
                                key={uuid()}
                                className={`${tab === "tab12" ? "active" : ""}`}
                                onClick={() => setTab("tab12")}
                              >
                                <a
                                  onClick={() =>
                                    handleFilter("with corrugated iron roof")
                                  }
                                  href="#"
                                >
                                  • with corrugated iron roof{" "}
                                </a>
                              </li>
                              <li
                                key={uuid()}
                                className={`${tab === "tab13" ? "active" : ""}`}
                                onClick={() => setTab("tab13")}
                              >
                                <a
                                  onClick={() => handleFilter("with Thai roof")}
                                  href="#"
                                >
                                  • with Thai roof{" "}
                                </a>
                              </li>
                              <li
                                key={uuid()}
                                className={`${tab === "tab14" ? "active" : ""}`}
                                onClick={() => setTab("tab14")}
                              >
                                <a
                                  onClick={() =>
                                    handleFilter("rural level 4 house")
                                  }
                                  href="#"
                                >
                                  • rural level 4 house{" "}
                                </a>
                              </li>
                              <li
                                key={uuid()}
                                className={`${tab === "tab15" ? "active" : ""}`}
                                onClick={() => setTab("tab15")}
                              >
                                <a
                                  onClick={() =>
                                    handleFilter("Modern level 4 house")
                                  }
                                  href="#"
                                >
                                  • Modern level 4 house{" "}
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="price-filter mb30">
                    <h3>Price Filter</h3>
                    <div className="price-inner">
                      <input type="range" id="price-range" />
                      <label htmlFor="price-range"></label>
                    </div>
                  </div> */}

                    {/* <div className="feat-product mb30">
                    <h3>Popular Products</h3>
                    <div className="feat-boxes2">
                      <a href="#">
                        <img src="images/featboxes1.png" alt="" />
                      </a>
                      <div className="feat-right2">
                        <a href="#">Iphone 5 Black</a>
                        <span>$475.00</span>
                      </div>
                    </div>
                    <div className="feat-boxes2">
                      <a href="#">
                        <img src="images/featboxes2.png" alt="" />
                      </a>
                      <div className="feat-right2">
                        <a href="#">Iphone 4 White</a>
                        <span>$375.00</span>
                      </div>
                    </div>

                    <div className="feat-boxes2">
                      <a href="#">
                        <img src="images/featboxes3.png" alt="" />
                      </a>
                      <div className="feat-right2">
                        <a href="#">Samasung Galaxy note 3</a>
                        <span>$475.00</span>
                      </div>
                    </div>
                    <div className="feat-boxes2">
                      <a href="#">
                        <img src="images/featboxes4.png" alt="" />
                      </a>
                      <div className="feat-right2">
                        <a href="#">Mac X33 Laptop</a>
                        <span>$75.00</span>
                      </div>
                    </div>
                  </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </>
    )
  );
};

export default DesignDrawings;

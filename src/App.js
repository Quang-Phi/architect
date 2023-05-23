import "./App.scss";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { useEffect, useState } from "react";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import { CText } from "./components/context/Context";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./redux/reducers/dataSlice";
import DesignDrawings from "./pages/DesignDrawings";

function App() {
  //get data product
  const dispath = useDispatch();
  useEffect(() => {
    dispath(getData());
  }, []);
  const dataFull = useSelector((state) => state.data.data);
  //end

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, Math.random() * 2000);

    return () => {
      clearTimeout(timer);
    };
  },[]);

  const [menuStatus, setMenuStatus] = useState({
    menuInfo: false,
    menuNav: false,
    menuCategories: {
      cate1: false,
      cate2: false,
      cate3: false,
    },
  });

  const handleToggleMenu = (menuName) => {
    if (Array.isArray(menuName)) {
      setMenuStatus((prevState) => ({
        ...prevState,
        [menuName[0]]: {
          ...prevState[menuName[0]],
          [menuName[1]]: !prevState[menuName[0]][menuName[1]],
        },
      }));
    }
    setMenuStatus((prevState) => ({
      ...prevState,
      [menuName]: !prevState[menuName],
    }));
  };
  let testimonials = [
    {
      img: "images/user-thumb.png",
    },
    {
      img: "images/user-thumb.png",
    },
    {
      img: "images/user-thumb.png",
    },
  ];

  let ourTeams = [
    {
      img: "images/team1.jpg",
      name: "Mike William",
      designation: "Developer",
    },
    {
      img: "images/team2.jpg",
      name: "Mike William",
      designation: "Developer",
    },
    {
      img: "images/team3.jpg",
      name: "Vladimir Perzanjak",
      designation: "Developer",
    },
    {
      img: "images/team4.jpg",
      name: "Smith Armstrong",
      designation: "Developer",
    },
    {
      img: "images/team1.jpg",
      name: "Mike William",
      designation: "Developer",
    },
    {
      img: "images/team2.jpg",
      name: "Mike William",
      designation: "Developer",
    },
    {
      img: "images/team3.jpg",
      name: "Vladimir Perzanjak",
      designation: "Developer",
    },
    {
      img: "images/team4.jpg",
      name: "Smith Armstrong",
      designation: "Developer",
    },
  ];


  const breakpoint = {
    serecentWorks: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    testimonials: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    ourTeams: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    recentPosts: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  const [loginStatus, setLoginStatus] = useState(false);
  const [signUpStatus, setSignUpStatus] = useState(false);

  return (
    <>
      {isLoading ? (
        <span className="loader"></span>
      ) : (
        <CText.Provider
          value={{
            menuStatus,
            setMenuStatus,
            handleToggleMenu,
            testimonials,
            ourTeams,
            breakpoint,
            dataFull,
            loginStatus,
            setLoginStatus,
            signUpStatus,
            setSignUpStatus,
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/design-drawings" element={<DesignDrawings />} />
          </Routes>
        </CText.Provider>
      )}
    </>
  );
}

export default App;

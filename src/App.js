import MenuTab from "./Components/MenuTab";
import NavBar from "./Components/NavBar";
import AllPanel from "./Components/AllPanel";
import ImagesPanel from "./Components/ImagesPanel";
import NewsPanel from "./Components/NewsPanel";
import VideosPanel from "./Components/VideosPanel";
import { Switch, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./Components/Loader";

const text = localStorage.getItem("search");


function App() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [search, setSearch] = useState(text);
  const [submitSearch, setSubmitSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const base = "https://google-search3.p.rapidapi.com/api/v1";
  const location = useLocation();

  console.log(text);
  const query =
    location.pathname === "/videos"
      ? `/q=${submitSearch} videos`
      : location.pathname === "/videos" && text
      ? `/q=${text} videos`
      : `/q=${submitSearch}`;
  const type =
    location.pathname === "/" || location.pathname === "/videos"
      ? "/search"
      : location.pathname;
  const commas = new Intl.NumberFormat("en-US");

  //check for Navigation Timing API support
  if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
    console.info("This page is reloaded");
  } else {
    console.info("This page is not reloaded");
  }

  useEffect(() => {
    console.log("im");
    const getResults = async () => {
      setLoader(true);
      try {
        const response = await axios.get(`${base}${type}${query}`, {
          headers: {
            "x-proxy-location": "US",
            "x-rapidapi-host": "google-search3.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_API_KEY,
          },
        });
        console.log(response.data);
        setData(response.data);
        setLoader(false);
      } catch (error) {
        if (error.response.status === 429) {
          alert(error.response.data.message);
        } else {
          console.log(error);
        }
      }
    };
    getResults();
  }, [query, type, location]);

  const onEnterText = async (e) => {
    const key = e.keyCode || e.which;
    console.log("This is search", search);
    if (!search) {
      console.log("ho gaya");
      await localStorage.setItem("search", ``);
    }
    if (key === 13) {
      e.preventDefault();
      setSubmitSearch(search);
      await localStorage.setItem("search", `${search}`);
    }
  };

  const onClear = async () => {
    setSearch("");
    await localStorage.setItem("search", `${search}`);
  };

  const onSubmitSearch = () => {
    setSubmitSearch(search);
    sessionStorage.setItem("is_reload", true);
  };

  const changeMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        margin: "0",
        padding: 0,
        overflowX: "hidden",
      }}
      className={darkMode ? "dark" : ""}
    >
      <NavBar
        onEntertext={onEnterText}
        search={search}
        setSearch={setSearch}
        onClear={onClear}
        onSubmitSearch={onSubmitSearch}
        changeMode={changeMode}
        darkMode={darkMode}
      />
      <MenuTab />
      <div
        className="h-auto dark:bg-gray-900 "
        style={{ minHeight: "calc(100% - 113px)" }}
      >
        {data.length !== 0 ? (
          <p
            className=" text-gray-600 font-normal text-sm pl-4 lg:pl-10 pt-3 dark:text-gray-100"
            style={{ fontSize: "15px" }}
          >
            About {commas?.format(data?.total)} results ({data?.ts?.toFixed(2)}
            seconds)
          </p>
        ) : (
          ""
        )}

        <Switch>
          <Route
            exact
            path="/"
            render={(props) =>
              loader ? <Loader /> : <AllPanel data={data} {...props} />
            }
          />
          <Route
            exact
            path="/images"
            render={(props) =>
              loader ? <Loader /> : <ImagesPanel data={data} {...props} />
            }
          />
          <Route
            exact
            path="/news"
            render={(props) =>
              loader ? <Loader /> : <NewsPanel data={data} {...props} />
            }
          />
          <Route
            exact
            path="/videos"
            render={(props) =>
              loader ? <Loader /> : <VideosPanel data={data} {...props} />
            }
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;

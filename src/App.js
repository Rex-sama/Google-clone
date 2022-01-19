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

function App() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [search, setSearch] = useState("");
  const [submitSearch, setSubmitSearch] = useState("");
  const base = "https://google-search3.p.rapidapi.com/api/v1";
  const location = useLocation();
  // const text = localStorage.getItem("search");
  const query =
    location.pathname === "/videos"
      ? `/q=${submitSearch} videos`
      : `/q=${submitSearch}`;
  const type =
    location.pathname === "/" || location.pathname === "/videos"
      ? "/search"
      : location.pathname;
  const commas = new Intl.NumberFormat("en-US");

  useEffect(() => {
    const getResults = async () => {
      setLoader(true);
      console.log(location.pathname);
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
        console.log(error);
      }
    };
    getResults();
  }, [query, type, location]);

  const onEnterText = (e) => {
    const key = e.keyCode || e.which;
    if (key === 13) {
      e.preventDefault();
      setSubmitSearch(search);
      // localStorage.setItem("search", `/q=${search}`);
    }
  };

  const onClear = () => {
    setSearch("");
  };

  const onSubmitSearch = () => {
    setSubmitSearch(search);
  };

  return (
    <div className="bg-white dark:bg-gray-800">
      <NavBar
        onEntertext={onEnterText}
        search={search}
        setSearch={setSearch}
        onClear={onClear}
        onSubmitSearch={onSubmitSearch}
      />
      <MenuTab />
      {data.length !== 0 ? (
        <p
          className=" text-gray-600 font-normal pl-10 pt-3"
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
  );
}

export default App;

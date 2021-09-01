import "./App.css";
import { tubecontext } from "./Helpers/Context";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Videos from "./components/Videos/Videos";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage/SearchPage";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [BarToggle, setBarToggle] = useState(true);
  const [SearchInput, setSearchInput] = useState("");

  const [ThemeToggle, setThemeToggle] = useState(() => {
    const Data = localStorage.getItem("themetoggle");
    return Data !== null ? JSON.parse(Data) : false;
  });

  useEffect(() => {
    localStorage.setItem("themetoggle", ThemeToggle);
  }, [ThemeToggle]);

  return (
    <div className="app">
      <Router>
        <tubecontext.Provider
          value={{
            BarToggle,
            setBarToggle,
            SearchInput,
            setSearchInput,
            ThemeToggle,
            setThemeToggle,
          }}
        >
          <Header />
          <div
            className="app__body"
            style={ThemeToggle ? { backgroundColor: "#282828" } : {}}
          >
            <Sidebar />
            <Switch>
              <Route path="/" exact>
                <Videos />
              </Route>
              <Route path="/search">
                <SearchPage />
              </Route>
            </Switch>
          </div>
        </tubecontext.Provider>
      </Router>
    </div>
  );
}

export default App;

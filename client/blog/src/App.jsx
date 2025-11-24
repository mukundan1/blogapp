// App.js

import React from "react";
import "./App.css";



import Posts from "./components/Posts";
import Navbar from "./components/BlogNav"
import Pagination6 from "./components/Pagination";

const App = () => {
    return (
        <div className="main-container" style={{backgroundColor: "aliceblue"}}>
            <Navbar />
            <Posts />
            {/* <Pagination6 /> */}
        </div>
    );
};

export default App;
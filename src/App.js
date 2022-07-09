import "./App.css";

import { Route, Routes } from "react-router-dom";
import Nav from "./Redusers/Components/Navigation/Nav";
import Header from "./Redusers/Components/Header/Header";
import React from "react";
import PostComponent from "./Redusers/Components/Content/PostComponent";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <div className="wrapper-content">
        <Routes>
          <Route path="/Content" element={<PostComponent />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

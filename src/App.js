import "./App.css";

import { Route, Routes } from "react-router-dom";
import Nav from "./Redusers/Components/Navigation/Nav";
import Header from "./Redusers/Components/Header/Header";

// import PostComponent from "./Redusers/Components/Content/PostComponent";
import OndutynowComponent from "./Redusers/Components/OnDutyNow/OndutynowComponent";
import PostComponent from "./Redusers/Components/Content/PostComponent";

function App(props) {
  return (
    <div className="App">
      <Header />
      <Nav />

      <div className="wrapper-content">
        <Routes>
          ``
          <Route path="/Content" element={<PostComponent />} />
          <Route path="/OnDutyNow" element={<OndutynowComponent />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

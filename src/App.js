import "./App.css";
import PostComponent from "./Redusers/Components/PostComponent";
import { Route, Routes } from "react-router-dom";
import Nav from "./Redusers/Components/Content/Nav";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/Content" element={<PostComponent />} />
      </Routes>
    </div>
  );
}

export default App;

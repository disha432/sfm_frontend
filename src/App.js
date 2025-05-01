import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home"; // Correct import based on named export
import { TreeCount } from "./pages/TreeCount";
import { TreeSpecies } from "./pages/TreeSpecies";
import { GreenCover } from "./pages/GreenCover";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/tree-count" element={<TreeCount />} />{" "}
        <Route path="/tree-species" element={<TreeSpecies />} />{" "}
        <Route path="/green-cover" element={<GreenCover />} />{" "}
      </Routes>
    </Router>
  );
}

export default App;

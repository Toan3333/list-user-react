import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Create from "./pages/Create";
import Update from "./pages/Update";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/create" element={<Create></Create>}></Route>
        <Route path="/update/:id" element={<Update></Update>}></Route>
      </Routes>
    </Fragment>
  );
};

export default App;

import React from "react";
import { Route, Routes as RoutesReactDom } from "react-router-dom";
import Home from "../pages/home/Home";
import Ticker from "../pages/ticker/Ticker";

const Routes = () => {
  return (
    <RoutesReactDom>
      <Route path="/overview" element={<Home />} />
      <Route path="/ticker" element={<Ticker />} />
    </RoutesReactDom>
  );
};

export default Routes;

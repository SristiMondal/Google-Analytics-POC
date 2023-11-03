import React, { Suspense, } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactGA from "react-ga";

import "./App.css";
const Layout = React.lazy(() => import("../src/Layout/Layout"));
ReactGA.initialize("UA-255455109-1");

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback="loading...">
          <Layout />
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;

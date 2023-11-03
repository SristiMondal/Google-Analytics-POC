import React, { lazy } from "react";

const Dashboard = lazy(() => import("./Pages/Dashboard/Dashboard"));
const Product = lazy(() => import("./Pages/Product/Product"));
const AboutUs = lazy(() => import("./Pages/AboutUs/AboutUs"));
const Blog = lazy(() => import("./Pages/Blog/Blog"));

const routes = [
  {
    path: "/dashboard",
    component: <Dashboard />,
  },
  {
    path: "/",
    component: <Dashboard />,
  },
  {
    path: "/product",
    component: <Product />,
  },
  {
    path: "/about-us",
    component: <AboutUs />,
  },
  {
    path: "/blog",
    component: <Blog />,
  },
];

export default routes;

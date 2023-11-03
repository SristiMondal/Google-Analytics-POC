import { Box } from "@mui/system";
import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import routes from "../../Routes";
import Loader from "../Loader";

const Content = () => {
  return (
    <Box sx={{ margin: "40px" }}>
      <Suspense fallback={<Loader />}>
        <Routes>
          {routes.map((route, idx) => {
            console.log(route);
            return (
              route.component && (
                <Route key={idx} path={route.path} element={route.component} />
              )
            );
          })}
        </Routes>
      </Suspense>
    </Box>
  );
};

export default Content;

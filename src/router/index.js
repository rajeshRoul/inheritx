import React from "react";
import NotFound from "../pages/NotFound";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/Homepage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          element={<HomePage />}
        />
        <Route
          exact
          path="/"
          element={<Navigate to="/home" replace />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

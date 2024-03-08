import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "@/pages/home";
import { Assignment } from "@/pages/assignment";
import React from "react";

export const AppRoutes: React.FC = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/weatherApp" element={<Assignment />} />
    </Routes>
  );
};

import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";

import RSVP from "../pages/RSVP";
import Gallery from "../pages/Gallery";
import NotFound from "../pages/NotFound";
import Wedding from "../pages/Wedding";
import Birthday from "../pages/Birthday";
import Party from "../pages/Party";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wedding" element={<Wedding />} />
      <Route path="/birthday" element={<Birthday />} />
      <Route path="/party" element={<Party />} />
      <Route path="/rsvp" element={<RSVP />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;

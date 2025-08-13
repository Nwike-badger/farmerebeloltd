import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/HomePage";
import OurStory from "./pages/OurStory";
import Mission from "./pages/MissionAndVision";
import MeetOurFounder from "./pages/MeetOurFounder";
import CommunityImpact from "./pages/CommunityImpact";
import Media from "./pages/Media";
import OurProduce from "./pages/OurProduce";
import ContactUs from "./pages/ContactUs";

function Layout() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router basename="/farmerebeloltd">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about">
            <Route index element={<Navigate to="our-story" replace />} /> 
            <Route path="our-story" element={<OurStory />} />
            <Route path="mission" element={<Mission />} />
            <Route path="meet-our-founder" element={<MeetOurFounder />} />
            <Route path="community-impact" element={<CommunityImpact />} />
            <Route path="media-gallery" element={<Media />} />
          </Route>
          <Route path="our-produce" element={<OurProduce />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="*" element={<div className="text-center p-20"><h1>404 - Page Not Found</h1></div>} />
        </Route>
      </Routes>
    </Router>
  );
}
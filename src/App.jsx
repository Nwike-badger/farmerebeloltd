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
import PalmFruits from "./pages/PalmFruits";
import PalmKernel from "./pages/Palmkernel";
import PalmKernelOil from "./pages/PalmKernelOil";
import PalmOil from "./pages/PalmOil";
import Sludge from "./pages/Sludge";
import ScrollToTop from "./components/ScrollToTop";


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
    <Router>
      <ScrollToTop />
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
          <Route path="our-produce/palm-fruits" element={<PalmFruits />} />
          <Route path="our-produce/palm-oil" element={<PalmOil />} />
          <Route path="our-produce/palm-cake" element={<PalmKernel />} />
          <Route path="our-produce/palm-kernel-oil" element={<PalmKernelOil />} />
          <Route path="our-produce/sludge" element={<Sludge />} />

          <Route path="contact-us" element={<ContactUs />} />
          <Route path="*" element={<div className="text-center p-20"><h1>404 - Page Not Found</h1></div>} />
        </Route>
      </Routes>
    </Router>
  );
}

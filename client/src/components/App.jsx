import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import PrivacyPolicy from "./PrivacyPolicy";
import PageNotFound from "./PageNotFound";
import TermsAndCondition from "./TermsAndCondition";
import AboutUs from "./AboutUs";
import Profile from "./Profile";
import ResumeBuilder from "./ResumeBuilder";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route
          path="/profile"
          element={<ProtectedRoute component={Profile} />}
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/create-my-resume"
          element={<ProtectedRoute component={ResumeBuilder} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

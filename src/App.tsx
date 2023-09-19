import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Toast } from "./components/toast/Toast";
import ScrollToTop from "./components/scrollToTop";
import HomePage from "./pages/home/Home";
import Account from "./pages/account/Account";
import AboutUs from "./pages/about-us/AboutUs";
import ShoeInfo from "./pages/shoe-info/ShoeInfo";
import WinterFall from "./pages/winter-fall/WinterFall";
import AboutUsHomePage from "./pages/home/about-us-homepage/AboutUsHomePage";
import RegistrationBody from "./pages/login-registration-body/LoginRegistrationBody";

import "./fonts/fonts.css";

const App: React.FC = () => {
  const [id, setId] = useState<number | undefined>(undefined);

  return (
    <>
      <ScrollToTop />
      <Toast />
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/shoe-info" element={<ShoeInfo id={id} />} />
        <Route path="/account" element={<Account setId={setId} />} />
        <Route path="/About-us-main" element={<AboutUsHomePage />} />
        <Route path="/winter-fall" element={<WinterFall setId={setId} />} />
        <Route path="/login-registration-body" element={<RegistrationBody />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;

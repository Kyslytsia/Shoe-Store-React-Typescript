import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/home/Home";
import Account from "./pages/account/Account";
import AboutUs from "./pages/about-us/AboutUs";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Toast } from "./components/toast/Toast";
import ShoeInfo from "./pages/shoe-info/ShoeInfo";
import ScrollToTop from "./components/scrollToTop";
import WinterFall from "./pages/winter-fall/WinterFall";
import AboutUsHomePage from "./pages/home/about-us-homepage/AboutUsHomePage";
import RegistrationBody from "./pages/login-registration-body/LoginRegistrationBody";

import "./fonts/fonts.css";
import "./App.css";

const App: React.FC = () => {
  const [id, setId] = useState<number | undefined>(undefined);

  return (
    <div className="App">
      <ScrollToTop />
      <Toast />
      <Header />

      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/shoe-info" element={<ShoeInfo id={id} />} />
          <Route path="/account" element={<Account setId={setId} />} />
          <Route path="/About-us-main" element={<AboutUsHomePage />} />
          <Route path="/winter-fall" element={<WinterFall setId={setId} />} />
          <Route
            path="/login-registration-body"
            element={<RegistrationBody />}
          />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;

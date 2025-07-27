import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./App.css"; // import file css
import HomePage from "./pages/HomePage";
import BookingHotel from "./pages/BookingHotel";
import DetailHotelsPage from "./pages/DetailHotelPage";
import ListHotelsPage from "./pages/ListHotelsPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./assets/fonts/fonts.css";
import imgBackground from "./assets/imgBackground.jpg";


//Admin
import UploadHotelPage from "./pages/adminPages/UploadHotelPage";

function App() {
  return (
    <Router>
      <div
        className="appContainer font-UTM min-h-screen bg-cover bg-center font-UTM relative"
        style={{
          backgroundImage: `url(${imgBackground})`,
        }}
      >
       <Header className="fixed top-0 left-0 w-full z-50" />

        <div className="appContent">
          <Routes>
            <Route path="/" element={<Navigate to="/homePage" replace />} />
            <Route path="/homePage" element={<HomePage />} />
            <Route path="/bookingHotel" element={<BookingHotel />} />
            <Route path="/detailHotelsPage" element={<DetailHotelsPage />} />
            <Route path="/listHotelsPage" element={<ListHotelsPage />} />
            <Route path="/uploadHotelPage" element={<UploadHotelPage />} />
            <Route path="/registerPage" element={<RegisterPage />} />
            <Route path="/loginPage" element={<LoginPage />} />
            <Route
              path="*"
              element={
                <div
                  style={{ textAlign: "center", marginTop: 80, color: "red" }}
                >
                  404 - Page Not Found
                </div>
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

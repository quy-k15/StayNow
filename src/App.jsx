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
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./assets/fonts/fonts.css";
import imgBackground from "./assets/imgBackground.jpg";



function App() {
  return (
    <Router>
      <div className="appContainer font-UTM min-h-screen bg-cover bg-center font-UTM "
      style={{
          backgroundImage: `url(${imgBackground})`,
        }}>
        <Header />
        <div className="appContent">
          <Routes>
            <Route path="/" element={<Navigate to="/homePage" replace />} />
            <Route path="/homePage" element={<HomePage />} />
            <Route path="/bookingHotel" element={<BookingHotel />} />
             <Route path="/detailHotelsPage" element={<DetailHotelsPage />} />
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
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

import './App.css';
import React from "react";
import NavbarMenu from "./components/Menu/NavbarMenu";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './Pages/AboutUs';
import Home from './Pages/Home';
import Support from './Pages/Support';
import Join from './Pages/Join';

function App() {
    return (
        <>
            <Router>
                <div className="d-flex flex-column min-vh-100">

                <NavbarMenu />

                <div className="main-content">
                <Routes>
                            <Route path="/about" element={<AboutUs />} />
                            <Route path="/" element={<Home />} />
                            <Route path="/support" element={<Support />} />
                            <Route path="/join" element={<Join />} />

                    </Routes>
                </div>
                    <Footer />
                </div>
            </Router>
        </>
    );
}

export default App;
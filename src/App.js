import Header from './Header';
import Counter from './Counter';
import './App.css';
import React from "react";
import NavbarMenu from "./components/menu/NavbarMenu";
import UserCard from "./components/Cards/UserCard";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import Support from './pages/Support';
import Join from './pages/Join';

/*const users = [
    { name: "Богдан", age: 25, city: "Житомир", image: "/images/Stick_1.png"},
    { name: "Мирослав", age: 60, city: "Бердичів", image: "/images/Stick_2.png" },
    { name: "Анастасія", age: 40, city: "Тисмениця", image: "/images/Stick_3.png" }
]
<Route path="/" element={
                        <>
                            <Header />
                            <h1>My first React-project!</h1>
                            <Counter />
                            <div className="cards-container">
                                {users.map((user, index) => (
                                    <UserCard key={index} {...user} />
                                ))}
                            </div>
                        </>
                    } />*/

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
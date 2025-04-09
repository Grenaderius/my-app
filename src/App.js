import Header from './Header';
import Counter from './Counter';
import './App.css';
import React from "react";
import Menu from "./components/menu/Menu";
import UserCard from "./components/Cards/UserCard"

const users = [
    { name: "Bohdan", age: 25, city: "Shjutomyr" },
    { name: "Myroslav", age: 60, city: "Berduchiv" },
    { name: "Anastasia", age: 40, city: "Tysmenytsia" }
]

function App() {
    return (
        <section className="app">
            <header className="app-header">
                <Menu />
            </header>

            <div>
                <Header />
                <h1>My first React-project!</h1>
                <Counter />
            </div>

            <div className="cards-container">
                {users.map((user, index) => (
                    <UserCard key={index} {...user} />
                ))}
            </div>

        </section>
    );
}


export default App;
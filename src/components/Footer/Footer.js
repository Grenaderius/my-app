import React from 'react';
import "./Footer.css";
import { FaGithub, FaDiscord, FaYoutube, FaLinkedin, FaSteam, FaSpotify } from "react-icons/fa";

export default function Footer() {
    return (

        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>Ми в соцмережах:</h4>
                    <div className="icons">
                        <a href="https://www.youtube.com/@silentfanat2698" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                        <a href="https://discord.gg/fSsZSSwBCV" target="_blank" rel="noopener noreferrer"><FaDiscord /></a>
                        <a href="https://steamcommunity.com/groups/nr31fkr" target="_blank" rel="noopener noreferrer"><FaSteam /></a>
                        <a href="https://open.spotify.com/playlist/3lRzWATRJF8vWOyWw0yQ0J?si=qzhnSOvGR-Kb6W-HQRRzMA&nd=1&dlsi=7c08ec009e604637" target="_blank" rel="noopener noreferrer"><FaSpotify /></a>
                    </div>
                </div>

                <div className="footer-section">
                    <h4>Розробник:</h4>
                    <div className="icons">
                        <a href="https://github.com/Grenaderius" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/%D0%BD%D0%B0%D0%B7%D0%B0%D1%80-%D0%BA%D0%BE%D1%80%D0%B1%D1%83%D1%82%D1%8F%D0%BA-9125472bb/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    </div>
                </div>
            </div>

            <p className="footer-text">
                © {new Date().getFullYear()} Nr31FKR Official. Усі права захищено.
            </p>
        </footer>

    );
}

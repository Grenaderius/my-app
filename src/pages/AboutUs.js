import React from 'react';
import './AboutUs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageCarousel from '../components/Carousel/Carousel';

export default function AboutUs() {

    return (
        <>
            <ImageCarousel/>
            <div className="carousel-bottom-line" />

            <div className="container">

                <h1 className="about-us-header mt-3 mb-1">Про нас:</h1>
                <p>Nr.31 Feldkanonenregiment - це Австро-Угорський полк польової артилерії,
                    що базувався у Станіславові(сьогодні Івано-Франківськ).
                    Він був заснований у 1885 році і на 70% складався з українців.
                    Наш полк - це його відображення в грі Mount & Blade: Warband: Napoleonic Wars.</p>
            

                <div className="flag-section">
                    <div>
                        <p>Наш полковий тег - Nr31[FKR]</p>
                        <p>Стяг, що використовується на івентах - Український</p>

                    </div>

                    <img className="ukrainian-flag" src="/images/Flag_of_Ukraine_with_Nr31_emblem.png" alt="Український прапор"></img>
                </div>
            </div>

            <div className="lists-section">
                <div className="container">
                    <h2>Усі учасники по званню діляться на:</h2>
                    <ul className="rank-list">
                        <li>Уповноважених офіцерів - основні командири</li>
                        <li>Сержантів - теж командири, але трошки нижчі у званні</li>
                        <li>Звичайних учасників</li>
                        <li>Рекрутів</li>
                        <li>Резервістів</li>
                    </ul>

                    <h2>По спеціальностях:</h2>
                    <ul className="professions-list">
                        <li>Артилеристів</li>
                        <li>Піхотинців</li>
                        <li>Єгерів</li>
                    </ul>
                </div>
            </div>

            <div className="visiting-section">
                <h2 className="mt-5 mb-1">Іноземний легіон</h2>
                <p className="mb-5">Також ми маємо іноземний легіон - учасники із інших держав або полків, що не відносяться до основного складу.</p>

                <h2 className="mb-1">Відвідування:</h2>
                <p className="mb-5">На момент написання цієї сторінки полк налічує 53 учасники. Середня відвідуваність станом на квітень 2025 року стакновить 19,5 учасника на івент.</p>
            </div>

            <div className="event-schedule-section">
                <h2 className="mt-3">Розклад івентів станом на 22.05.2025:</h2>

                <table>
                    <tr>
                        <th>Назва івенту:</th>
                        <th>Час по Києву:</th>
                        <th>Спеціальності:</th>
                    </tr>
                    <tr>
                        <td>HLI Tuesday Flag Spawn</td>
                        <td>Вівторок 21:00</td>
                        <td>Піхота й артилерія</td>
                    </tr>
                    <tr>
                        <td>60th Thursday Flag Spawn</td>
                        <td>Четвер 21:00</td>
                        <td>Піхота й артилерія</td>
                    </tr>
                    <tr>
                        <td>Тренування та церемонія</td>
                        <td>П'ятниця 20:00</td>
                        <td>Залежить від типу</td>
                    </tr>
                    <tr>
                        <td>1stGLI Saturday Line Battle</td>
                        <td>Субота 21:00</td>
                        <td>Піхота й артилерія</td>
                    </tr>
                    <tr>
                        <td>33rd Sunday Flag Spawn</td>
                        <td>Неділя 21:00</td>
                        <td>Піхота та Єгері</td>
                    </tr>
                    </table>
            </div>

            <div className="bottom-section">
                <p>Також ми маємо свій <a href="https://www.youtube.com/@silentfanat2698" target="_blank" rel="noopener noreferrer">YouYube-канал</a>, де викладаємо відео з наших івентів та тренувань.</p>
                <p>І полковий плейлист на <a href="https://open.spotify.com/playlist/3lRzWATRJF8vWOyWw0yQ0J?si=qzhnSOvGR-Kb6W-HQRRzMA&nd=1&dlsi=7c08ec009e604637" target="_blank" rel="noopener noreferrer">Spotify</a></p>
            </div>
        </>
    );

}
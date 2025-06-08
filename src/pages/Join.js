import React from 'react';
import './Join.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Join() {

    const handleImageClick = (link) => {
        window.open(link, '_blank');
    }

    return (
        <>
            <div className="top-section mb-4 mt-3">
                <div className="container">
                    <h1>Бажаєш приєднатися?</h1>
                    <p className="joining-text">Якщо ти розумієш українську і зможеш відповісти на наступні питання, ми будемо раді привітати тебе як нашого рекрута:</p>

                    <ul className="top-questions-list mt-2">
                        <li>Чим відрізняється паляниця від полуниці?</li>
                        <li>Який український банк не має фізичних відділень?</li>
                    </ul>
                </div>
            </div>


            <div className="needs-section mb-5 mt-4">
                <h2 className="mt-1">Що необхідно мати для гри?</h2>

                <div className="container needs-content mt-3">
                    <ul className="needs-list">
                        <li>Steam акаунт</li>
                        <li>Гру Mount & Blade: Warband із DLC Napoleonic Wars</li>
                        <li>Акаунт у Discord</li>
                        <li>Для повного занурення бажано також мати мікрофон, але якщо немає - нестрашно</li>
                    </ul>

                    <img className="needs-section-image" src={`${process.env.PUBLIC_URL}/images/warband-nw-image.jpg`} alt="" />
                </div>
            </div>

            <div className="links-section mt-5 mb-5">
                <div className="container">
                    <h2>Як приєднатися?</h2>

                    <div className="discord-section">
                        <img className="discord-logo-image" src={`${process.env.PUBLIC_URL}/images/discord-logo.png`} alt="Discord ЄУК" onClick={() => handleImageClick('https://discord.gg/fSsZSSwBCV')} />
                        <p>Щоб приєднатися до полку напиши у чаті Discord серверу ЄУК "Я хочу у полк Nr31" люди підкажуть згодом, що робити. Якщо тобі ніхто не відповідає - напиши у ПП Discord newton_manul.</p>
                    </div>

                    <div className="steam-section">
                        <p>Також можна написати будь-якому із наших командувачів, наведених у нашій групі Steam.</p>
                        <img className="steam-logo-image" src={`${process.env.PUBLIC_URL}/images/steam-logo.png`} alt="Група Nr31FKR Steam" onClick={() => handleImageClick('https://steamcommunity.com/groups/nr31fkr')} />
                    </div>

                </div>
            </div>

            <div className="info-section">
                <div className="container">
                    <p className="important-info"><b>Важливо!</b> Тільки українці, або ті, хто можуть хоча б розуміти команди українською на слух можуть стати повноцінними учасниками полку. Росіяни ні на яких умовах не можуть бути прийняті!</p>
                </div>
            </div>

        </>
    );

}
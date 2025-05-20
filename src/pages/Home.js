import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
    return (
       <>
            <div className="hero-section">
                <div className="hero-overlay">
                    <h1 className="hero-title">Nr.31 Feldkanonenregiment (Stanislau)</h1>
                </div>
            </div>

            <div className="hero-bottom-line" />

            <div className="middle-text-section">
                <div className="container">
                    <h1 className="middle-text-header">Хто ми?</h1>
                    <p className="middle-text">Ми - український казуальний полк у грі Mount&Blade Warband: Napoleonic Wars, який базується на Discord-сервері ЄУК.</p>
                </div>
            </div>

            <div className="about-jobs-section">
                <div className="container about-jobs-content">
                    <img className="jobs-image mt-3" src="/images/jobs.jpg" alt="Основні ігрові юніти" />
                    <p className="middle-about-jobs-text">Наші основні ігрові юніти - лінійна піхота, артилерія та єгері.</p>
                </div>
            </div>

            
                <div className="container">
                    <div className="offers-content">

                        <div className="offers-text mt-4">
                            <h1 className="offers-middle-text-header">Що ми можемо запропонувати?</h1>
                            <ul className="offers-list mt-4">
                                <li>Справжнє українське ком'юніті</li>
                                <li>Спілкування лише українською</li>
                                <li>15-30 людей активу на івентах</li>
                                <li>Велика кількість якісних європейських івентів</li>
                                <li>Можливість грати за піхоту, артилерію, сапера, лікаря, єгеря</li>
                                <li>Приємні обговорення на будь-які теми серед адекватних людей</li>
                            </ul>
                        </div>

                        <img className="offers-section-image" src="/images/offers-section-image.jpg" alt="" />

                    </div>
                </div>


            <div className="officers-section">
                <div className="container">
                    <h1 className="middle-text-header">Хто головний?</h1>
                    <ul className="officers-list-outer">
                        <li className="list-group-item">Лідер полку - Manul</li>
                    </ul>

                    <div className="middle-officers-content-section">

                        <img className="officers-section-image" src="/images/Nr31FKR_logo-no-back.png" alt="Логтип Nr31FKR" />

                        <ul className="officers-list">
                            <li className="list-group-item">Офіцер - Sagaydachnyi</li>
                            <li className="list-group-item">Офіцер - Dizhka</li>
                            <li className="list-group-item">Офіцер - GodyX</li>
                        </ul>

                        <ul className="officers-list">
                            <li className="list-group-item">Офіцер - Ris_kis</li>
                            <li className="list-group-item">Офіцер - Metila</li>
                            <li className="list-group-item">Офіцер - Ben</li>
                        </ul>

                        <img className="officers-section-image" src="/images/Nr31FKR_logo-no-back.png" alt="Логотип Nr31FKR" />

                    </div>
                    <ul className="officers-list-outer">
                        <li className="list-group-item">Офіцер - AvatarFM</li>
                    </ul>

                </div>
            </div>
        </>

       );

}
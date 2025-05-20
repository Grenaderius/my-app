import React, { useState } from 'react';
import './Support.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Support() {

    const [imageSrc, setImageSrc] = useState('/images/Support-image-before.png')

    const handleImageClick = (newImage, link) => {
        setImageSrc(newImage);
        window.open(link, '_blank');
    }


    return (
        <>
            <div className="container">
                <h1 className="support-header mt-3">Хочеш підтримати нас?</h1>
            </div>

            <div className="after-header-image-section">
                <div className="container">
                    <img className="support-before-after-image" src={imageSrc} alt="Допоможи!" />
                </div>
            </div>

            <div className="middle-section">
                <div className="container">
                    <img className="support-private-image" src="/images/private-convert.png" alt="Конверт Приват Банк" onClick={() => handleImageClick('/images/Support-image-after.png', 'https://www.privat24.ua/send/27n07')} />
                    <img className="support-mono-image" src="/images/banka-mono.png" alt="Монобанка" onClick={() => handleImageClick('/images/Support-image-after.png', 'https://send.monobank.ua/jar/3m9TAxi5Eb')} />
                </div>
            </div>

            <div className="ending-section mt-4 mb-4">
                <div className="container centered-content">
                    <img className="side-image" src="/images/Nr31FKR_logo-no-back.png" alt="Логотип Nr31FKR" />
                    <h3 className="ending-header">Дякую за твою підтримку!</h3>
                    <img className="side-image" src="/images/Nr31FKR_logo-no-back.png" alt="Логотип Nr31FKR" />
                </div>
            </div> 
        </>
    );
}
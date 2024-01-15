import { Converter } from '../converter/Converter';
import card from '../img/card.png';
import './Banner.css';
import { useState } from 'react';
import { banner } from '../constants.js';

export function Banner({ show }) {
    const [showConverter, setShowConverter] = useState(false);
    const [showBanner, setShowBanner] = useState(show);
    function toggleConverter() {
        setShowConverter(!showConverter);
        setShowBanner(!showBanner);
    }
    if (showBanner) {
        return (
            <div className='container'>
                <div className='banner'>
                    <div className='banner_converter'>
                        <p className='banner_converter-title'>{banner.title}</p>
                        <p className='banner_converter-text'>{banner.bannerText}</p>
                        <a href='#' className='banner_converter-button' onClick={toggleConverter}>{banner.buttonName}</a>
                    </div>
                    <img src={card} alt='card' style={{ width: '341px', height: '216px' }}></img>
                </div>
            </div>
        )
    } else {
        return (
            <Converter show={showConverter} />
        )
    }
}

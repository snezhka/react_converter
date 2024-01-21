import card1 from '../img/card1.png';
import './Banner.scss';
import { banner } from '../constants.js';

export function Banner() {
    //     const [showConverter, setShowConverter] = show;
    return (
        <div className='banner-container'>
            <div className='banner'>
                <p className='banner_title'>{banner.title}</p>
                <p className='banner_text'>{banner.bannerText}</p>
                <a href='#' className='banner_button'>{banner.converterTitle}</a>
            </div>
            <img src={card1} alt='card' style={{ width: '341px', height: '216px' }}></img>
        </div>
    )
}


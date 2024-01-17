
import card from '../img/card.png';
import './Banner.scss';
import { banner } from '../constants.js';

export function Banner({ show }) {
    const [showConverter, setShowConverter] = show;
    return (
        <div className='container'>
            <div className='banner'>
                <div className='banner_converter'>
                    <p className='banner_converter-title'>{banner.title}</p>
                    <p className='banner_converter-text'>{banner.bannerText}</p>
                    <a href='#' className='banner_converter-button' onClick={() => setShowConverter(!showConverter)}>{banner.buttonName}</a>s
                </div>
                <img src={card} alt='card' style={{ width: '341px', height: '216px' }}></img>
            </div>
        </div>
    )
}


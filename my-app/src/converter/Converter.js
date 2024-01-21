import { converter } from '../constants.js';
import card2 from '../img/card2.png';
import './Converter.scss';

export function Converter({ show }) {
    const [showCalculation, setShowCalculation] = show;
    return (
        <div className='converter-containter'>
            <div className='converter'>
                <p className='converter_title'>{converter.converterTitle}</p>
                <p className='converter_text'>{converter.converterText}</p>
                <a href='#' className='converter_button' onClick={(evt) => {
                    evt.preventDefault();
                    setShowCalculation(!showCalculation);
                }}>{converter.converterButtonName}</a>
            </div>
            <img src={card2} alt='card' style={{ width: '436px', height: '314px' }}></img>
        </div>
    )
}

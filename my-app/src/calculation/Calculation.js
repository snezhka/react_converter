import { calculation } from '../constants.js';
import './Calculation.scss';
import arrows from '../img/arrows.svg';

export function Calculation() {
    const date = new Date();
    console.log(date);
    return (
        <div className='calculation-containter'>
            <div className='calculation'>
                <p className='calculation_title'>{calculation.converterTitle}</p>
                <div className='calculation_exchange'>
                    <div>
                        <p className='calculation_text'>{calculation.converterText1}</p>
                        <div className='calculation_exchange-pos calculation_exchange-pos--left'>

                            <div className='calculation_exchange-pos-row'>
                                <input type='number' value='1000' />
                                <select>
                                    <option value="0" selected>UAH</option>
                                    <option value="1">USD</option>
                                    <option value="2">EUR</option>
                                </select>
                            </div>
                            <input type='date' value={date} />
                        </div>
                    </div>
                    <img src={arrows} alt='arrows' style={{ width: '22px', height: '22px' }}></img>
                    <div>
                        <p className='calculation_text'>{calculation.converterText2}</p>
                        <div className='calculation_exchange-pos calculation_exchange-pos--right'>

                            <div className='calculation_exchange-pos-row'>
                                <input type='number' value='38.7' />
                                <select>
                                    <option value="0">UAH</option>
                                    <option value="1" selected>USD</option>
                                    <option value="2">EUR</option>
                                </select>
                            </div>
                            <a href='#' className='calculation_button'>{calculation.saveResult}</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

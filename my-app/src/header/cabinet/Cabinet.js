import './Cabinet.css';
import cabinet from '../../img/cabinet.png';

export function Cabinet({ title }) {
    return (
        <a href='#' className='cabinet'>
            <img src={cabinet} style={{ width: '20', height: '22' }} alt='cabinet'></img>
            <p className='cabinet_title'>{title}</p>
        </a>
    );
}
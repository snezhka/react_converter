import './Cabinet.css';
import cabinet from './cabinet.png';
export function Cabinet({ title }) {
    return (
        <div className="cabinet">
            <a href="#">
                <img src={cabinet} width="20" height="22" alt="cabinet"></img>
                <span className={"cabinet_title"}>{title}</span>
            </a>
        </div>
    );
}
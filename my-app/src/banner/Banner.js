import rectangle from './rectangle.png';
import card from './card.png';
import './Banner.css';
export function Banner({ header, text, button_name }) {
    return (
        <div className="container" style={{
            backgroundImage: `url(${rectangle})`,
        }}>
            <div className="banner">
                <div className="banner_converter">
                    <span className="banner_converter_header">{header}</span>
                    <span className="banner_converter_text">{text}</span>
                    <div className="banner_converter_button">
                        <a href="#">{button_name}</a>
                    </div>
                </div>
                <img src={card} alt="card"></img>
            </div>
        </div>
    )
}
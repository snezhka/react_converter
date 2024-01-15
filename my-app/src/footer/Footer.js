import './Footer.css';
import logo from '../img/logo.png';
import { Menu } from '../header/menu/Menu.js';
import { Phone } from '../phone/Phone.js';
import { Social } from '../footer/social/Social.js';
import { phones, socials } from '../constants.js';
import { footer } from '../constants.js';

export function Footer() {
    return (
        <div className='footer'>
            <div className='footer_logo'>
                <div className='footer_logo-container'>
                    <img src={logo} style={{ width: '23px', height: '23px' }} alt='logo'></img>
                    <a href='#' className='footer_logo-text'>{footer.title}</a>
                </div>
                <div className='footer_logo-description'>{footer.footerDescription}</div>
            </div>
            <Menu menuItems={footer.menuItems} isHeader={false} />
            <ul class='footer_contacts'>
                {phones.map((phone) => <Phone key={phone.number} phone={phone} />)}
            </ul>
            <ul className='socials'>
                {socials.map((social) => <Social key={social.id} social={social} />)}
            </ul>
        </div>
    );
}
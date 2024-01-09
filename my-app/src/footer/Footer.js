import './Footer.css';
import logo from './logo.png';
import { Menu } from '../header/menu/Menu.js';
import { Phone } from '../footer/phone/Phone.js';
import { Social } from '../footer/social/Social.js';
export function Footer({ title, description, menu_items, phones, socials }) {
    return (
        <div className="footer">
            <div className="footer_logo">
                <div>
                    <img src={logo} width="23" height="23" alt="logo"></img>
                    <a href="#" className="footer_logo_text">{title}</a>
                </div>
                <div className="footer_logo_description">{description}</div>
            </div>
            <Menu menu_items={menu_items} isHeader={false} />
            <div class="footer_contacts">
                {phones.map((phone) => <Phone phone={phone} />)}
            </div>
            <div className="socials">
                {socials.map((social) => <Social social={social} />)}
            </div>
        </div>
    );
}
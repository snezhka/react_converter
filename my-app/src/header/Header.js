import './Header.css';
import { Menu } from './menu/Menu.js';
import { Cabinet } from './cabinet/Cabinet.js';
import logo from './logo.png';
export function Header({ title, menu_items }) {
    return (
        <div className="header">
            <div className="header_logo">
                <img src={logo} width="23" height="23" alt="logo"></img>
                <a href="#" className="header_logo_text">{title}</a>
            </div>
            <Menu menu_items={menu_items} isHeader={true} />
            <Cabinet title={"Особистий кабінет"} />
        </div>
    );
}
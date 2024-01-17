import './Header.scss';
import { Menu } from './menu/Menu.js';
import { Cabinet } from './cabinet/Cabinet.js';
import logo from '../img/logo.png';
import { cabinet } from '../constants.js';
import { header } from '../constants.js';

export function Header() {
    return (
        <div className='header'>
            <div className='header_logo'>
                <img src={logo} style={{ width: '23px', height: '23px' }} alt='logo'></img>
                <a href='#' className='header_logo-text'>{header.title}</a>
            </div>
            <Menu menuItems={header.menuItems} isHeader={true} />
            <Cabinet title={cabinet} />
        </div>
    );
}
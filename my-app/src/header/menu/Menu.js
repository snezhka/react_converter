import './Menu.scss';

export function Menu({ menuItems, isHeader }) {
    return (
        <ul className={isHeader ? 'menu_header' : 'menu_footer'}>
            {menuItems.map((item) => <li key={item.id} className="menu_item"><a href='#'>{item.title}</a></li>)}
        </ul>
    );
}
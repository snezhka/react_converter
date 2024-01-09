import './Menu.css';
export function Menu({ menu_items, isHeader }) {
    return (
        <ul className={isHeader ? "menu_header" : "menu_footer"}>
            {menu_items.map((item) => <li className="menu_item"><a href="#">{item}</a></li>)}
        </ul>
    );
}
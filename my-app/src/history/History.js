import s_arrow from '../img/s_arrow.svg';
import './History.scss';
export function History({ item }) {
    return (
        <div className='history_item'>
            <p id='history_item-date'>{item.date}</p>
            <p id='history_item-sell-amount'>{item.sellAmount}</p>
            <p id='history_item-sell-currency'>{item.sellCurrency}</p>
            <img src={s_arrow} alt='small arrow' id='history_item-small_arrow'></img>
            <p id='history_item-buy-amount'>{item.buyAmount}</p>
            <p id='history_item-buy-currency'>{item.buyCurrency}</p>
        </div>
    )
}
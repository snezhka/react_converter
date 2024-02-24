import { calculation, history } from '../constants.js';
import './Calculator.scss';
import arrows from '../img/arrows.svg';
import { History } from '../history/History.js';
import {
    useQuery,
} from 'react-query'
import { useEffect, useState } from 'react';

const todayDate = new Date();
const today = getUIDateFormat(todayDate);
const weekBeforeDate = new Date(new Date().setDate(todayDate.getDate() - 7));
const weekBefore = getUIDateFormat(weekBeforeDate);
let currencies = [];

export function Calculator() {
    const [date, setDate] = useState(today);
    const [sell, setSell] = useState(true);
    const [historyItems, setHistoryItems] = useState([]);

    const { data, isSuccess, isLoading, isError } = useQuery({
        queryKey: ['currencies', date],
        queryFn: () => fetchExchangeRates(date)
    });

    if (isLoading) {
        console.log('Loading...');
    }
    if (isError) {
        console.log('Error during fetching data');
    }
    if (isSuccess) {
        console.log('Data fetched successfully');
        currencies = data.map((item) => item.cc);
        console.log(currencies);
    }

    useEffect(() => {
        if (isSuccess) {
            sell ? calculateBuy(data) : calculateSell(data);
        }
    }, [date, isSuccess, sell]
    );
    return (
        <div className='calculator'>
            <div className='calculation-containter' >
                <div className='calculation'>
                    <p className='calculation_title'>{calculation.converterTitle}</p>
                    <div className='calculation_exchange'>
                        <div>
                            <p className='calculation_text'>{calculation.converterText1}</p>
                            <div className='calculation_exchange-pos calculation_exchange-pos--left'>

                                <div className='calculation_exchange-pos-row'>
                                    <input type="text" inputmode="numeric" pattern="\d*" id='amount-sell' placeholder='0.00' onChange={() => { setSell(true); calculateBuy(data) }} />
                                    <select id='currency-sell' onChange={() => calculateBuy(data)}>
                                        <option value="UAH" selected>UAH</option>
                                        {currencies.map((cur) => <option value={cur}>{cur}</option>)}
                                    </select>
                                </div>
                                <input type='date' id='calendar' value={date} min={weekBefore} max={today} onChange={(evt) => setDate(getCalendarDate(evt))} />
                            </div>
                        </div>

                        <img src={arrows} alt='arrows' id='arrows' style={{ width: '22px', height: '22px' }}></img>
                        <div>
                            <p className='calculation_text'>{calculation.converterText2}</p>
                            <div className='calculation_exchange-pos calculation_exchange-pos--right'>

                                <div className='calculation_exchange-pos-row'>
                                    <input type="text" inputmode="numeric" pattern="\d*" id='amount-buy' onChange={() => { setSell(false); calculateSell(data) }} />
                                    <select id='currency-buy' onChange={() => calculateSell(data)}>
                                        <option value="UAH" selected>UAH</option>
                                        {currencies.map((cur) => <option value={cur}>{cur}</option>)}
                                    </select>
                                </div>
                                <a href='#' className='calculation_button' onClick={(evt) => saveResultToArray(evt)}>{calculation.saveResult}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='history-container'>
                <div className='history'>
                    <div className='history-wrapper'>
                        <p className='history_title'>{history.historyTitle}</p>
                        <a href='#' className='history_clear' onClick={(evt) => clearHistoryItems(evt)}>{history.clearHistory}</a>
                    </div>
                    <div className='history_items'>
                        {historyItems.map((item) => <History item={item} />)}
                    </div>
                </div>
            </div>
        </div>
    )
    function saveResultToArray(evt) {
        evt.preventDefault();
        const historyItemsCopy = historyItems.slice();
        const date = document.querySelector('#calendar').value;
        const sellAmount = document.querySelector('#amount-sell').value;
        const sellCurrency = document.querySelector('#currency-sell');
        const sellCurrencySelected = sellCurrency[sellCurrency.selectedIndex].innerText
        const buyAmount = document.querySelector('#amount-buy').value;
        const buyCurrency = document.querySelector('#currency-buy');
        const buyCurrencySelected = buyCurrency[buyCurrency.selectedIndex].innerText;
        if (historyItemsCopy.length > 9) {
            historyItemsCopy.shift();
            console.log('array', historyItemsCopy);
        }

        historyItemsCopy.push({ date: date, sellAmount: sellAmount, sellCurrency: sellCurrencySelected, buyAmount: buyAmount, buyCurrency: buyCurrencySelected });
        setHistoryItems(historyItemsCopy);
    }

    function clearHistoryItems(evt) {
        evt.preventDefault();
        const historyItemsCopy = [...historyItems];
        historyItemsCopy.length = 0;
        setHistoryItems(historyItemsCopy);
    }
}

function calculateBuy(data) {
    const [rateSell, rateBuy] = calculate(data);
    const inputSell = document.querySelector('#amount-sell');
    const inputBuy = document.querySelector('#amount-buy');
    const amountSell = +inputSell.value;
    inputBuy.value = parseFloat(amountSell * rateSell / rateBuy).toFixed(2);
}

function calculateSell(data) {
    const [rateSell, rateBuy] = calculate(data);
    const inputBuy = document.querySelector('#amount-buy');
    const inputSell = document.querySelector('#amount-sell');
    const amountBuy = +inputBuy.value;
    inputSell.value = parseFloat(amountBuy * rateBuy / rateSell).toFixed(2);

}

function calculate(data) {
    const curSell = document.querySelector('#currency-sell');
    const curSellSelected = curSell[curSell.selectedIndex].innerText;
    const curBuy = document.querySelector('#currency-buy');
    const curBuySelected = curBuy[curBuy.selectedIndex].innerText;
    let rateBuy = 1;
    let rateSell = 1;
    if (curSellSelected !== 'UAH') {
        rateSell = data.find(obj => obj.cc === curSellSelected).rate;
    }
    if (curBuySelected !== 'UAH') {
        rateBuy = data.find(obj => obj.cc === curBuySelected).rate;
    }
    return [rateSell, rateBuy];
}

function getUIDateFormat(date) {
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    if (day < 10) {
        day = '0' + day;
    }

    if (month < 10) {
        month = `0${month}`;
    }

    return `${year}-${month}-${day}`;
}

function getAPIDateFormat(date) {
    return date.split('-').join('');
}

function getCalendarDate(evt) {
    return evt.target.value;
}


async function fetchExchangeRates(date) {
    const dateFormat = getAPIDateFormat(date);
    console.log(dateFormat);
    const response = await fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${dateFormat}&json`);
    const data = await response.json();
    console.log('DATA:', data);
    return data;
}


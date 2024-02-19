import phone1 from './img/phone1.png';
import phone2 from './img/phone2.png';
import soc1 from './img/1.png';
import soc2 from './img/2.png';
import soc3 from './img/3.png';
import soc4 from './img/4.png';

const title = 'Чіп Чендж';
const bannerText = 'Обмінник валют - навчальний';
const converterTitle = 'Конвертер валют';
const historyTitle = 'Історія конвертацій';
const menuItems = [{ id: 0, title: 'Послуги' }, { id: 1, title: 'Конвертер валют' }, { id: 2, title: 'Контакти' }, { id: 3, title: 'Задати питання' }];

const converterText1 = 'В мене є:';
const converterText2 = 'Хочу придбати:';
const converterButtonName = 'Конвертувати валюту';
const saveResult = 'Зберегти результат';
const clearHistory = 'Очистити історію';
const converterText = 'Переважна діяльність банківської групи за останні чотири звітні квартали становить 50 і більше відсотків.';

export const cabinet = 'Особистий кабінет';
export const footerDescription = '04128, м.Київ, вул. Хрещатик, 19\n Ліцензія НБУ №156\n Ⓒ ПАТ ЧіпЧендж, 2019-2023';
export const phones = [{ number: '3773', title: 'Цілодобова підтримка', src: phone1, style: { width: '10', height: '16' } },
{ number: '8 800 111 22 33', title: 'Безкоштовно для дзвінків в межах України', src: phone2, style: { width: '16', height: '16' } }];
export const socials = [{ id: 0, src: soc1 }, { id: 1, src: soc2 }, { id: 2, src: soc3 }, { id: 3, src: soc4 }];

export const header = { title, menuItems };
export const banner = { title, bannerText, converterTitle };
export const footer = { title, footerDescription, menuItems };
export const converter = { converterTitle, converterText, converterButtonName };
export const calculation = { converterTitle, converterText1, converterText2, saveResult }
export const history = { historyTitle, clearHistory }
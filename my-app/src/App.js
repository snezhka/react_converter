import './App.css';
import { Header } from './header/Header.js';
import { Banner } from './banner/Banner.js';
import { Footer } from './footer/Footer.js';
import phone1 from './footer/phone/phone1.png';
import phone2 from './footer/phone/phone2.png';
import soc1 from './footer/social/1.png';
import soc2 from './footer/social/2.png';
import soc3 from './footer/social/3.png';
import soc4 from './footer/social/4.png';

export default function App() {
  const description = "04128, м.Київ, вул. Хрещатик, 19\n Ліцензія НБУ №156\n Ⓒ ПАТ ЧіпЧендж, 2019-2023";
  const menu_items = ["Послуги", "Конвертер валют", "Контакти", "Задати питання"];
  const phones = [{ number: "3773", title: "Цілодобова підтримка", src: phone1, style: { width: "10", height: "16" } },
  { number: "8 800 111 22 33", title: "Безкоштовно для дзвінків в межах України", src: phone2, style: { width: "16", height: "16" } }];
  const socials = [{ src: soc1 }, { src: soc2 }, { src: soc3 }, { src: soc4 }];
  return (
    <div className="App">
      <Header title={"Чіп Чендж"} menu_items={menu_items} />
      <Banner header={"Чіп Чендж"} text={"Обмінник валют - навчальний"} button_name={"Конвертер валют"} />
      <Footer title={"Чіп Чендж"} description={description} menu_items={menu_items} phones={phones} socials={socials} />
    </div>
  );
}


import './App.css';
import { Header } from './header/Header.js';
import { Banner } from './banner/Banner.js';
import { Footer } from './footer/Footer.js';

export default function App() {
  return (
    <div>
      <Header />
      <Banner show={true} />
      <Footer />
    </div>
  );
}


import './App.scss';
import { Header } from './header/Header.js';
import { Banner } from './banner/Banner.js';
import { Converter } from './converter/Converter.js';
import { Footer } from './footer/Footer.js';
import { useState } from 'react';

export default function App() {
  const [showConverter, setShowConverter] = useState(false);
  return (
    <div>
      <Header />
      {showConverter ? <Converter /> : <Banner show={[showConverter, setShowConverter]} />}
      <Footer />
    </div>
  );
}


import './App.scss';
import { Header } from './header/Header.js';
import { Banner } from './banner/Banner.js';
import { Converter } from './converter/Converter.js';
import { Calculation } from './calculation/Calculation.js';
import { Footer } from './footer/Footer.js';
import { useState } from 'react';

export default function App() {
  const [showCalculation, setShowCalculation] = useState(false);
  return (
    <div>
      <Header />
      <Banner />
      {showCalculation ? <Calculation /> : <Converter show={[showCalculation, setShowCalculation]} />}
      <Footer />
    </div>
  );
}


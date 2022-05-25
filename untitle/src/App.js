import React, { useEffect, useState, onChange } from 'react';

// css
import './css/App.css';
import './css/Header.css';
import './css/Carousel.css';
import './css/Wrap.css';
import './css/Main.css';
import './css/Footer.css';

// components
import Header from './components/Header.js';
import Carousel from './components/Carousel.js';
import Wrap from './components/Wrap.js';
import Main from './contents/Main.js';
import Footer from './components/Footer.js';

//images
import logo from './images/odinLogo.png';
import slideBox1 from './images/backgroundImage_01.jpg';
import slideBox2 from './images/backgroundImage_02.jpg';
import footerLogo1 from './images/kakaogamesLogo.png';
import footerLogo2 from './images/LionheartLogo.png';


function App() {
  
  return (
    <div className="App">
      <div className="main">
        {/* 상단 메뉴바 */}
        <Header logo={logo} />
        {/* 캐러셀 이미지 */}
        <Carousel slideBox1={slideBox1} slideBox2={slideBox2} />
        {/* wrap 컨텐츠 */}
        <Wrap />
        {/* 메인 컨텐츠(업데이트, 비디오) */}
        <Main />
        {/* footer */}
        <Footer footerLogo1={footerLogo1} footerLogo2={footerLogo2} />
      </div>
    </div>
  );
}

export default App;

import React, { useEffect } from 'react';
import { useState, onChange } from 'react';

// components
// import './components/Header.js'

// css
import './App.css';

//images
import logo from './images/odinLogo.png';
import slideBox1 from './images/backgroundImage_01.jpg';
import slideBox2 from './images/backgroundImage_02.jpg';

function App() {

  let [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = 1;

  const nextSlide = () => {
    // if(currentSlide >= totalSlides){
    //   setCurrentSlide(0);
    // } else {
    //   setCurrentSlide(currentSlide + 1);
    // }
    document.querySelector('.slideBoxes').classList.add('moveSoft');
    document.querySelector('.slideBoxes').style.transform = 'translateX(-100vw)';
  }
  const prevSlide = () => {
    // if (currentSlide == 0) {
    //   setCurrentSlide(totalSlides);
    // } else {
    //   setCurrentSlide(currentSlide - 1);
    // }
    document.querySelector('.slideBoxes').classList.add('moveSoft');
    document.querySelector('.slideBoxes').style.transform = 'translateX(0vw)';
  }
 
  // const onChange = (e) => {
  //   setCurrentSlide(e.target.value);
  //   console.log(currentSlide)
  // }
  
  return (
    <div className="App">
      <div className="main">
        {/* header component */}
        <div className="mainHeader">
          <div className="mainHeaderLogo">
            <a href="#"><img src={logo} alt="logo" /></a>
          </div>
          <div className="mainHeaderMenu">
            <span><a href="#">공식카페</a></span>
            <span><a href="#">가이드</a></span>
            <span><a href="#">게임소개</a></span>
            <span><a href="#">자료실</a></span>
            <span><a href="#">고객센터</a></span>
          </div>
          <div className="mainHeaderButton">
            <span>GAME START</span>
          </div>
        </div>
        {/* 캐러셀 */}
        <div className="mainBody">
          <div className="slideContainer">
            <div className="slideBoxes">
              <div className="slideBox">
                <img className="slidBox1" onChange={onChange} src={slideBox1} alt="slideImage01" />
              </div>
              <div className="slideBox">
                <img className="slidBox2" onChange={onChange} src={slideBox2} alt="slideImage02" />
              </div>
            </div>
            <div className="slideBoxButton">
              <button onClick={()=>{}}>업데이트와 이벤트 안내</button>
              <button>공식 유튜브 바로가기</button>
              <button onClick={prevSlide}>←</button>
              <button onClick={nextSlide}>→</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

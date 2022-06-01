import React, {onChange, useState} from 'react'

function Carousel(props) {

    let [currentSlide, setCurrentSlide] = useState(0);
     
    const nextSlide = () => {
        document.querySelector('.slideBoxes').classList.add('moveSoft');
        document.querySelector('.slideBoxes').style.transform = 'translateX(-100vw)';
        setCurrentSlide(currentSlide+1);
        if (currentSlide == 1) {
            setCurrentSlide(0);
            prevSlide();
        } 
    }
    
    const prevSlide = () => {
        document.querySelector('.slideBoxes').classList.add('moveSoft');
        document.querySelector('.slideBoxes').style.transform = 'translateX(0vw)';
        if (currentSlide == 0) {
            nextSlide();
        } 
    }
    return (
        
        <div className="slideContainer">
            <div className="slideBoxes" onChange={onChange}>
                <div className="slideBox">
                    <img className="slidBox1" src={props.slideBox1} alt="slideImage01" />
                </div>
                <div className="slideBox">
                    <img className="slidBox2" src={props.slideBox2} alt="slideImage02" />
                </div>
            </div>
            <div className="slideBoxButton">
                <button>업데이트와 이벤트 안내</button>
                <button>공식 유튜브 바로가기  </button>
                <button onClick={prevSlide}>←</button>
                <button onClick={nextSlide}>→</button>
            </div>
        </div>
    )
}

export default Carousel;
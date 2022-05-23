function Carousel(props) {
     const nextSlide = () => {
    document.querySelector('.slideBoxes').classList.add('moveSoft');
    document.querySelector('.slideBoxes').style.transform = 'translateX(-100vw)';
     }
    const prevSlide = () => {
    document.querySelector('.slideBoxes').classList.add('moveSoft');
    document.querySelector('.slideBoxes').style.transform = 'translateX(0vw)';
  }
    return (
        
        <div className="slideContainer">
            <div className="slideBoxes">
                <div className="slideBox">
                    <img className="slidBox1" onChange={props.onChange} src={props.slideBox1} alt="slideImage01" />
                </div>
                <div className="slideBox">
                    <img className="slidBox2" onChange={props.onChange} src={props.slideBox2} alt="slideImage02" />
                </div>
            </div>
            <div className="slideBoxButton">
                <button>업데이트와 이벤트 안내</button>
                <button>공식 유튜브 바로가기</button>
                <button onClick={prevSlide}>←</button>
                <button onClick={nextSlide}>→</button>
            </div>
        </div>
    )
}

export default Carousel;
function Main() {
    return (      
        <div className="mainContents">
          {/* Update */}
          <div className="gameUpdate">
            <div className="gameUpateTitle">
              <h2>새소식</h2>
              <span>+</span>
            </div>
            <div className="gameUpdateText"> 
              <div className="gameUpdateTexts"><span>[업데이트]</span> 5/18(수) 업데이트 상세 내역</div>
              <div className="gameUpdateTexts"><span>[공지사항]</span> 콘텐츠 업데이트 지연에 사과드립니다.</div>
              <div className="gameUpdateTexts"><span>[공지사항]</span> 런처 관련 오류 메시지별 해결 방법 안내</div>
              <div className="gameUpdateTexts"><span>[공지사항]</span> 게임 접속 종료 및 계정 보호조치 기능 안내</div>
            </div>
          </div>
          {/* Video */}
           <div className="gameVideo">
            <div className="gameVideoTitle">
              <h2>추천영상</h2>
              <span>+</span>
            </div>
            <div className="gameVideoYoutube">
              <div className="play1">
                <iframe width="400" height="305" src="https://www.youtube.com/embed/p0CgYOVKgkA?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div className="play2">
                <iframe width="250" height="150" src="https://www.youtube.com/embed/SoQt3I7Va3w?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="250" height="150" src="https://www.youtube.com/embed/eFGeiBE4-_U?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Main;
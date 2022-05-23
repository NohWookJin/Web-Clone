function Header(props) {
    return (
        <div className="mainHeader">
          <div className="mainHeaderLogo">
            <a href="#"><img src={props.logo} alt="logo" /></a>
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
    )
}

export default Header;
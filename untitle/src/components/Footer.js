import React from 'react';
import { FaRegCopyright } from 'react-icons/fa';

function Footer(props) {
    return (
        <div className="footer">
            <div className="footerLogo">
                <img src={props.footerLogo1} alt="footerLogo1" />
                <img src={props.footerLogo2} alt="footerLogo2" />
            </div>
            <div className="footerRules">
                <a href="#"><span>서비스 약관/정책</span></a>
                <a href="#"><span>개인정보처리방침</span></a>
                <a href="#"><span>청소년보호정책</span></a>
                <a href="#"><span>오딘 운영정책</span></a>
                <a href="#"><span>오딘PC게임이용정책</span></a>
                <a href="#"><span>게임이용등급</span></a>
            </div>
            <div className="footerETC">
                <span>(주)카카오게임즈 대표이사 : 조계현 경기도 성남시 분당구 판교역로 152 알파돔타워 14층</span>
                <span>사업자등록번호: 144-81-18454 통신판매업 신고번호 제 2015-경기성남-0971 <a href="#" className="underbar">사업자 정보 확인</a></span>
                <span>대표번호: 1566-8834 ㅣ Fax: 031-8017-8181 ㅣ E-mail: contact@kakaogames.com(본 메일은 수신 전용입니다)</span>
            </div>
            <div className="footerCopyright">
                <div>
                    <FaRegCopyright />
                    <span>2021 Kakao Games Corp. & LIONHEART STUDIO. All Rights Reserved.</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;
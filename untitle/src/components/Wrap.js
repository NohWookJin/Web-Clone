import React from 'react';
import { FaHeadset, FaShieldAlt, FaBook, FaReceipt, FaYoutube, FaFacebookF } from 'react-icons/fa';

function Wrap() {
    return (
        <div className="wrapContainer">
            <div className="wrap">
                <a href="#"><FaHeadset /><span className="wrapText">고객센터</span></a>
                <a href="#"><FaShieldAlt /><span className="wrapText">보안센터</span></a>
                <a href="#"><FaBook /><span className="wrapText">가이드</span></a>
                <a href="#"><FaReceipt /><span className="wrapText">쿠폰등록</span></a>
            </div>
            <div className="wrap2">
                <a href="#"><FaYoutube /></a>
                <a href="#"><FaFacebookF /></a>
            </div>
        </div>
    )
}

        
export default Wrap;
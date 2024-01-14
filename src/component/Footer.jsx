import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="foot-bg">
      <div className="container">
        <div className="footer-addr">
          <h3 className="foot-logo">
            {" "}
            <span>로고</span>
          </h3>
          <address>
            서울 서초구 서초동 1153동 13654 성암빌딩 10층 1005호
          </address>
          <div className="copy">&copy; 2023 ALL RIGHT hong</div>
        </div>
        <div className="footer-menu">
          <ul>
            <li>
              <Link to="">CS INFO</Link>
              <ul>
                <li>
                평일  &nbsp;&nbsp; 09:00 - 06:00
                </li>
                <li>
                주말  &nbsp;&nbsp; 10:00 - 15:00
                </li>
                <li>
                점심  &nbsp;&nbsp; 12:30 - 13:00
                </li>
             
              </ul>
            </li>
            <li>
              <Link to="">BANK INFO</Link>
              <ul>
                <li>
                  <Link to="">국민은행</Link>
                </li>
                <li>
                  <Link to="">신한은행</Link>
                </li>
                <li>
                  <Link to="">농협은행</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="">ODER TRACKING</Link>
              <ul>
                <li>
                  CJ 대한통운
                </li>
               
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

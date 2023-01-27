import React from "react";
import { Col, Row } from "reactstrap";
import {
  FaTelegramPlane,
  FaMap,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import Card from "../common/Card";
import Image from "next/image";
import { VitsellLogo } from "../icons/icons";
const Footer = () => {
  return (
    <footer className="footer_section">
      <Row>
        <Col xs="12" sm="10">
          <Row>
            <Col className="d-none d-sm-block" sm="3">
              <article className="first">
                <div className="footer_logo">
                  <Image
                  src="/logo1.png"
                  alt="vitsell"
                  width={112}
                  height={112}
                  />
                </div>
                <div>
                  <span className="title">ویتسل</span>
                </div>
                <div>
                  <p className="intro">
                    صرافی هفت ارز پلتفرم ایمن و سریع برای انجام معاملات ارز
                    دیجیتال در بستری مطمئن
                  </p>
                </div>
              </article>
            </Col>
            <Col xs="6" sm="3">
              <article className="second">
                <h4>با ویتسل</h4>
                <ul>
                  <li>درباره ما</li>
                  <li>تماس با ما</li>
                  <li>حریم خصوصی</li>
                  <li>شرایط بازگشت کالا</li>
                </ul>
              </article>
            </Col>
            <Col xs="6" sm="3">
              <article className="third">
                <h4>محصولات ویتسل</h4>
                <ul>
                  <li>کالای دیجیتال</li>
                  <li>سوپرمارکت</li>
                  <li>گوشی موبایل</li>
                  <li>ابزار الات</li>
                  <li>لوازم تحریر</li>
                </ul>
              </article>
            </Col>
            <Col xs="12" sm="3">
              <article className="fourth">
                <h4>ارتباط با ویتسل</h4>
                <ul>
                  <li>
                    <FaTelegramPlane />
                    ٰvitdell@gmail.com
                  </li>
                  <li>
                    <BsTelephone />
                    ۰۸۴۷۷۴۷۳۲۲
                  </li>
                  <li>
                    <FaMap />
                    خیابان ولی عصرنرسیده به سینما آفریقا
                  </li>
                  <li>
                    <span>
                      <FaWhatsapp />
                    </span>
                    <span>
                      <FaTelegramPlane />
                    </span>
                    <span>
                      <FaInstagram />
                    </span>
                  </li>
                </ul>
              </article>
            </Col>
          </Row>
        </Col>
        <Col xs="12" sm="2">
          <aside className="footer_aside">
            <div className="certificat certificat_one">
              <div></div>
            </div>
            <div className="certificat certificat_two">
              <div></div>
            </div>
            <div className="certificat certificat_third d-block d-sm-none">
              <div></div>
            </div>
            <div className="certificat certificat_fourth d-block d-sm-none">
              <div></div>
            </div>
          </aside>
        </Col>
        <Col xs="12">
          <div className="footer_copyRight">
            <div></div>
            <p>کلیه حقوق متعلق به شرکت ویستا است. </p>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;

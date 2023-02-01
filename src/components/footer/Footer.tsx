import { Col, Row } from "reactstrap";
import {
  FaTelegramPlane,
  FaMap,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";

import Image from "next/image";
import Link from "next/link";
import Button from "../common/button/Button";
import { InstaIcon, MapIcon, PhoneIcon, TelegramIcon, WhatsAppIcon } from "../icons/icons";

const Footer = () => {
  return (
    <footer className="footer_section pt-lg-5">
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
                  <Link href="/aboutus">
                    <li>درباره ما</li>
                  </Link>
                  <Link href="/contactus">
                    <li>تماس با ما</li>
                  </Link>
                  <Link href="/privacy">
                    <li>حریم خصوصی</li>
                  </Link>
                  <Link href="/">
                    <li>شرایط بازگشت کالا</li>
                  </Link>
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
                    <span className="telegram"><TelegramIcon/></span>
                    ٰvitdell@gmail.com
                  </li>
                  <li>
                    <PhoneIcon/>
                    ۰۸۴۷۷۴۷۳۲۲
                  </li>
                  <li>
                    <MapIcon/>
                    خیابان ولی عصرنرسیده به سینما آفریقا
                  </li>
                  <li>
                    <span>
                      <InstaIcon />
                    </span>
                    <span>
                      <TelegramIcon/>
                    </span>
                    <span>
                      <WhatsAppIcon/>
                    </span>
                  </li>
                </ul>
              </article>
            </Col>
          </Row>
          <Row className="d-none d-sm-block">
            <Col>
              <section className="newsletter d-flex justify-content-between align-items-center gap-4">
                <div className="w-100">
                  <p className="fs-12 fw-400 text-gray p-0 m-0">
                    برای اطلاع از اخرین تخفیف های ما با ما در ارتباط باشید.
                  </p>
                </div>
                <form className="position-relative w-100">
                  <input
                    placeholder="آدرس ایمیل"
                    className="w-100 h-40 fs-12 bg-gray"
                  />
                  <Button
                    className="position-absolute fs-14 top-0 h-38 round-24 py-2 px-3 text-white left-0  brand-bg"
                    type="submit"
                  >
                    دریافت خبرنامه
                  </Button>
                </form>
              </section>
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

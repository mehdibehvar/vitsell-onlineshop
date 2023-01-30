import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiChevronDown } from "react-icons/fi";
import AskingForm from "../../components/AskingForm";
import Button from "../../components/common/button/Button";
import FaqSlider from "../../components/common/slider/FaqSlider";
import Footer from "../../components/footer/Footer";
import { QuestionIcon } from "../../components/icons/icons";
import Navbar from "../../components/navbar/Navbar";
const qData = [
  { title: "روند ثبت سفارش", link: "#" },
  { title: "پیگیری ارسال سفارش", link: "#" },
  { title: "بازگرداندن کالا", link: "#" },
  { title: "کد تخفیف و کارت هدیه", link: "#" },
  { title: "ارسال توسط فروشنده", link: "#" },
  { title: "ورود و ثبت نام", link: "/login" },
];
const FaqPage = () => {
  return (
    <section className="faq_layout  d-flex flex-column align-items-center ">
      <section className="faq w-100">
        <Navbar />
        <main className="main_section mt-3 mb-2 w-100">
          <section className="questions_section bg-main d-flex  align-items-stretch ">
            <FaqSlider qData={qData}/>
            <div className="right_section d-none d-sm-flex  flex-column justify-content-start">
              <h4 className="fs-14 fw-400 brand-text m-0">
                سوالات پر تکرار شما
              </h4>
              {qData.map((item, index) => (
                <div key={index} className="text-gray-2">
                  <Link className="text-gray fs-14" href={item.link}>
                    {item.title}
                  </Link>
                </div>
              ))}
              <div className="w-100 d-flex justify-content-start">
                <Button
                  type="button"
                  className="ask_q_button d-flex justify-content-center align-items-center"
                >
                  <QuestionIcon />
                  <span className="brand-text fs-14 fw-bold">
                    سوال دیگری دارید؟
                  </span>
                </Button>
              </div>
            </div>
            <div className="left_section d-flex flex-column align-items-stretch w-100">
              {[1, 2, 3, 4, 5].map((item, index) => (
                <div
                  key={index}
                  className="accordion p-2 d-flex justify-content-between align-items-center"
                >
                  <div className="w-100 d-flex align-items-center">
                    <span className="icon_wrapper d-flex align-items-center">
                      <QuestionIcon />
                    </span>
                    <span className="text-gray-2 fs-14 fw-bold">
                      هزینه ی ارسال در نینا چگونه محاسبه میشود؟...
                    </span>
                  </div>
                  <span>
                    <FiChevronDown />
                  </span>
                </div>
              ))}
            </div>
          </section>
          <section className="ask_question_section mt-3 position-relative d-none d-sm-flex align-items-center justify-content-between">
            <AskingForm />

            <div className="faq_dashed_circle d-none d-sm-flex"></div>
            <div className="inner"></div>
            <div className="first_circle"></div>
          <div className="d-flex justify-content-end align-items-center h-100 w-100">
             <div className="image_wrapper position-relative d-flex justify-content-end">
              <Image
                src="/assets/images/3d-speech-bubbles-with-question-marks 2.png"
                alt="vitsell-login"
                width={460}
                height={283}
              />
            </div>
       </div>
          </section>
        </main>
      </section>
      <Footer />
    </section>
  );
};

export default FaqPage;

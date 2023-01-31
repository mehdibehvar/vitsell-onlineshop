import Image from "next/image";
import React from "react";

import Contact from "../../components/Contact";
import Footer from "../../components/footer/Footer";
import {
    InstaIcon,
    LocationIcon,
  SmsIcon,
  TelegramIcon,
  TPhoneIcon,
  WhatsAppIcon,
} from "../../components/icons/icons";
import Navbar from "../../components/navbar/Navbar";

const ContactUs = () => {
  return (
<>
<section className="contact_us_layout  d-flex flex-column align-items-center ">
      <section className="contact_us w-100">
        <Navbar />
        <main className="main_section d-flex mt-4 mt-lg-3 mb-4 mb-lg-2">
          <div className="right d-flex flex-column gap-3">
            <div>
              <h4 className="fs-24 fw-bolder text-h-color mb-0">ارتباط با ویتسل</h4>
            </div>
            <div>
              <p className="fs-14 fw-400 text-black-3">
                فروشگاه اینترنتی نینا با بیش از یک دهه تجربه ، و با پایبندی به
                سه ویژگی مهم پرداخت در محل ، 3 روز ضمانت بازگشت کالا و ارسال به
                سراسر کشور در مدت کوتاهی به یکی از معتبرترین فروشگاه های
                اینترنتی کشور تبدیل شده است.در فروشگاه اینترنتی نینا می‌توانید
                همه آنچه مرتبط با مد و پوشاک است؛ از انواع تیشرت ، بافت ، کاپشن
                ، سویشرت ، تیشرت محرم ، ست ورزشی، شلوار اسلش ، ست های دو نفره ،
                کفش و کتونی تا اکسسوری ‌هایی مانند ست ساعت مچی و عینک آفتابی ،
                کیف پول ، زیور آلات ست ، گردنبند ، گوشواره و ... را با تخفیف
                ویژه پیدا کنید.
              </p>
            </div>
            <div className="phone_email d-flex gap-2 w-100">
              <Contact
                icon={<TPhoneIcon />}
                title="پشتیبانی"
                textdir="end"
                text="۰۹۳۷۳۷۲۹۴۸۸۴۹"
              />
              <Contact
                icon={<SmsIcon />}
                title="ایمیل"
                textdir="end"
                text="vitsel@gmail.com"
              />
            </div>
            <div className="adress">
            <Contact
                icon={<LocationIcon />}
                title="آدرس"
                textdir="start"
                text="تهران - خیابان ولیعصر - بالاتر از میدان ولیعصر - وکوچه عتیقی نژاد - پلاک 5"
              />
            </div>
            <div className="social d-flex ">
                   <div className="d-flex justify-content-start align-items-center">
                    <span className="icon_wrapper"><InstaIcon/></span>
                    <span className="fs-14 fw-bold text-black-3">Vitsell.io</span>
                    </div>
                   <div className="d-flex justify-content-start align-items-center">
                    <span className="icon_wrapper"><TelegramIcon/></span>
                    <span className="fs-14 fw-bold text-black-3">Vitsell.io</span>
                    </div>
                   <div className="d-flex justify-content-start align-items-center">
                    <span className="icon_wrapper"><WhatsAppIcon/></span>
                    <span className="fs-14 fw-bold text-black-3">۰۹۳۸۳۷۳۳۲۴</span>
                    </div>
            </div>
          </div>
          <div className="map_section d-flex justify-content-center align-items-center">
            <div className="map_wrapper position-relative">
                <Image 
                       src="/assets/images/map.png"
                       alt="map"
                       fill
                />
            </div>
          </div>
        </main>
      </section>
      <Footer />
    </section>
</>
  );
};

export default ContactUs;

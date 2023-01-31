import Image from "next/image";
import React from "react";
import AboutusDashed from "../../components/common/aboutusDashed";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
const privacyData = [
  {
    text: " حریم خصوصی کاربر برای ویتسل بسیار مهم است. در ویتسل چند نکته مهم در این مورد وجود دارد که در ادامه توضیح می‌دهیم. ویتسل از شما اطلاعات شخصی درخواست نمی‌کند مگر برای ارائه بهتر خدمات و بهتر شدن محصول. ما اطلاعات شخصی شما را در اختیار شرکت و یا شخص دیگری قرار نخواهیم داد مگر در موارد قانونی و یا در راستای توسعه محصولی که تولید کرده‌ایم.",
  },
  {
    text: " فروشگاه ساز ویتسل اطلاعاتی از قبیل نام کامل، نام فروشگاه، ایمیل، شماره تماس، آدرس، شماره شبا، تاریخ تولد، کد ملی را ذخیره می‌کند. ویتسل به این اطلاعات جهت احراز هویت و ارائه خدمات به شما نیاز دارد.",
  },
  {
    text: "فروشگاه ساز ویتسل تمامی اطلاعات مربوط به وب‌سایتی که ساخته شده را ذخیره می‌کند. همچنین اطلاعاتی مانند آخرین ورود به پنل مدیریت، نوع مرورگر و دستگاهی که با استفاده از آن وارد مدیریت فروشگاه شده‌اید را بررسی می‌کنیم.",
  },
  {
    text: "ویتسل اطلاعات مربوط به مشتری‌های هر فروشگاه را هنگام عضویت و یا خرید ذخیره ",
  },
  {
    text: " حریم خصوصی کاربر برای ویتسل بسیار مهم است. در ویتسل چند نکته مهم در این مورد وجود دارد که در ادامه توضیح می‌دهیم. ویتسل از شما اطلاعات شخصی درخواست نمی‌کند مگر برای ارائه بهتر خدمات و بهتر شدن محصول. ما اطلاعات شخصی شما را در اختیار شرکت و یا شخص دیگری قرار نخواهیم داد مگر در موارد قانونی و یا در راستای توسعه محصولی که تولید کرده‌ایم.",
  },
  {
    text: " فروشگاه ساز ویتسل اطلاعاتی از قبیل نام کامل، نام فروشگاه، ایمیل، شماره تماس، آدرس، شماره شبا، تاریخ تولد، کد ملی را ذخیره می‌کند. ویتسل به این اطلاعات جهت احراز هویت و ارائه خدمات به شما نیاز دارد.",
  },
  {
    text: " فروشگاه ساز ویتسل تمامی اطلاعات مربوط به وب‌سایتی که ساخته شده را ذخیره می‌کند. همچنین اطلاعاتی مانند آخرین ورود به پنل مدیریت، نوع مرورگر و دستگاهی که با استفاده از آن وارد مدیریت فروشگاه شده‌اید را بررسی می‌کنیم.",
  },
  {
    text: "ویتسل اطلاعات مربوط به مشتری‌های هر فروشگاه را هنگام عضویت و یا خرید ذخیره می‌کند.",
  },
  {
    text: "ویتسل از این اطلاعات برای ارائه خدمات بهتر به کاربران و یا پیگیری مشکلاتی که برای خریداران ایجاد می‌شود استفاده می‌کند.",
  },
  {
    text: "فروشگاه ساز ویتسل نام کامل، ایمیل، شماره تماس، آدرس و کد پستی خریدار را ذخیره می‌کند. ما از این اطلاعات برای ارائه خدمات بهتر به صاحب فروشگاه و خریدار استفاده می‌کنیم. توجه داشته باشید که موارد فوق ثابت نیستند و ممکن است در هر زمان که لازم باشد تغییر، حذف و یا موارد جدیدی اضافه شود.",
  },
  {
    text:"در راستای بهبود عملکرد سرویس‌های ویتسل، بر اساس نیاز، احتمال استفاده از سرویس‌های بهبود تجربه کاربری، سرویس‌های آمارگیری و Event monitoring وجود دارد. لازم به تاکید است که از این اطلاعات فقط در جهت بهبود خدمات ویتسل استفاده خواهد شد.",
  },
];
const Privacy = () => {
  return (
<>
<section className="privacy_layout  d-flex flex-column align-items-center ">
      <section className="privacy w-100">
        <Navbar />
        <main className="main_section d-flex flex-column mt-4 mt-lg-3 mb-4 mb-lg-2 position-relative">
       <section className="top_section d-flex w-100">
       <div className="right w-100">
            <h6 className="fs-14 fw-400 text-h-color me-1">
              حریم خصوصی کاربران ویتسل
            </h6>
            <ul className="privacy_list d-flex flex-column gap-3 me-4 ">
              {privacyData.slice(0,5).map((item, index) => (
                <li className="w-100" key={index}>
                  <p className="fs-14 fw-400 text-black-3">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="left w-100 d-none d-sm-block">
            <AboutusDashed />
            <div className="image_wrapper d-none d-sm-flex  position-relative w-100 h-100  justify-content-end align-items-start">
              <Image
                src="/assets/images/concept-security.png"
                width={456}
                height={325}
                alt="vitsell-login"
              />
            </div>
          </div>
       </section>
       <section className="mt-lg-2">
       <ul className="privacy_list d-flex flex-column gap-3 me-4 ">
              {privacyData.slice(5,11).map((item, index) => (
                <li className="w-100" key={index}>
                  <p className="fs-14 fw-400 text-black-3">{item.text}</p>
                </li>
              ))}
            </ul>
       </section>
        </main>
      </section>
    </section>
     <section className="privacy_footer_wrapper">
     <Footer />
     </section>
</>
  );
};

export default Privacy;

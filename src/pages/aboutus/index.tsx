import Image from "next/image";
import AboutusDashed from "../../components/common/aboutusDashed";
import DashedCircle from "../../components/common/DashedCircle";
import SectionsHeader from "../../components/common/SectionsHeader";
import Footer from "../../components/footer/Footer";
import {
  BagCrossIcon,
  DiscountIcon,
  HeadphoneIcon,
  ShipIcon,
  ShopingCardIcon,
} from "../../components/icons/icons";
import Navbar from "../../components/navbar/Navbar";
const cardsData = [
  {
    src: "/assets/images/Discount.png",
    title: "پرداخت آسان",
  },
  {
    src: "/assets/images/suport.png",
    title: "پشتیبانی آنلاین",
  },
  {
    src: "/assets/images/revers.png",
    title: "برگشت کالا ",
  },
  {
    src: "/assets/images/simplebuy.png",
    title: " خرید آسان",
  },
  {
    src: "/assets/images/shiping.png",
    title: "ارسال سریع ",
  },
];
const AboutusIcons = {
  shiping: <ShipIcon />,
  bagcross: <BagCrossIcon />,
  headphone: <HeadphoneIcon />,
  payment: <DiscountIcon />,
  easybuy: <ShopingCardIcon/>,
};
const AboutUsData = [
  {
    icon: AboutusIcons.shiping,
    title: "ارسال سریع",
    text: "توسعه اینترنت روش‌های خرید ما را به کلی دگرگون کرده است. منافع موجود در خرید اینترنتی هر روز تعداد بیشتری از مردم را به تجربه آن و ایجاد تغییر در الگوهای متداول خرید ترغیب می‏‌کند. امروز دیگر افراد این روش خرید را بیشتر منطبق بر شرایط زندگی مدرن می‏‏‏‌بینند. ویژگی‏‏‏‌ها و طبیعت خرید اینترنتی با روحیات و نیازهای رو به رشد ما هماهنگ‏‏‌تر شده است. <br> همه سخت در حال تلاش برای پیشرفت‏‏‌های شخصی و جمعی خود هستیم. امروزه بهای اوقات فراغت ما با وجود مشغله‏‌های روزانه بسیار گرانبها‌تر شده است. همه ما برای این اوقات برنامه ریزی فشرده‏‌تری داریم. دیگر صرف زمان‌هایی نسبتا طولانی در فعالیت‏‌های نه‌چندان با اهمیت مانند خرید و سفرهای شهری برای بسیاری از انسان‌ها اولویت خود را از دست داده است.  هوشمندی انسان‌ها، آنها را مجاب می‏‌کند که با تغییر در الگوهای قدیمی و نا‏کارآمد زندگی، هوشمندانه‏‌تر و امروزی‏‌تر زندگی کنند.",
  },
  {
    icon: AboutusIcons.easybuy,
    title: "خرید آسان",
    text: "توسعه اینترنت روش‌های خرید ما را به کلی دگرگون کرده است. منافع موجود در خرید اینترنتی هر روز تعداد بیشتری از مردم را به تجربه آن و ایجاد تغییر در الگوهای متداول خرید ترغیب می‏‌کند. امروز دیگر افراد این روش خرید را بیشتر منطبق بر شرایط زندگی مدرن می‏‏‏‌بینند. ویژگی‏‏‏‌ها و طبیعت خرید اینترنتی با روحیات و نیازهای رو به رشد ما هماهنگ‏‏‌تر شده است.\r\n همه سخت در حال تلاش برای پیشرفت‏‏‌های شخصی و جمعی خود هستیم. امروزه بهای اوقات فراغت ما با وجود مشغله‏‌های روزانه بسیار گرانبها‌تر شده است. همه ما برای این اوقات برنامه ریزی فشرده‏‌تری داریم. دیگر صرف زمان‌هایی نسبتا طولانی در فعالیت‏‌های نه‌چندان با اهمیت مانند خرید و سفرهای شهری برای بسیاری از انسان‌ها اولویت خود را از دست داده است.  هوشمندی انسان‌ها، آنها را مجاب می‏‌کند که با تغییر در الگوهای قدیمی و نا‏کارآمد زندگی، هوشمندانه‏‌تر و امروزی‏‌تر زندگی کنند. ",
  },
  {
    icon: AboutusIcons.bagcross,
    title: "ضمانت برگشت کالا",
    text: "توسعه اینترنت روش‌های خرید ما را به کلی دگرگون کرده است. منافع موجود در خرید اینترنتی هر روز تعداد بیشتری از مردم را به تجربه آن و ایجاد تغییر در الگوهای متداول خرید ترغیب می‏‌کند. امروز دیگر افراد این روش خرید را بیشتر منطبق بر شرایط زندگی مدرن می‏‏‏‌بینند. ویژگی‏‏‏‌ها و طبیعت خرید اینترنتی با روحیات و نیازهای رو به رشد ما هماهنگ‏‏‌تر شده است.\r\n همه سخت در حال تلاش برای پیشرفت‏‏‌های شخصی و جمعی خود هستیم. امروزه بهای اوقات فراغت ما با وجود مشغله‏‌های روزانه بسیار گرانبها‌تر شده است. همه ما برای این اوقات برنامه ریزی فشرده‏‌تری داریم. دیگر صرف زمان‌هایی نسبتا طولانی در فعالیت‏‌های نه‌چندان با اهمیت مانند خرید و سفرهای شهری برای بسیاری از انسان‌ها اولویت خود را از دست داده است.  هوشمندی انسان‌ها، آنها را مجاب می‏‌کند که با تغییر در الگوهای قدیمی و نا‏کارآمد زندگی، هوشمندانه‏‌تر و امروزی‏‌تر زندگی کنند. ",
  },
  {
    icon: AboutusIcons.payment,
    title: "روش های پرداخت",
    text: "توسعه اینترنت روش‌های خرید ما را به کلی دگرگون کرده است. منافع موجود در خرید اینترنتی هر روز تعداد بیشتری از مردم را به تجربه آن و ایجاد تغییر در الگوهای متداول خرید ترغیب می‏‌کند. امروز دیگر افراد این روش خرید را بیشتر منطبق بر شرایط زندگی مدرن می‏‏‏‌بینند. ویژگی‏‏‏‌ها و طبیعت خرید اینترنتی با روحیات و نیازهای رو به رشد ما هماهنگ‏‏‌تر شده است.\r\n همه سخت در حال تلاش برای پیشرفت‏‏‌های شخصی و جمعی خود هستیم. امروزه بهای اوقات فراغت ما با وجود مشغله‏‌های روزانه بسیار گرانبها‌تر شده است. همه ما برای این اوقات برنامه ریزی فشرده‏‌تری داریم. دیگر صرف زمان‌هایی نسبتا طولانی در فعالیت‏‌های نه‌چندان با اهمیت مانند خرید و سفرهای شهری برای بسیاری از انسان‌ها اولویت خود را از دست داده است.  هوشمندی انسان‌ها، آنها را مجاب می‏‌کند که با تغییر در الگوهای قدیمی و نا‏کارآمد زندگی، هوشمندانه‏‌تر و امروزی‏‌تر زندگی کنند. ",
  },
  {
    icon: AboutusIcons.headphone,
    title: "پشتیبانی آنلاین",
    text: "توسعه اینترنت روش‌های خرید ما را به کلی دگرگون کرده است. منافع موجود در خرید اینترنتی هر روز تعداد بیشتری از مردم را به تجربه آن و ایجاد تغییر در الگوهای متداول خرید ترغیب می‏‌کند. امروز دیگر افراد این روش خرید را بیشتر منطبق بر شرایط زندگی مدرن می‏‏‏‌بینند. ویژگی‏‏‏‌ها و طبیعت خرید اینترنتی با روحیات و نیازهای رو به رشد ما هماهنگ‏‏‌تر شده است.\r\n همه سخت در حال تلاش برای پیشرفت‏‏‌های شخصی و جمعی خود هستیم. امروزه بهای اوقات فراغت ما با وجود مشغله‏‌های روزانه بسیار گرانبها‌تر شده است. همه ما برای این اوقات برنامه ریزی فشرده‏‌تری داریم. دیگر صرف زمان‌هایی نسبتا طولانی در فعالیت‏‌های نه‌چندان با اهمیت مانند خرید و سفرهای شهری برای بسیاری از انسان‌ها اولویت خود را از دست داده است.  هوشمندی انسان‌ها، آنها را مجاب می‏‌کند که با تغییر در الگوهای قدیمی و نا‏کارآمد زندگی، هوشمندانه‏‌تر و امروزی‏‌تر زندگی کنند. ",
  },
];
const AboutUs = () => {
  return (
    <>
      <section className="aboutUs_layout  d-flex flex-column align-items-center ">
        <section className=" about_us">
          <Navbar />
          <main className="bg-main main_section mt-3 mb-2">
            <section className="top_section">
              <div className="description">
                <h1 className="fs-24 text-h-color fw-bolder mb-3">
                  درباره ویتسل
                </h1>
                <p className="fs-14 fw-light text-gray-2">
                  توسعه اینترنت روش‌های خرید ما را به کلی دگرگون کرده است. منافع
                  موجود در خرید اینترنتی هر روز تعداد بیشتری از مردم را به تجربه
                  آن و ایجاد تغییر در الگوهای متداول خرید ترغیب می‏‌کند. امروز
                  دیگر افراد این روش خرید را بیشتر منطبق بر شرایط زندگی مدرن
                  می‏‏‏‌بینند. ویژگی‏‏‏‌ها و طبیعت خرید اینترنتی با روحیات و
                  نیازهای رو به رشد ما هماهنگ شده است.
                  <br />
                  <br />
                  همه سخت در حال تلاش برای پیشرفت‏‏‌های شخصی و جمعی خود هستیم.
                  امروزه بهای اوقات فراغت ما با وجود مشغله‏‌های روزانه بسیار
                  گرانبها‌تر شده است. همه ما برای این اوقات برنامه ریزی
                  فشرده‏‌تری داریم. دیگر صرف زمان‌هایی نسبتا طولانی در
                  فعالیت‏‌های نه‌چندان با اهمیت مانند خرید و سفرهای شهری برای
                  بسیاری از انسان‌ها اولویت خود را از دست داده است. هوشمندی
                  انسان‌ها، آنها را مجاب می‏‌کند که با تغییر در الگوهای قدیمی و
                  نا‏کارآمد زندگی، هوشمندانه‏‌تر و امروزی‏‌تر زندگی کنند.{" "}
                </p>
              </div>
            <div className="position-relative w-100 fixed_height">
              
            <div className="small_cards_wrapper d-flex flex-wrap ">
                {cardsData.map((item, index) => (
                  <div
                    key={index}
                    className="small_card d-flex flex-column align-items-center justify-content-center gap-2"
                  >
                    <div className="image_wrapper position-relative">
                      <Image src={`${item.src}`} fill alt="discount" />
                    </div>
                    <span className="fs-14 fw-bold text-black-3">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          
            </section>
            <AboutusDashed />
            <section className="section_two d-flex flex-column align-items-stretch">
              {AboutUsData.map((item, index) => (
                <div key={index}>
                  <SectionsHeader showMobIcon={true} icon={item.icon} title={item.title} />
                  <p className="text-gray-2 fs-14 mt-3">{item.text}</p>
                </div>
              ))}
            </section>
          </main>
 

        </section>
          <Footer />
      </section> 
    </>
  );
};

export default AboutUs;

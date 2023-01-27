import Button from "../common/button/Button";
import Price from "../common/Price";

import { AddIcon, BoxTickIcon, MagicStarIcon, ShipingIcon, ShopIcon, StarIcon, WarningIcon, WarrantyIcon } from "../icons/icons";

const PricingSidebar = () => {
  return (
    <aside className="pricing_sidebar d-none d-sm-block">
    <div className="pricing_card">
     <div className="store_info">
     <section className="top pb-3">
     <h5 className="mb-2">فروشگاه</h5>
     <div className="store">
         <div>
          <span><ShopIcon/></span>
          <span className="store_name me-1">گالری سپینود</span>
         </div>
         <div>
          <span>4.2</span>
          <span className="me-1"><StarIcon/></span>
         </div>
     </div>
     </section>
     <section className="warranty pb-3">
     <div className="store">
         <div>
          <span><WarrantyIcon/></span>
          <span className="store_name me-1"> ضمانت سلامت کالا</span>
         </div>
     </div>
     </section>
     <section className="available pb-3">
     <div>
         <div>
          <span><BoxTickIcon/></span>
          <span className="store_name me-1"> موجود در انبار</span>
         </div>
         <div className="shiping mt-2">
         <span><ShipingIcon/></span>
         <span className="me-2">ارسال تا حداکثر ۲۰ آذر</span>
         </div>
     </div>
     </section>
     </div>
     <div className="discount_price">
     <Price price={"۴,۳۴۳,۰۰۰"} percent={"۳۴٪ "} discount={"۴,۳۴۳,۰۰۰"}/>
     </div>
     <div className="addto_basket">
      <Button className="addto_basket_button" type="button">
        <span><AddIcon/></span>
        <span>افزودن به سبد خرید</span>
      </Button>
     </div>
    </div>
    <div className="warning">
      <span><WarningIcon/></span>
      <span>کالا پس از باز شدن بسته بندی، پس گرفته نمیشود</span>
    </div>
  </aside>
  )
}

export default PricingSidebar
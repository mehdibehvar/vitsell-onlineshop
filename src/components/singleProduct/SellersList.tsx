import Button from "../common/button/Button";
import { BagTickIcon, ShopIcon } from "../icons/icons";
const SellersList = () => {
  return (
    <ul>
    <li className="seller">
      <div className="d-flex align-items-center">
        <span><ShopIcon/></span>
        <span>دیبا تجارت کارمان</span>
      </div>
      <div className="d-flex align-items-center"><span><BagTickIcon/></span><span>۸۰٪ رضایت از کالا های فروشگاه</span></div>
      <div className="d-flex align-items-center"><span>۲۴۲,۸۵۹,۰۰۰</span><span>تومان</span></div>
      <div className="d-flex align-items-center justify-content-center"><Button type="button" className="seller_add_to_basket">
        <span>افزودن به سبد خرید</span>
        </Button></div>
    </li>
    <li className="seller">
      <div className="d-flex align-items-center">
        <span><ShopIcon/></span>
        <span>دیبا تجارت کارمان</span>
      </div>
      <div className="d-flex align-items-center"><span><BagTickIcon/></span><span>۸۰٪ رضایت از کالا های فروشگاه</span></div>
      <div className="d-flex align-items-center"><span>۲۴۲,۸۵۹,۰۰۰</span><span>تومان</span></div>
      <div className="d-flex align-items-center justify-content-center"><Button type="button" className="seller_add_to_basket">
        <span>افزودن به سبد خرید</span>
        </Button></div>
    </li>
    <li className="seller">
      <div className="d-flex align-items-center">
        <span><ShopIcon/></span>
        <span>دیبا تجارت کارمان</span>
      </div>
      <div className="d-flex align-items-center"><span><BagTickIcon/></span><span>۸۰٪ رضایت از کالا های فروشگاه</span></div>
      <div className="d-flex align-items-center"><span>۲۴۲,۸۵۹,۰۰۰</span><span>تومان</span></div>
      <div className="d-flex align-items-center justify-content-center"><Button type="button" className="seller_add_to_basket">
        <span>افزودن به سبد خرید</span>
        </Button></div>
    </li>
  </ul>
  )
}

export default SellersList
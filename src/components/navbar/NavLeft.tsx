import { BuyBasketIcon, LoginIcon} from "../icons/icons";
import Button from "../common/button/Button";
import { SlBasket } from 'react-icons/sl';
import SearchInput from "./SearchInput";
const NavLeft = () => {    
  return (
    <div className="left_section_cta">
      <SearchInput/>
      <span className="d-none d-sm-block">
        <span className="buy_basket">
          <BuyBasketIcon />
        </span>
      </span>

      <Button className="login_button d-none d-sm-block" type="button">
        ورود/ثبت نام
      </Button>
      <span className=" d-block d-sm-none">
        <LoginIcon />
      </span>
      <span className="d-block d-sm-none">
        <BuyBasketIcon />
      </span>
    </div>
  );
};

export default NavLeft;

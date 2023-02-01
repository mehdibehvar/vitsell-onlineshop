import { BuyBasketIcon, LoginIcon} from "../icons/icons";
import Button from "../common/button/Button";
import SearchInput from "./SearchInput";
import Link from "next/link";
const NavLeft = () => {    
  return (
    <div className="left_section_cta">
      <SearchInput/>
      <span className="d-none d-sm-block">
        <span className="buy_basket">
          <BuyBasketIcon />
        </span>
      </span>

     <Link href="/login" className="d-none d-sm-block">
     <Button className="login_button d-none d-sm-block" type="button">
        ورود/ثبت نام
      </Button>
     </Link>
     <span className="d-block d-sm-none p-2">
        <BuyBasketIcon />
      </span>
      <span className=" d-block d-sm-none p-2">
        <Link href="/login">
        <LoginIcon />

        </Link>
      </span>
   
    </div>
  );
};

export default NavLeft;

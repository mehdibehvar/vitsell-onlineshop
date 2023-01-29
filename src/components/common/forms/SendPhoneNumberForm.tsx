import Link from "next/link"
import Button from "../button/Button"
import Input from "../Input"


const SendPhoneNumberForm = () => {
  return (
       <form className="d-flex flex-column gap-3 ">
        <h3 className="title d-flex justify-content-center align-items-center mb-4 ">
          ورود
        </h3>
          <Input
            className="phone_number text-black-3"
            label="لطفا شماره موبایل خود را وارد کنید"
            placeholder="۰۹۳۹۲۹۵۴۴۸۵۸۳"
          />
          <Button
            className="login_form_button  text-white fs-14 d-flex justify-content-center align-items-center mt-3"
            type="submit"
          >
            ورود
          </Button>
          <div>
            <div className="fs-12 text-black-3">
              با ثبت نام در سایت ویتسل قوانین و مقررات را میپذیرم
            </div>
            <button className="text-gray-2 mt-2 fs-12 d-none d-sm-block">
              ورود با رمز عبور
            </button>
          </div>
        </form>
  )
}

export default SendPhoneNumberForm
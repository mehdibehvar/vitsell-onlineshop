import Link from "next/link"
import { EyeIcon } from "../../icons/icons"
import Button from "../button/Button"
import Input from "../Input"


const WithPassForm = () => {
  return (
       <form className="d-flex flex-column gap-3 ">
        <h3 className="title d-flex justify-content-center align-items-center mb-4 ">
       رمز عبور
        </h3>
          <Input
            className="phone_number text-black-3"
            label="رمز عبور خود را وارد کنید"
            placeholder="*********"
            icon={<EyeIcon/>}
          />
          <Button
            className="login_form_button  text-white fs-14 d-flex justify-content-center align-items-center mt-3"
            type="submit"
          >
           ادامه
          </Button>
        </form>
  )
}

export default WithPassForm
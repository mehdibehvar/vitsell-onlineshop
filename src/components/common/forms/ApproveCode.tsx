import React, { useEffect, useRef, useState } from "react";
import Button from "../button/Button";
import OtpInput from 'react-otp-input';
const ApproveCode = () => {
  const [otp, setOtp] = useState<string | undefined>('');


  return (
    <form className="d-flex flex-column align-items-center  gap-3 ">
      <h3 className="title d-flex justify-content-center align-items-center mb-4 ">
        کد تایید
      </h3>
      <div className="w-100 position-relative d-flex flex-column gap-2">
        <span className="text-black-3 fs-12 fw-light w-100 ">
          کد ارسال شده به شماره ۰۹۷۴۸۳۴۷۸۵۳۹۳ را وارد کنید
        </span>

               <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={6}
      shouldAutoFocus={true}
      renderSeparator={<span>  </span>}
      containerStyle="d-flex justify-content-center gap-1"
      inputStyle="code_input"
      renderInput={(props) => <input  {...props} />}
    />
    

      </div>
      <div className="d-flex align-items-center justify-content-center">
        <span className="text-black-3 fs-16">1:34</span>
      </div>
      <div className="w-100">
        <Button
          className="login_form_button w-100 text-white fs-14 d-flex justify-content-center align-items-center"
          type="submit"
        >
          ادامه
        </Button>
        <button className="text-gray-2 fs-12 "> ویرایش شماره تلفن</button>
      </div>
    </form>
  );
};

export default ApproveCode;

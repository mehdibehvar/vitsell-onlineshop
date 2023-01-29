import React, { useEffect, useRef, useState } from "react";
import Button from "../button/Button";
import Input from "../Input";

const ApproveCode = () => {
const codeInputRef = useRef<HTMLInputElement>(null);
const [value, setValue] = useState<string|number>('');
useEffect(() => {
 if (value.toString().length>5) {
    codeInputRef.current?.blur();
    codeInputRef.current?.classList.add("move-right")
 }
}, [value])

  return (
    <form className="d-flex flex-column align-items-center  gap-3 ">
      <h3 className="title d-flex justify-content-center align-items-center mb-4 ">
        کد تایید
      </h3>
   <div className="w-100 position-relative d-flex flex-column gap-2">
    <span className="text-black-3 fs-12 fw-light w-100 ">کد ارسال شده به شماره ۰۹۷۴۸۳۴۷۸۵۳۹۳ را وارد کنید</span>
     <input onChange={(e)=>setValue(e.target.value)} ref={codeInputRef} className="input_approve_code text-black-3 position-absolute w-100"/>
      <div className="code_input_wrapper  d-flex justify-content-between gap-2">
        {" "}
        <span className="code_input"></span>
        <span className="code_input"></span>
        <span className="code_input"></span>
        <span className="code_input"></span>
        <span className="code_input"></span>
        <span className="code_input"></span>
      
      </div>
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

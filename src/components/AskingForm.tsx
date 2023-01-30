import React from 'react'
import Button from './common/button/Button'
import Input from './common/Input'

const AskingForm = () => {
  return (
    <div className='w-100'>
              <div className='w-100'>
                <h4 className="fw-bolder brand-text fs-18">
                  سوال دیگری دارید؟
                </h4>
                <p className="fs-14 fw-400 text-black-3">
                  درصورتی که سوال دیگری در رابطه با خدمات قابل ارائه دارید، لطفا
                  با ما در میان بگذارید.
                </p>
              </div>
              <form className="d-flex flex-column">
                <div className="d-flex justify-content-between gap-2">
                  <div>
                    <Input label="آدرس ایمیل" placeholder="" />
                  </div>
                  <div>
                    <Input label="شماره تلفن" placeholder="" />
                  </div>
                </div>
                <div>
                  <Input label="موضوع سوال" placeholder="مثلا: خرید موبایل" />
                </div>
                <div>
                  <label id="ask-text">متن سوال</label>
                  <textarea
                    className="ask_text w-100"
                    placeholder="اینجا بنویسید..."
                    id="ask-text"
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  className="ask_button d-flex align-items-center justify-content-center fs-12 fw-bold text-white"
                >
                  ارسال
                </Button>
              </form>
            </div>
  )
}

export default AskingForm
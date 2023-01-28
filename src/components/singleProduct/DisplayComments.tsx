import React from 'react'
import { FaChevronDown } from 'react-icons/fa'
import SectionsHeader from '../common/SectionsHeader'
import { CommentIcon } from '../icons/icons'
import Commentbox from './Commentbox'
import CommentsCarousel from './CommentsCarousel'
const commentsData=[
  {
    date:"۱۲ دی۱۴۰۱",
    text:"         یک گوشی بسیار خوب میان رده روبه بالا با پردازنده قدرتمند اختصاصی خود سامسونگ _دوربین های قوی و باکیفیت_صفحه با وضوح و کیفیت بالای سوپر آمولود_ضد آب بودن _حافظه وم بالا_و در آخر کیفیت بالا و برند معتبر سامسونگ که واقعا بااین امکانات وقیمت در بین دیگر رقبای سامسونگ یک سر و گردن بالاتر هست و ارزش خرید بالایی دارد",
    recommend:"yes",

  },
  {
    date:"۱۲ دی۱۴۰۱",
    text:"         یک گوشی بسیار خوب میان رده روبه بالا با پردازنده قدرتمند اختصاصی خود سامسونگ _دوربین های قوی و باکیفیت_صفحه با وضوح و کیفیت بالای سوپر آمولود_ضد آب بودن _حافظه وم بالا_و در آخر کیفیت بالا و برند معتبر سامسونگ که واقعا بااین امکانات وقیمت در بین دیگر رقبای سامسونگ یک سر و گردن بالاتر هست و ارزش خرید بالایی دارد",
    recommend:"no",

  },
  {
    date:"۱۲ دی۱۴۰۱",
    text:"         یک گوشی بسیار خوب میان رده روبه بالا با پردازنده قدرتمند اختصاصی خود سامسونگ _دوربین های قوی و باکیفیت_صفحه با وضوح و کیفیت بالای سوپر آمولود_ضد آب بودن _حافظه وم بالا_و در آخر کیفیت بالا و برند معتبر سامسونگ که واقعا بااین امکانات وقیمت در بین دیگر رقبای سامسونگ یک سر و گردن بالاتر هست و ارزش خرید بالایی دارد",
    recommend:"notsure",

  },
]
const DisplayComments = () => {
  return (
  <section>
    <div className='w-100'>
        <SectionsHeader showMobIcon={false} commentNumber={34} title="نظرات کاربران" icon={<CommentIcon/>}/>
        <ul className='comments_list mt-2 d-none d-sm-block w-100 p-0'>
          {commentsData.map((item,index)=> <Commentbox key={index} comment={item}/>)}
          <div className='d-flex justify-content-center align-items-center gap-2'>
            <span>مشاهده نظرات بیشتر</span>
            <span className='pt-2'><FaChevronDown/></span>
          </div>
        </ul>
        <div className='d-block d-sm-none'>
        <CommentsCarousel/>
        </div>
    </div>
  </section>
  )
}

export default DisplayComments
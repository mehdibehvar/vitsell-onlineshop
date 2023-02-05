import { ReactElement } from 'react'
import AdvertiseSection from '../components/AdvertiseSection'
import AmazingSection from '../components/amazingsection/AmazingSection'
import BannerSection from '../components/BannerSection'
import BannerSectionMiddle from '../components/BannerSectionMiddle'
import BestSelling from '../components/BestSelling'
import FavoriteSection from '../components/favoritesection/FavoriteSection'
import Layout from '../components/layouts/Layout'
import SliderSection from '../components/slider/Slider'
import VitselDiscountSection from '../components/VitselDiscountSection'
import VitsellBanner from '../components/VitsellBanner'

import { NextPageWithLayout } from './_app'
const Home: NextPageWithLayout= () => {
  return (
 <>


<SliderSection/>
<BannerSection/>
<VitselDiscountSection/>
<BannerSectionMiddle/>
<FavoriteSection/>
<AmazingSection/>
<BestSelling/>
<AdvertiseSection/>
<VitsellBanner/>
 </>

  )
}
Home.getLayout=function getLayout(page:ReactElement) {
  return (
     <Layout>
       {page}
     </Layout>
  )
}
export default Home;
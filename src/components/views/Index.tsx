import { ReactElement } from "react"
import Footer from "../layout/Footer"
import AboutUs from "../sections/AboutUs"
import Banner from "../sections/Banner"
import ChooseUs from "../sections/ChooseUs"
import Contact from "../sections/Contact"
import FullWidthBannerSeparator from "../sections/FullWidthBannerSeparator"
import Functions from "../sections/Functions"
import Goal from "../sections/Goal"
import Newsletter from "../sections/Newsletter"
import bannerImage from '/images/mom_with_laptop.webp';

const Index: React.FC = (): ReactElement => {
    return (
        <>
            <Banner />
            <Goal />
            <Functions />
            <FullWidthBannerSeparator
                text={
                    <h3 className={'text-[30px] md:text-[40px] lg:text-[46px] font-bold z-20 text-center'}>
                        A csoport ajtóra helyezett elavult
                        <span className={'bubble-white'}>cetlik</span><br />
                        <span className={'bubble-white'}>kiváltása</span>
                        a <span className={'circle-purple'}>technika</span> adta lehetőségekkel.
                    </h3>
                }
            />
            <AboutUs />
            <ChooseUs />
            <Newsletter />
            <Contact />
            <Footer />
        </>
    )
}

export default Index
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
            <AboutUs />
            <ChooseUs />
            <Newsletter />
            <FullWidthBannerSeparator
                image={bannerImage}
                text={<span>Intézd a gyermek óvodai ügyeit,<br />pár kattintással bárhonnan.</span>}
            />
            <Contact />
            <Footer />
        </>
    )
}

export default Index
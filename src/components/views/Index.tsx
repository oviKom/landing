import { ReactElement } from "react"
import AboutUs from "../sections/AboutUs"
import Banner from "../sections/Banner"
import ChooseUs from "../sections/ChooseUs"
import Functions from "../sections/Functions"
import Goal from "../sections/Goal"

const Index: React.FC = (): ReactElement => {
    return (
        <>
            <Banner />
            <Goal />
            <Functions />
            <AboutUs />
            <ChooseUs />
        </>
    )
}

export default Index
import { ReactElement, useEffect } from "react";
import Button from "../Button";
import { scrollToSection } from "../../utils/scrollToSection";
import MobileMenu from "../MobileMenu";
import Navbar from "./Navbar";
import { menuElements } from "../../conf/MenuElements";

const Header: React.FC = (): ReactElement => {
    return (
        <div className={'header relative default-padding'}>
            <div>LOGO</div>
            <Navbar menuElements={menuElements} className={'hidden lg:block'} ulClassName={'navbar'} />
            <div className={'hidden lg:flex flex-row gap-4'}>
                <Button text={'Írj nekünk'} onClick={() => scrollToSection(undefined, 'contact-section')} />
                <Button text={'Bejelentkezés'} variant={'white'} disabled={true} />
            </div>
            <MobileMenu />
        </div>
    );
};

export default Header;

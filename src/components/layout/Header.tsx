import { ReactElement, useEffect } from "react";
import Button from "../Button";
import { scrollToSection } from "../../utils/scrollToSection";

const Header: React.FC = (): ReactElement => {
    return (
        <div className={'header relative default-padding'}>
            <div>LOGO</div>
            <nav className={'navbar-wrapper'}>
                <ul className={'navbar'}>
                    <li className={'navbar-item'}>
                        <a href="#" onClick={(event) => scrollToSection(event, 'goal-section')}>Célunk</a>
                    </li>
                    <li className={'navbar-item'}>
                        <a href="#" onClick={(event) => scrollToSection(event, 'functions-section')}>Funkciók</a>
                    </li>
                    <li className={'navbar-item'}>
                        <a href="#" onClick={(event) => scrollToSection(event, 'about-us-section')}>Rólunk</a>
                    </li>
                    <li className={'navbar-item'}>
                        <a href="#" onClick={(event) => scrollToSection(event, 'contact-section')}>Kapcsolat</a>
                    </li>
                </ul>
            </nav>
            <div className={'flex flex-row gap-4'}>
                <Button text={'Írj nekünk'} onClick={() => scrollToSection(undefined, 'contact-section')} />
                <Button text={'Bejelentkezés'} variant={'white'} disabled={true} />
            </div>
        </div>
    );
};

export default Header;

import { ReactElement, useEffect } from "react";
import Button from "../Button";

const Header: React.FC = (): ReactElement => {
    const scrollToSection = (sectionId: string) => {
        const sectionElement: HTMLElement | null = document.getElementById(sectionId);

        if (sectionElement === null) return;

        setTimeout(() => {
            window.scrollTo({ top: sectionElement.offsetTop, behavior: 'smooth' })
        }, 1);
    }
    return (
        <div className={'header relative default-padding'}>
            <div>LOGO</div>
            <nav className={'navbar-wrapper'}>
                <ul className={'navbar'}>
                    <li className={'navbar-item'}>
                        <a href="#" onClick={() => scrollToSection('goal-section')}>Célunk</a>
                    </li>
                    <li className={'navbar-item'}>
                        <a href="#" onClick={() => scrollToSection('functions-section')}>Funkciók</a>
                    </li>
                    <li className={'navbar-item'}>
                        <a href="#" onClick={() => scrollToSection('about-us-section')}>Rólunk</a>
                    </li>
                    <li className={'navbar-item'}>
                        <a href="#" onClick={() => scrollToSection('contact-section')}>Kapcsolat</a>
                    </li>
                </ul>
            </nav>
            <div className={'flex flex-row gap-4'}>
                <Button text={'Írj nekünk'} />
                <Button text={'Bejelentkezés'} variant={'white'} />
            </div>
        </div>
    );
};

export default Header;

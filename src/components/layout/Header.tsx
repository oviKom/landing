import { ReactElement } from "react";
import Button from "../Button";

const Header: React.FC = (): ReactElement => {
    return (
        <div className={'header relative'}>
            <div>LOGO</div>
            <nav className={'navbar-wrapper'}>
                <ul className={'navbar'}>
                    <li className={'navbar-item'}><a href="#">Célunk</a></li>
                    <li className={'navbar-item'}><a href="#">Funkciók</a></li>
                    <li className={'navbar-item'}>Rólunk</li>
                    <li className={'navbar-item'}>Kapcsolat</li>
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

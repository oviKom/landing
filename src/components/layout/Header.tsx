import { ReactElement } from "react";

const Header: React.FC = (): ReactElement => {
    return (
        <div className={'bg-red-500 flex flex-row justify-between items-center header'}>
            <div>LOGO</div>
            <nav className={'navbar-wrapper'}>
                <ul className={'navbar'}>
                    <li className={'navbar-item'}><a href="#">Célunk</a></li>
                    <li className={'navbar-item'}><a href="#">Funkciók</a></li>
                    <li className={'navbar-item'}>Rólunk</li>
                    <li className={'navbar-item'}>Kapcsolat</li>
                </ul>
            </nav>
            <div>
                GOMBOK
            </div>
        </div>
    );
};

export default Header;

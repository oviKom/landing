import { ReactElement } from "react";
import { Outlet } from "react-router-dom";

const Header: React.FC = (): ReactElement => {
    return (
        <div>
            <div>LOGO</div>
            <nav>
                <ul>
                    <li className={'crumb'}><a href="#">Bikes</a></li>
                    <li className={'crumb'}><a href="#">BMX</a></li>
                    <li className={'crumb'}>Jump Bike 3000</li>
                </ul>
            </nav>
            <div>
                GOMBOk
            </div>
        </div>
    );
};

export default Header;

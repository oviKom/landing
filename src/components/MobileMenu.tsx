import React, { useState } from 'react'
import MenuSVG from './atoms/MenuSVG';
import CloseSVG from './atoms/CloseSVG';
import Navbar from './layout/Navbar';
import { menuElements } from '../conf/MenuElements';

const MobileMenu: React.FC = () => {
    const [menuStatus, setMenuStatus] = useState<boolean>(false);
    return (
        <div className={'block lg:hidden'}>
            <div className={`${menuStatus ? 'opacity-0' : 'opacity-100'}`} onClick={() => setMenuStatus(true)}>
                <MenuSVG size={40} />
            </div>
            <div className={`${menuStatus ? 'flex' : 'hidden'} relative mobile-navbar-wrapper`}>
                <CloseSVG svgClass={'absolute bottom-14 mx-auto w-full'} size={40} onClick={() => setMenuStatus(false)} />
                <Navbar menuElements={menuElements} className={'block lg:hidden mx-auto pt-12'} ulClassName={'mobile-navbar'} />
            </div>
        </div>

    )
}

export default MobileMenu;
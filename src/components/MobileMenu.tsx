import React, { useState } from 'react'
import MenuSVG from './atoms/MenuSVG';
import CloseSVG from './atoms/CloseSVG';
import Navbar from './layout/Navbar';
import { menuElements } from '../conf/MenuElements';
import Button from './Button';
import { scrollToSection } from '../utils/scrollToSection';

import { AnimatePresence, motion as m } from 'framer-motion';

const transition = {
    duration: 0.3,
    ease: [0.43, 0.13, 0.23, 0.96]
}

const MobileMenu: React.FC = () => {
    const [menuStatus, setMenuStatus] = useState<boolean>(false);
    return (
        <div className={'block lg:hidden'}>
            <m.div
                initial={{ x: 150 }}
                animate={menuStatus ? { x: 150 } : { x: 0 }}
                transition={transition}
                className={`${menuStatus ? 'opacity-0' : 'opacity-100'}`}
                onClick={() => setMenuStatus(true)}>
                <MenuSVG size={40} />
            </m.div>
            <AnimatePresence>
                {menuStatus && (
                    <m.div
                        initial={{ x: 500 }}
                        animate={{ x: 0 }}
                        exit={{ x: 500, opacity: 0 }}
                        transition={transition}
                        className={'flex flex-col relative mobile-navbar-wrapper'}>
                        <CloseSVG svgClass={'absolute bottom-14 mx-auto w-full'} size={40} onClick={() => setMenuStatus(false)} />
                        <Navbar menuElements={menuElements} className={'block lg:hidden mx-auto pt-12'} ulClassName={'mobile-navbar'} />

                        <div className={'inline-flex flex-col absolute bottom-40 gap-10 place-self-center'}>
                            <Button text={'Írj nekünk'} onClick={() => scrollToSection(undefined, 'contact-section')} />
                            <Button text={'Bejelentkezés'} variant={'white'} disabled={true} />
                        </div>
                    </m.div>
                )}
            </AnimatePresence>
        </div >

    )
}

export default MobileMenu;
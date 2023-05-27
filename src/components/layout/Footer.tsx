import React, { ReactElement } from 'react'
import { CONTACTS } from '../../conf/Contact';
import { scrollToSection } from '../../utils/scrollToSection';
import BackToTop from '../BackToTop';
import Button from '../Button';

const Footer: React.FC = (): ReactElement => {
    return (
        <section className={'relative w-full h-max bg-primary-darker'} id={'footer-section'}>
            <footer className={'default-padding py-[72px] flex flex-col xl:flex-row relative text-white'}>
                <div className={'w-full xl:w-[50%]'}>
                    <h2 className={'text-[35px] font-bold'}>Kapcsolat</h2>
                    <div className={'flex flex-wrap mt-5 font-semibold'}>
                        gyurinadhazy@gmail.com
                    </div>
                </div>
                <hr className={'xl:hidden w-[95%] mx-auto my-10'} />
                <div className={'w-full xl:w-[50%] pb-20'}>
                    <ul className={'text-[24px] flex flex-col sm:flex-row text-white font-bold gap-10 xl:gap-24 justify-center'}>
                        <li>
                            <a href="#" onClick={(event) => scrollToSection(event, 'functions-section')}>Funkciók</a>
                        </li>
                        <li>
                            <a href="#" onClick={(event) => scrollToSection(event, 'about-us-section')}>Csapat</a>
                        </li>
                        <li>
                            <a href="#" onClick={(event) => scrollToSection(event, 'choouse-us-section')}>Miért mi?</a>
                        </li>
                    </ul>
                </div>
            </footer>
            <div className={'bg-primary-darker text-card-purple font-bold text-[16px] h-20 flex items-center justify-center'}>
                © 2023
            </div>
            <BackToTop onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }) }} display={'fixed'} className={'absolute bottom-10 right-10'} />
        </section>
    )
}

export default Footer;
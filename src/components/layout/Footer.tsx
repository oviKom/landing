import React, { ReactElement } from 'react'
import { CONTACTS } from '../../conf/Contact';
import { scrollToSection } from '../../utils/scrollToSection';
import BackToTop from '../BackToTop';
import Button from '../Button';

const Footer: React.FC = (): ReactElement => {
    return (
        <section className={'relative w-full h-max bg-footer-gray'} id={'footer-section'}>
            <footer className={'default-padding py-[130px] flex flex-row relative'}>
                <div className={'w-[50%]'}>
                    <h2 className={'text-[35px] font-bold'}>Kapcsolat</h2>
                    <div className={'flex flex-wrap'}>
                        {CONTACTS.map(contact =>
                            <div className={'mt-3'}>
                                <span className={'text-[#A1A1A1] text-sm font-semibold'}>{contact.email}</span>
                                <div className={'flex flex-wrap mt-5'}>
                                    {contact.socials.map(social =>
                                        <Button
                                            text={social.icon}
                                            variant={'white'}
                                            size={'circle'}
                                            key={social.url}
                                            onClick={() => window.open(social.url, '_blank')}
                                            className={'!p-3 shadow-lg'}
                                        />
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className={'w-[50%]'}>
                    <ul className={'flex flex-row text-black font-bold gap-24'}>
                        <li>
                            <a href="#" onClick={(event) => scrollToSection(event, 'goal-section')}>Célunk</a>
                        </li>
                        <li>
                            <a href="#" onClick={(event) => scrollToSection(event, 'functions-section')}>Funkciók</a>
                        </li>
                        <li>
                            <a href="#" onClick={(event) => scrollToSection(event, 'about-us-section')}>Rólunk</a>
                        </li>
                    </ul>
                </div>
            </footer>
            <div className={'bg-primary text-card-purple font-bold text-[16px] h-20 flex items-center justify-center'}>
                © 2023
            </div>
            <BackToTop onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }) }} display={'fixed'} className={'absolute bottom-10 right-10'} />
        </section>
    )
}

export default Footer;
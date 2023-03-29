import React, { ReactElement } from 'react'
import { CONTACT } from '../../conf/Contact';

const Footer: React.FC = (): ReactElement => {
    return (
        <footer className={'default-padding bg-footer-gray py-[130px] flex flex-row'}>
            <div className={'w-[50%]'}>
                <h2 className={'text-[35px] font-bold'}>Kapcsolat</h2>
                <div className={''}>
                    {CONTACT.map(email =>
                        <div className={'text-[#A1A1A1] text-sm font-semibold mt-3'}>{email}</div>
                    )}
                </div>
            </div>
            <div className={'w-[50%]'}>asd</div>
        </footer>
    )
}

export default Footer;
import React, { ReactElement } from 'react'
import ContactSVG from '../atoms/ContactSVG'
import Button from '../Button'
import Input from '../Input'
import TextArea from '../Textarea'

import { motion as m } from 'framer-motion';

const Contact: React.FC = (): ReactElement => {
    return (
        <section className={'flex flex-col default-padding py-[72px] xl:py-[144px] bg-primary'} id={'contact-section'}>
            <m.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={'bg-white rounded-2xl flex flex-col xl:flex-row p-12 md:p-24'}
            >
                <m.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0, transition: { delay: 0.25 } }}
                    className={'w-[60%] mx-auto lg:w-[40%] mb-10 xl:mb-0'}>
                    <ContactSVG />
                </m.div>

                <m.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
                    className={'w-full xl:w-[50%] flex flex-col place-self-end ml-auto'}
                >
                    <h2 className={'text-[35px] font-bold pb-4'}>Írj nekünk!</h2>
                    <p className={'font-semibold mb-14'}>
                        További információkért bátran keress minket üzenetben és készséggel válaszolunk minden kérdésedre.
                    </p>
                    <div className={'flex flex-row justify-between gap-4'}>
                        <Input placeholder={'Neved'} className={'flex-shrink w-full'} />
                        <Input placeholder={'E-mail címed'} className={'flex-shrink w-full'} />
                    </div>
                    <div className={'flex flex-row justify-between mt-4'}>
                        <TextArea placeholder={'Írj üzenetet...'} className={'w-full'} />
                    </div>
                    <div className={'flex flex-row justify-between mt-4'}>
                        <Button text={'Küldés'} size={'full'} />
                    </div>
                </m.div>
            </m.div>
        </section>
    )
}

export default Contact;
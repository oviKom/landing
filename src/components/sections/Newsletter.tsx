import React, { ReactElement } from 'react'
import NewsletterSVG from '../atoms/NewsletterSVG'
import SendIconSVG from '../atoms/SendIconSVG'
import Button from '../Button'
import Input from '../Input'

import { motion as m } from 'framer-motion';

const Newsletter: React.FC = (): ReactElement => {
    return (
        <section className={'flex flex-col default-padding py-[72px] xl:py-[144px] bg-primary'}>
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
                    <NewsletterSVG />
                </m.div>

                <m.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
                    className={'w-full xl:w-[50%] flex flex-col place-self-end ml-auto'}>
                    <h2 className={'text-[35px] font-bold pb-4'}>Hírlevél</h2>
                    <p className={'text-custom-gray font-semibold mb-14'}>
                        Iratkozz fel hírlevelünkre és legyél naprakész arról, hogy mi történik a Tiny Ties házatáján.
                    </p>
                    <div className={'flex flex-row justify-between gap-4'}>
                        <Input placeholder={'E-mail címed'} className={'flex-shrink w-full'} />
                        <Button text={<SendIconSVG size={24} svgClass={'absolute bottom-[10px] left-[10px]'} />} size={'circle'} />
                    </div>
                </m.div>
            </m.div>
        </section>
    )
}

export default Newsletter;
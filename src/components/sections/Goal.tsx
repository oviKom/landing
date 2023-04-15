import React, { ReactElement, useRef } from 'react';
import goalImage_1 from '/images/goal_1.png'
import goalImage_2 from '/images/goal_2.png'
import goalImage_3 from '/images/goal_3.png'

import { motion as m } from 'framer-motion';

const Goal: React.FC = (): ReactElement => {
    const sectionRef = useRef<HTMLElement>(null);
    return (
        <section ref={sectionRef} id={'goal-section'} className={'mt-[calc(100vh_-_88px)] flex flex-col lg:flex-row py-[72px] default-padding justify-between gap-14'}>
            <m.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1, transition: { delay: 0.3 } }}
                className={'lg:w-[50%] xl:w-auto max-w-[435px] flex flex-col justify-center'}>
                <h2 className={'text-black text-[52px] font-bold mb-6'}>Célunk</h2>
                <div className={'text-custom-gray font-semibold'}>
                    Neque porro quisquam est, qui dolorem ipsum quia
                    dolor sit amet, consectetur, adipisci velit, sed quia non
                    numquam eius modi tempora incidunt ut labore et
                    dolore magnam aliquam quaerat voluptatem. Excepteur
                    sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim id est laborum.
                </div>
            </m.div>
            <div className={'grid grid-cols-2 gap-[24px] max-w-[528px] items-end flex-grow self-end'}>
                <m.img
                    initial={{ x: -100, opacity: 0, zIndex: -1 }}
                    whileInView={{ x: 0, opacity: 1, zIndex: 0, transition: { delay: 0.3 } }}
                    viewport={{ margin: '-20px' }}
                    src={goalImage_1}
                />
                <m.img
                    initial={{ x: 100, opacity: 0, zIndex: -1 }}
                    whileInView={{ x: 0, opacity: 1, zIndex: 0, transition: { delay: 0.3 } }}
                    viewport={{ margin: '-20px' }}
                    src={goalImage_2}
                />
                <m.img
                    initial={{ y: 100, opacity: 0, zIndex: -1 }}
                    whileInView={{ y: 0, opacity: 1, zIndex: 0, transition: { delay: 0.2 } }}
                    className={'col-span-2'} src={goalImage_3} />
            </div>
        </section >
    )
}

export default Goal;
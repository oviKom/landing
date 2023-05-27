import React, { ReactElement, useRef } from 'react';
import image_2 from '/images/image_2.jpg'
import image_3 from '/images/image_3.jpg'

import { motion as m } from 'framer-motion';
import { FlagIcon } from '@heroicons/react/24/outline';

const Goal: React.FC = (): ReactElement => {
    const sectionRef = useRef<HTMLElement>(null);
    return (
        <section ref={sectionRef} id={'goal-section'} className={'pt-[150px] flex flex-col default-padding'}>
            <m.div className={'w-full flex flex-col justify-center'}>
                <m.h2
                    initial={{ top: -50, opacity: 0 }}
                    whileInView={{ top: 0, opacity: 1, transition: { delay: 0.3 } }}
                    className={'text-white text-[52px] font-bold mb-6 mx-auto'}>
                    Célunk
                </m.h2>
            </m.div>
            <div className={'grid gap-20 lg:gap-0 lg:grid-cols-2 lg:grid-rows-2 gap-x-[100px] w-full mx-auto justify-center items-center mt-[200px]'}>

                <m.img
                    initial={{ left: -50, opacity: 0 }}
                    whileInView={{ left: 0, opacity: 1 }}
                    src={image_2} className={'self-start order-1 h-[300px] w-full object-cover rounded-100 lg:rounded-[200px]'}
                />

                <m.img
                    initial={{ left: -50, opacity: 0 }}
                    whileInView={{ left: 0, opacity: 1 }}
                    src={image_3} className={'self-end order-3 h-[300px] w-full object-cover rounded-100 lg:rounded-[200px]'}
                    style={{ objectPosition: '50% 50%' }}
                />

                <m.div
                    initial={{ right: -50, opacity: 0 }}
                    whileInView={{ right: 0, opacity: 1 }}
                    className={'place-self-end order-2 row-span-2 relative w-[400px] h-fit bg-white text-custom-gray px-[30px] pt-[45px] pb-[160px] text-[24px] rounded-[72px] rounded-tl-none'}
                >
                    <m.span
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1, transition: { delay: 0.3 } }}
                        className={'absolute -left-[30px] -top-[30px] bg-secondary text-black p-4 rounded-full'}
                    >
                        <FlagIcon width={26} height={26} />
                    </m.span>
                    A Buborékom applikációval egy átlátható és funkcionális kommunikációs csatorna kialakítása
                    a cél pedagógus és szülő, illetve pedagógus és vezetők között.
                    <br />
                    <br />
                    Szeretnénk ha egy olyan alkalmazás jönne létre, amely lehetővé teszi a gyorsabb óvodai/iskolai ügyintézést,
                    illetve a precízebb adminisztrációt.
                </m.div>
            </div>
        </section >
    )
}

export default Goal;
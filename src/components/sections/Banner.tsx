import React, { ReactElement } from 'react';
import bannerImage from '/images/banner.webp';

import { motion as m } from 'framer-motion';

const Banner: React.FC = (): ReactElement => {
    return (
        <section id={'banner-section'} className={'h-screen w-full absolute top-0 left-0'}>
            <img className={'w-full h-full object-cover absolute select-none'} src={bannerImage} />

            <div className={'relative w-full h-full flex flex-col justify-center items-center bg-black/50'}>
                <m.h1
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className={'text-[40px] md:text-[50px] lg:text-[60px] font-bold text-center text-white leading-[68px] mb-6'}
                >
                    Szülő és <br />pedagógus közös platformja.
                </m.h1>
                <m.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 1 }}
                    className={'text-white max-w-[400px] text-lg text-center'}>
                    A csoport ajtóra helyezett elavult cetlik kiváltása a technika adta lehetőségekkel.
                </m.div>
            </div>
        </section>
    )
}

export default Banner;
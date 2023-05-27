import React, { ReactElement } from 'react';
import image_1 from '/images/image_1.jpg';

import { motion as m } from 'framer-motion';

const Banner: React.FC = (): ReactElement => {
    return (
        <section id={'banner-section'} className={'w-full bg-primary default-padding'}>
            <div className={'relative h-full flex flex-col w-full max-w-[1080px] justify-center items-center mx-auto'}>
                <m.h1
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className={'text-[40px] md:text-[60px] lg:text-[70px] xl:text-[80px] font-semibold text-white leading-[90px] md:leading-[100px] lg:leading-[120px] xl:leading-[130px] mt-[150px] mb-6'}
                >
                    Intézd a gyermek<br />
                    óvodai ügyeit, <span className={'bubble-secondary'}>pár</span><br />
                    <span className={'bubble-secondary'}>kattintással</span> <span className={'circle-white'}>bárhonnan.</span>
                </m.h1>

                <m.div className={'mt-[350px] relative w-full'}>

                    <m.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ margin: '-150px', }}
                        className={'z-20 p-[50px] font-body font-bold absolute -top-[100px] lg:-top-[200px] bg-secondary rounded-100 rounded-br-none text-[20px] md:text-[30px] lg:text-[40px] xl:text-[50px] text-black'}>
                        Pedagógus <br />
                        & szülő közös<br />
                        platformja<br />
                    </m.div>

                    <m.img
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ margin: '-100px', }}
                        src={image_1}
                        className={'z-10 w-full h-auto rounded-100'}
                    />
                </m.div>
            </div>
        </section>
    )
}

export default Banner;
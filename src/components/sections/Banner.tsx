import React, { ReactElement } from 'react';
import bannerImage from '/images/banner.webp';

const Banner: React.FC = (): ReactElement => {
    return (
        <section id={'banner-section'} className={'h-screen w-full absolute top-0 left-0'}>
            <img className={'w-full h-full object-cover absolute select-none'} src={bannerImage} />

            <div className={'relative w-full h-full flex flex-col justify-center items-center bg-black/50'}>
                <h1 className={'text-[40px] md:text-[50px] lg:text-[60px] font-bold text-center text-white leading-[68px] mb-6'}>
                    Pedagógus és <br />szülő közös platformja.
                </h1>
                <div className={'text-white max-w-[400px] text-lg text-center'}>
                    A csoport ajtóra helyezett elavult cetlik kiváltása a technika adta lehetőségekkel.
                </div>
            </div>
        </section>
    )
}

export default Banner;
import { ReactElement } from "react"
import { TEAM } from "../../conf/Team"

import { motion as m } from "framer-motion";

const AboutUs: React.FC = (): ReactElement => {
    return (
        <>
            <section className={'flex flex-col pb-0 lg:pb-[72px] py-[72px] default-padding'} id='about-us-section'>
                <div className={'text-center flex flex-col justify-center items-center w-full'}>
                    <m.h2
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className={'section-title mb-8 lg:mb-16'}
                    >
                        Csapatunk
                    </m.h2>
                    <m.div
                        initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className={'text-custom-gray font-semibold text-center'}
                    >
                        Lelkes start upperek vagyunk. Színes társaság, <br />
                        a legkülönbözőbb motivációkkal és tudással. A cél azonban közös.
                    </m.div>
                </div>
            </section>

            <section className={'flex flex-col pt-[72px] px-0 2xl:px-[300px]'}>
                <div className={'grid px-16 sm:grid-cols-2 lg:grid-cols-3'}>
                    {TEAM.map((member, index) =>
                        <m.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.1 }}
                            className={`${index === 0 ? 'row-span-2' : ''} relative flex justify-center items-center`}
                        >
                            <img className={'z-10 w-full h-full'} src={member.image} />
                            <div className={'absolute z-20 text-white font-bold bottom-6'}>{member.name}</div>
                        </m.div>
                    )}
                </div>
            </section>
        </>
    )
}

export default AboutUs
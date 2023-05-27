import { ReactElement } from "react"
import { TEAM } from "../../conf/Team"

import { motion as m } from "framer-motion";

const AboutUs: React.FC = (): ReactElement => {
    return (
        <>
            <section className={'flex flex-col py-[150px] default-padding text-white'} id='about-us-section'>
                <m.h2
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className={'section-title text-white'}
                >
                    Csapatunk
                </m.h2>

                <div className={'grid md:grid-cols-2 lg:grid-cols-4 mt-[150px] gap-y-10'}>
                    {TEAM.map((member, index) =>
                        <m.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.1 }}
                            className={`relative flex justify-center items-center flex-col`}
                        >
                            {member.image ?
                                <img className={'z-10 w-full h-full'} src={member.image} />
                                :
                                <div className={'w-fit h-fit p-3 bg-white text-primary flex justify-center items-center rounded-full'}>
                                    {member.icon}
                                </div>
                            }
                            <div className={'text-[#BEFD69] font-bold mt-[70px]'}>{member.name}</div>
                            <div className={'text-white text-xs mt-[15px]'}>{member.role}</div>
                        </m.div>
                    )}
                </div>
            </section>
        </>
    )
}

export default AboutUs
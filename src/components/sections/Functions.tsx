import React, { ReactElement } from 'react';
import { FUNCTIONS } from '../../conf/Functions';
import Card from '../Card';
import { motion as m } from 'framer-motion';

const Functions: React.FC = (): ReactElement => {
    return (
        <section id={'functions-section'} className={'py-[150px] default-padding bg-primary'}>
            <m.div className={'w-full flex flex-col justify-center'}>
                <m.h2
                    initial={{ top: -50, opacity: 0 }}
                    whileInView={{ top: 0, opacity: 1, transition: { delay: 0.3 } }}
                    className={'text-white text-[52px] font-bold mb-6 mx-auto text-center'}>
                    Milyen funkciókkal<br />rendelkezik az applikáció?
                </m.h2>
            </m.div>
            <div className={'w-full grid md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-20 mt-[150px]'}>
                {FUNCTIONS.map((func, index) =>
                    <Card
                        className={index === FUNCTIONS.length - 1 && FUNCTIONS.length % 2 !== 0 ? 'col-span-1 md:col-span-2 xl:col-span-1' : ''}
                        title={func.title}
                        icon={func.icon} />)}
            </div>
        </section>
    )
}

export default Functions;
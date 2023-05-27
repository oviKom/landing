import { ReactElement } from "react"
import { SOLUTIONS } from "../../conf/Solutions"
import Card from "../Card"

import { motion as m } from 'framer-motion';

const ChooseUs: React.FC = (): ReactElement => {
    const indexBasedClassName = (index: number): string => {
        const roundMap = [
            'lg:rounded-tr-none',
            'lg:rounded-t-none',
            'lg:rounded-tl-none',
        ]
        return `rounded-[72px] ${roundMap[index]} bg-white h-[500px] px-[30px] pt-[50px] w-full !max-w-[400px]`;
    }
    return (
        <section className={'flex flex-col py-[150px] default-padding'} id='choose-us-section'>
            <div className={'text-center flex flex-col justify-center items-center w-full'}>
                <m.h2
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className={'section-title text-white'}>
                    Miért a Buborékom?
                </m.h2>
                <div className={'grid gap-20 lg:grid-cols-3 lg:gap-0 mt-[180px] w-full'}>
                    {SOLUTIONS.map((solution, index) => <Card
                        className={indexBasedClassName(index)}
                        title={solution.title}
                        description={solution.description}
                        icon={solution.icon}
                        variant={'white'} />
                    )}
                </div>
            </div>
        </section>
    )
}

export default ChooseUs
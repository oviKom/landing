import React, { ReactElement } from 'react';
import goalImage_1 from '/images/goal_1.png'
import goalImage_2 from '/images/goal_2.png'
import goalImage_3 from '/images/goal_3.png'

const Goal: React.FC = (): ReactElement => {
    return (
        <section id={'goal-section'} className={'mt-[calc(100vh_-_88px)] flex flex-row py-[72px] default-padding justify-between gap-14'}>
            <div className={'max-w-[435px] flex flex-col justify-center'}>
                <h2 className={'text-black text-[52px] font-bold mb-6'}>Célunk</h2>
                <div className={'text-custom-gray font-semibold'}>
                    Neque porro quisquam est, qui dolorem ipsum quia
                    dolor sit amet, consectetur, adipisci velit, sed quia non
                    numquam eius modi tempora incidunt ut labore et
                    dolore magnam aliquam quaerat voluptatem. Excepteur
                    sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim id est laborum.
                </div>
            </div>
            <div className={'grid grid-cols-2 gap-[24px] max-w-[528px] min-w-[50%] items-end'}>
                <img src={goalImage_1} />
                <img src={goalImage_2} />
                <img className={'col-span-2'} src={goalImage_3} />
            </div>
        </section >
    )
}

export default Goal;
import React, { ReactElement } from 'react'
import NewsletterSVG from '../atoms/NewsletterSVG'
import SendIconSVG from '../atoms/SendIconSVG'
import Button from '../Button'
import Input from '../Input'

const Contact: React.FC = (): ReactElement => {
    return (
        <section className={'flex flex-col default-padding py-[144px] bg-primary'}>
            <div className={'bg-white rounded-2xl flex flex-row p-24'}>
                <div className={'w-[40%]'}>
                    asd
                </div>

                <div className={'w-[50%] flex flex-col place-self-end ml-auto'}>
                    <h2 className={'text-[35px] font-bold pb-4'}>Hírlevél</h2>
                    <p className={'text-custom-gray font-semibold mb-14'}>
                        Iratkozz fel hírlevelünkre és legyél naprakész arról, hogy mi történik a Tiny Ties házatáján.
                    </p>
                    <div className={'flex flex-row justify-between gap-4'}>
                        <Input placeholder={'E-mail címed'} className={'flex-shrink w-full'} />
                        <Button text={<SendIconSVG size={24} svgClass={'absolute bottom-[10px] left-[10px]'} />} size={'circle'} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;
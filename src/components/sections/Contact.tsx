import React, { ReactElement } from 'react'
import ContactSVG from '../atoms/ContactSVG'
import NewsletterSVG from '../atoms/NewsletterSVG'
import SendIconSVG from '../atoms/SendIconSVG'
import Button from '../Button'
import Input from '../Input'
import TextArea from '../Textarea'

const Contact: React.FC = (): ReactElement => {
    return (
        <section className={'flex flex-col default-padding py-[144px] bg-primary'} id={'contact-section'}>
            <div className={'bg-white rounded-2xl flex flex-row p-24'}>
                <div className={'w-[40%]'}>
                    <ContactSVG />
                </div>

                <div className={'w-[50%] flex flex-col place-self-end ml-auto'}>
                    <h2 className={'text-[35px] font-bold pb-4'}>Írj nekünk!</h2>
                    <p className={'font-semibold mb-14'}>
                        További információkért bátran keress minket üzenetben és készséggel válaszolunk minden kérdésedre.
                    </p>
                    <div className={'flex flex-row justify-between gap-4'}>
                        <Input placeholder={'Neved'} className={'flex-shrink w-full'} />
                        <Input placeholder={'E-mail címed'} className={'flex-shrink w-full'} />
                    </div>
                    <div className={'flex flex-row justify-between mt-4'}>
                        <TextArea placeholder={'Írj üzenetet...'} className={'w-full'} />
                    </div>
                    <div className={'flex flex-row justify-between mt-4'}>
                        <Button text={'Küldés'} size={'full'} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;
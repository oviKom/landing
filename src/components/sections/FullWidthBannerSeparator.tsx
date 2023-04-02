import React, { ReactElement } from 'react'

interface FWBannerSeparatorInterface {
    image: string,
    text: string | ReactElement,
}

const FullWidthBannerSeparator: React.FC<FWBannerSeparatorInterface> = ({
    image, text
}: FWBannerSeparatorInterface): ReactElement => {
    return (
        <div
            style={{ backgroundImage: `url(${image})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
            className={`w-full h-fit min-h-[600px] relative flex justify-center items-center text-white`}>
            <div className={'w-full h-full bg-black/50 absolute left-0 z-10'}></div>
            <h2 className={'text-[30px] md:text-[40px] lg:text-[46px] font-bold z-20 text-center'}>
                {text}
            </h2>
        </div >
    )
}

export default FullWidthBannerSeparator
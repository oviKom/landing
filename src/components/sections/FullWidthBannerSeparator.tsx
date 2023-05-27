import React, { ReactElement } from 'react'
import { motion as m } from 'framer-motion';

interface FWBannerSeparatorInterface {
    text: string | ReactElement,
}

const FullWidthBannerSeparator: React.FC<FWBannerSeparatorInterface> = ({
    text
}: FWBannerSeparatorInterface): ReactElement => {
    return (
        <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className={`default-padding rounded-100 w-full relative flex justify-center items-center text-black bg-secondary p-32`}>
            {text}
        </m.div >
    )
}

export default FullWidthBannerSeparator
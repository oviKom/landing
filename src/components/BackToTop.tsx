import { ChevronUpIcon } from '@heroicons/react/24/outline'
import React, { ReactElement } from 'react'
import Button from './Button'

import { motion as m } from 'framer-motion';

interface BackToTopInterface {
    display: 'fixed' | 'floating',
    className?: string,
    onClick: Function | undefined
}

const BackToTop: React.FC<BackToTopInterface> = ({
    display, className, onClick
}: BackToTopInterface): ReactElement => {
    return (
        <m.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className={className}>
            <Button
                onClick={onClick}
                className={'w-20 h-20 !rounded-3xl shadow-lg'}
                size={'wrap'} variant={'white'}
                text={<ChevronUpIcon className={'w-12 h-12'} />}
            />
        </m.div>
    )
}

export default BackToTop
import classNames from 'classnames'
import React, { ReactElement } from 'react'

interface CardPropsInterface {
    icon?: ReactElement | undefined
    title: string,
    description: string,
    variant?: 'default' | 'primary'
}

const Card: React.FC<CardPropsInterface> = ({
    icon, title, description, variant = 'default'
}: CardPropsInterface): ReactElement => {
    const titleColor = classNames({
        'text-card-gray': variant === 'default',
        'text-black': variant === 'primary',
    });
    const iconBackgroundClass = classNames({
        'bg-card-gray': variant === 'default',
        'bg-primary': variant === 'primary',
        'text-black': variant === 'default',
        'text-white': variant === 'primary',
    });
    const descriptionColor = classNames({
        'text-card-purple ': variant === 'default',
        'text-custom-gray': variant === 'primary',
    });
    return (
        <div className={'inline-flex flex-col max-w-[350px] text-center place-self-center'}>
            {icon &&
                <div className={`${iconBackgroundClass} rounded-full w-14 h-14 flex justify-center items-center self-center mb-10`}>
                    {icon}
                </div>
            }

            <div className={`text-[26px] font-bold mb-6 ${titleColor}`}>
                {title}
            </div>
            <div className={`${descriptionColor} font-semibold`}>
                {description}
            </div>
        </div>
    )
}

export default Card
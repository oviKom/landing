import classNames from 'classnames'
import React, { ReactElement, useRef } from 'react'
import { motion as m, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface CardPropsInterface {
    icon?: ReactElement | undefined
    title: string,
    description: string,
    variant?: 'default' | 'primary'
    className?: string | undefined | boolean
}

const Card: React.FC<CardPropsInterface> = ({
    icon, title, description, variant = 'default', className
}: CardPropsInterface): ReactElement => {
    const { ref, inView } = useInView();

    const animationControls = useAnimation();
    const prevInViewRef = useRef(false);

    if (inView !== prevInViewRef.current) {
        /*if (inView) {
            animationControls.start("visible");
        } else {
            animationControls.start("hidden");
        }*/
        prevInViewRef.current = inView;
    }


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
        <m.div
            ref={ref}
            className={`inline-flex flex-col max-w-[400px] lg:max-w-[350px] text-center place-self-center ${className}`}
            animate={prevInViewRef.current ? { scale: 1 } : { scale: 0 }}
        >
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
        </m.div>
    )
};

export default Card
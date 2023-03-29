import React, { ReactElement } from 'react';
import classNames from 'classnames';

interface ButtonInterface {
    text: string | ReactElement,
    variant?: 'primary' | 'white',
    size?: 'fixed' | 'circle' | 'full',
    onClick?: Function | undefined,
    className?: string,

}

const Button: React.FC<ButtonInterface> = ({
    text, variant = 'primary', size = 'fixed', onClick, className
}: ButtonInterface): ReactElement => {
    const defaultClassName = classNames({
        'button': true,
        'size-fixed': size === 'fixed',
        'size-full': size === 'full',
        'size-circle': size === 'circle',
        'primary': variant === 'primary',
        'white': variant === 'white',
    });
    return (
        <button type='button' className={`${defaultClassName} ${className}`} onClick={() => onClick?.()} >{text}</button>
    )
}

export default Button
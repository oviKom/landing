import React, { ReactElement } from 'react';
import classNames from 'classnames';

interface ButtonInterface {
    text: string | ReactElement,
    variant?: 'primary' | 'white',
    size?: 'fixed' | 'circle',
    onClick?: Function | undefined
}

const Button: React.FC<ButtonInterface> = ({
    text, variant = 'primary', size = 'fixed', onClick
}: ButtonInterface): ReactElement => {
    const className = classNames({
        'button': true,
        'size-fixed': size === 'fixed',
        'size-circle': size === 'circle',
        'primary': variant === 'primary',
        'white': variant === 'white',
    });
    return (
        <button type='button' className={className} onClick={() => onClick?.()} >{text}</button>
    )
}

export default Button
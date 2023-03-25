import React, { ReactElement } from 'react';
import classNames from 'classnames';

interface ButtonInterface {
    text: string,
    variant?: 'primary' | 'white',
    size?: 'fixed' | 'wrap'
}

const Button: React.FC<ButtonInterface> = ({
    text, variant = 'primary', size = 'fixed'
}: ButtonInterface): ReactElement => {
    const className = classNames({
        'button': true,
        'size-fixed': size === 'fixed',
        'primary': variant === 'primary',
        'white': variant === 'white',
    });
    return (
        <button type='button' className={className}>{text}</button>
    )
}

export default Button
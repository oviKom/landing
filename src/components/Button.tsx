import React, { ReactElement } from 'react';
import classNames from 'classnames';

interface ButtonInterface {
    text: string | ReactElement,
    variant?: 'primary' | 'white' | 'secondary',
    size?: 'fixed' | 'circle' | 'full' | 'wrap',
    onClick?: Function | undefined,
    className?: string,
    disabled?: boolean

}

const Button: React.FC<ButtonInterface> = ({
    text, variant = 'primary', size = 'fixed', onClick, className, disabled = false
}: ButtonInterface): ReactElement => {
    const defaultClassName = classNames({
        'button': true,
        [`size-${size}`]: size,
        'primary': variant === 'primary',
        'white': variant === 'white',
        'secondary': variant === 'secondary',
        'disabled': disabled
    });
    return (
        <button disabled={disabled} type='button' className={`${defaultClassName} ${className}`} onClick={() => onClick?.()} >{text}</button>
    )
}

export default Button
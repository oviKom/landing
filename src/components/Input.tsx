import React, { ReactElement } from 'react'

interface InputPropsInterface {
    placeholder?: string,
    className?: string,
}

const Input: React.FC<InputPropsInterface> = ({ placeholder, className }: InputPropsInterface): ReactElement => {
    return (
        <input type={'text'} className={`input ${className}`} placeholder={placeholder} />
    )
}

export default Input
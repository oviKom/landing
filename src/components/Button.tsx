import React, { ReactElement } from 'react'

interface ButtonInterface {
    text: string,
}

const Button: React.FC<ButtonInterface> = ({
    text
}: ButtonInterface): ReactElement => {
    return (
        <button type='button'>{text}</button>
    )
}

export default Button
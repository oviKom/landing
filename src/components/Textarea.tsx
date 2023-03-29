import React from 'react'

interface TextAreaInterface {
    placeholder?: string,
    className?: string,
    rows?: number
}

const TextArea: React.FC<TextAreaInterface> = ({ placeholder, className, rows = 3 }: TextAreaInterface) => {
    return (
        <textarea rows={rows} className={`textarea ${className}`} placeholder={placeholder}></textarea>
    )
}

export default TextArea;
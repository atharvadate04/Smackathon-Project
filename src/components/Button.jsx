import React from 'react'

function Button({ childern,
    bgcolor='bg-red-500',
    textcolor='text-white',
    className='',
    ...props}) {
    return (
        <button   
        className={`py-2 px-3  rounded-lg ${bgcolor} ${textcolor} ${className} `}{...props}     
        >
            {childern}
        </button>
    )
}

export default Button

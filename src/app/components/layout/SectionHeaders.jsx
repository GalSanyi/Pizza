import React from 'react'

const SectionHeaders = ({ subHeader, mainHeader }) => {
    return (
        <>
            <h3 className='uppercase text-gray-500 font-semibold leading-3'>{subHeader}</h3>
            <h2 className='text-primary font-semibold text-4xl italic'>{mainHeader}</h2>
        </>
    )
}

export default SectionHeaders

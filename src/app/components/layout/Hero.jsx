import Image from 'next/image'
import React from 'react'
import Right from '../icons/Right'

const Hero = () => {
    return (
        <section className='hero mt-8'>
            <div className='py-12'>
                <h1 className='text-5xl font-semibold '>Everything is better with a <span className='text-primary'>Pizza</span></h1>
                <p className='mt-4 text-gray-500 tetx-sm'>Pizza is the missing piece of the world we all know and love</p>
                <div className='mt-8 flex gap-4 text-sm'>
                    <button className='bg-primary text-white px-3 py-2 rounded-full flex items-center gap-2 justify-center'>
                        Order now
                        <Right />
                    </button>
                    <button className='flex gap-2 py-2 text-gray-400 font-semibold justify-center'>
                        Learn more
                        <Right />
                    </button>
                </div>
            </div>
            <div className='w-45 h-45 justify-self-center'>
                <Image src="/pizza.png" alt="pizza" width={400} height={400} />
            </div>
        </section>
    )
}

export default Hero
import React from 'react'
import Image from 'next/image'
import MenuItem from '../menu/MenuItem'
import SectionHeaders from './SectionHeaders'
const HomeMenu = () => {
    return (
        <section >
            <div className='absolute left-0 right-0 w-full'>
                <div className='h-48 w-48 absolute -left-12 -top-[100px] -z-10 text-left'>
                    <Image src="/sallad1.png" alt="sallad" width={107} height={195} />
                </div>
                <div className='h-48 w-48 absolute -right-12 -top-24 -z-10'>
                    <Image src="/sallad2.png" alt="sallad" layout={'fill'} objectFit='contain' />
                </div>
            </div>
            <div className='text-center mb-4'>
                <SectionHeaders subHeader={'Menu'} mainHeader={'Our Menu'} />
            </div>
            <div className='grid grid-cols-3 gap-4'>
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
            </div>
        </section>
    )
}

export default HomeMenu

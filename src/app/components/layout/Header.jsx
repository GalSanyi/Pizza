import React from 'react'
import Link from 'next/link'
const Header = () => {
    return (
        <header className='flex justify-between items-center'>
            <Link className='text-primary font-semibold text-2xl ' href='/'>LuminaCraft</Link>
            <nav className='flex gap-8 text-gray-500'>
                <Link href='/menu'>Home</Link>
                <Link href='/menu'>Menu</Link>
                <Link href='/menu'>About</Link>
                <Link href='/menu'>Contact</Link>
            </nav>
            <nav className='flex items-center gap-4 text-gray-500'>
                <Link href='/login'>Login</Link>
                <Link href='/register' className='bg-primary text-white px-3 py-2 rounded-full'>Register</Link>
            </nav>
        </header>

    )
}

export default Header
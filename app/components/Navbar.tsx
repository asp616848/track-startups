import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <header className='px-5 py-2 bg-white shadow-sm font-work-sans'>
            <nav className='flex justify-between items-center'>
                <Link href="/">
                    <img src="/logo.png" alt="Logo" width={50} height={50} />
                </Link>
            </nav>
            <div className='flex items-center gap-5'>
                
            </div>
        </header>
        
    )
}

export default Navbar

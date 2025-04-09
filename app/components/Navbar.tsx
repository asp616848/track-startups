import React from 'react'
import Link from 'next/link'
import {auth, signIn, signOut} from '@/auth'

const Navbar = async() => {
    const session = await auth();
    return (
        <header className='navbar'>
            <nav className='navbar-container'>
                <Link href="/" className='navbar-logo'>
                    <img src="/logo.png" alt="Logo" width={60} height={60} />
                </Link>
                <div className='navbar-links'>
                    {session && session?.user ?(
                        <>
                        <Link href="/startup/create" className='navbar-create-button'>
                            <span>Create Startup</span>
                        </Link>
                        <form action={async()=>{
                            'use server';
                            await signOut({redirectTo:"/"})}}>
                            <button type="submit" className='navbar-button'>Log Out</button>
                        </form>
                        <Link href={`/user/${session?.user?.id}`} className='navbar-profile'>
                            <span>{session?.user?.name}</span>
                        </Link>
                        </>
                    )
                    :(
                        <form action={async()=>{
                            'use server';
                            await signIn('github')
                            }}>
                            <button type="submit" className='navbar-button'>Log In</button>
                        </form>
                    )
                }
                </div>
            </nav>
        </header>
    )
}

export default Navbar

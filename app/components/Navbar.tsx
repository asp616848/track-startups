import React from 'react'
import Link from 'next/link'
import {auth, signIn, signOut} from '@/auth'

const Navbar = async() => {
    const session = await auth();
    return (
        <header className='px-5 py-2 bg-white shadow-sm font-work-sans'>
            <nav className='flex justify-between items-center'>
                <Link href="/">
                    <img src="/logo.png" alt="Logo" width={50} height={50} />
                </Link>
                <div className='flex items-center gap-5'>
                    {session && session?.user ?(
                        <>
                        <Link href="/startup/create">
                            <span>Create</span>
                        </Link>
                        <form action={async()=>{
                            'use server';
                            await signOut({redirectTo:"/"})}}>
                            <button type="submit">LogOut</button>
                        </form>
                        <Link href={'/user/${session?.id}'}>
                            <span>{session?.user?.name}</span>
                        </Link>
                        </>
                    )
                    :(
                        <form action={async()=>{
                            'use server';
                            await signIn('github')
                            }}>
                            <button type="submit">Log In</button>
                        </form>
                    )
                }
                </div>
            </nav>
            <div className='flex items-center gap-5'>

            </div>
        </header>
    )
}

export default Navbar

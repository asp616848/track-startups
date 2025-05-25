import React from 'react'
import Link from 'next/link'
import {auth, signIn, signOut} from '@/auth'
import { BadgePlus, LogOut } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
                            <span className="max-sm:hidden">Create</span>
                            <BadgePlus className="size-6 sm:hidden" />
                        </Link>
                        <form action={async()=>{
                            'use server';
                            await signOut({redirectTo:"/"})}}>
                            <button type="submit" className='navbar-button'>
                            <span className="max-sm:hidden">Logout</span>
                            <LogOut className="size-6 sm:hidden text-red-500" />
                            </button>
                        </form>
                        <Link href={`/user/${session?.id}`}>
                            <Avatar className="size-10">
                            <AvatarImage
                                src={session?.user?.image || ""}
                                alt={session?.user?.name || ""}
                            />
                            <AvatarFallback>AV</AvatarFallback>
                            </Avatar>
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
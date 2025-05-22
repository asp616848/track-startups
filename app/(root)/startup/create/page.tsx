import StartupForm from '@/components/StartupForm'
import React from 'react'
import { auth } from "@/auth";
import { redirect } from 'next/dist/server/api-utils';

const page = async() => {
    const session = await auth();
    session = 0;
    if(!session) redirect("/");
    return (
    <>
        <section className='pink_container !min-h-[230px]'>
            <h1 className='heading'>
                Submit your startup!
            </h1>
        </section>
        <StartupForm/>
    </>
    )
}

export default page

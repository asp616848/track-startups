import { sanityFetch } from '@/sanity/lib/live';
import { DATA_QUERY } from "@/lib/queries";
import React from 'react'

export const experimental_ppr = true;

const page = async({params}: { params : Promise<{id:string}>}) =>{
    const id = (await params).id;
    const {data: post} = await sanityFetch({query: DATA_QUERY, params:{id}})
    return (
    <>
    <h1 className='text-3xl'>
        This is a startup number: {JSON.stringify(post)}
    </h1>
    </>
    )
}

export default page

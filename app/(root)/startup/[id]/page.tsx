import { sanityFetch } from '@/sanity/lib/live';
import { DATA_QUERY } from "@/lib/queries";
import React from 'react'
import { formatDate } from '@/lib/utils';

export const experimental_ppr = true;

const page = async({params}: { params : Promise<{id:string}>}) =>{
    const id = (await params).id;
    const {data: post} = await sanityFetch({query: DATA_QUERY, params:{id}})
    console.log(post?._createdAt)
    return (
        <section className='pink_container !min-h-[230px]'>
            <p className="tag">{formatDate(post?._createdAt)}</p>
            <h1 className="heading">{post.title}</h1>
            <p className="sub-heading !max-1-5xl">{post.description}</p>
        </section>
    );
}

export default page

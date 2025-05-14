import { sanityFetch } from '@/sanity/lib/live';
import { DATA_QUERY } from "@/lib/queries";
import React from 'react'
import { formatDate } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import markdownit from 'markdown-it';

const md = markdownit();

export const experimental_ppr = true;

const page = async({params}: { params : Promise<{id:string}>}) =>{
    const id = (await params).id;
    const {data: post} = await sanityFetch({query: DATA_QUERY, params:{id}})
    console.log(post?._createdAt)
    const parsedContent = md.render(post?.pitch || "_")
    return (
        <>
        <section className='pink_container !min-h-[230px]'>
            <p className="tag">{formatDate(post?._createdAt)}</p>
            <h1 className="heading">{post.title}</h1>
            <p className="sub-heading !max-1-5xl">{post.description}</p>
        </section>
        <section className='section_container'>
            <img
                src={post.image}
                alt="thumbnail"
                className='w-full h-auto rounded-xl'
            />
            <div className='space-y-5 mt-10 max-w-4xl mx-auto'>
            <div className='flex-between gap-5'>
            <Link href={`/user/${post.author?._id}`} className="flex gap-4 items-center mb-3">
                <Image
                src={post.author?.image}
                alt="avatar"
                width={64}
                height={64}
                className="rounded-full drop-shadow-lg"
                />
                <div className="flex flex-col">
                <p className="text-20-medium">{post.author?.name}</p>
                <p className="text-16-medium !text-black-300">
                    @{post.author?.username || 'unknown'}
                </p>
                </div>
            </Link>
            <p className='category-tag'>{post.category}</p>
            </div>
            <h3 className='text-30-bold'> Pitch Details</h3>

            </div>
        </section>
        </>
    );
}

export default page
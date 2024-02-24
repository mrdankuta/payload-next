import RichTextParser from '@/utils/RichTextParser'
import React from 'react'
import axios from 'axios'

export default function blogPost({blogPost: {title, body}}) {
    return (
        <div className='py-10 px-6'>
            <h1>{title}</h1>
            <RichTextParser content={body} />
        </div>
    )
}

export const getStaticPaths = async () => {
    const listingReq = await axios(`/api/blogPosts?limit=1000`);
    const listingData = listingReq.data;

    const returnObj = {
        paths: listingData.docs.map(({ slug }) => {
            return {
                params: { slug: [slug] },
            };
        }),
        fallback: false,
    };

    return returnObj;
};

export const getStaticProps = async (ctx) => {
    const slug = ctx.params?.slug;

    const listingReq = await axios(`/api/blogPosts?where[slug][equals]=${slug}`);
    let listingData = listingReq.data;

    return {
        props: {
            blogPost: listingData.docs[0],
        }
    }
}
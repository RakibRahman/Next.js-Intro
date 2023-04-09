import Head from 'next/head';
import React from 'react'
import BlogLayout from './layout';

interface PostData {

}

export default function Post({ postData }) {

    return <BlogLayout home>
        <div className="bg-red-400 text-white">
            <Head>
                <title>{postData.title}</title>
            </Head>

            <p>  {postData.title}</p>
            <br />
            {postData.id}
            <br />
            {postData.body}
        </div>
    </BlogLayout>;
}


const getPostData = async (id: string) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const postData = await res.json();
    return {
        ...postData
    }
}
export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()

    const paths = posts.map((post: { id: string }) => ({
        params: { id: post.id.toString() },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({ params }: {
    params: {
        id: string;
        [key: string]: string
    }
}) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData: postData,
        },
    };
}
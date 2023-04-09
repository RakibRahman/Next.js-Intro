import Link from 'next/link';
import React from 'react'
import BlogLayout from './layout';


interface AllPosts {
    posts: {
        userId: string;
        title: string;
        body: string;
        id: string
    }[]
}

const AllPosts: React.FC<AllPosts> = ({ posts }) => {
    return (
        <BlogLayout home={false}>
            <div className="grid grid-cols-5 rows-4">
                {posts.map((post) => (
                    <div key={post.id}>
                        <h1 className="text-gray-400">{post.title}</h1>
                        <p>{post.body}</p>
                        <Link href={`/posts/${post.id}`}>Read More</Link>
                    </div>
                ))}
            </div>
        </BlogLayout>
    )
}

export default AllPosts

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
    // console.log(posts);

    return {
        props: {
            posts
        }
    }
}
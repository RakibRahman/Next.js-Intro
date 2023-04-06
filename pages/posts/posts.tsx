import React from 'react'


interface Posts {
    posts: {
        userId: string;
        title: string;
        body: string;
        id: string
    }[]
}
const posts: React.FC<Posts> = ({ posts }) => {
    return (
        <div className="grid grid-cols-5 rows-4">
            {posts.map((post) => (
                <div key={post.id}>
                    <h1 className="text-gray-400">{post.title}</h1>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}

export default posts

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
    console.log(posts);

    return {
        props: {
            posts
        }
    }
}
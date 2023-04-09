import Head from 'next/head'
import React, { ReactNode } from 'react'
import utilStyles from '@/styles/utils.module.css'
import Link from 'next/link'


interface BlogLayoutProps {
    children: ReactNode
    home: boolean
}
const BlogLayout: React.FC<BlogLayoutProps> = ({ children, home }) => {
    return (
        <>
            <Head>
                <title>Blog Posts</title>
            </Head>

            <header className={utilStyles.blogHeader}>
                <h1 className={utilStyles.heading2Xl}>
                    Blog Posts
                </h1>
            </header >
            {children}
            {home ? null : <Link href='/posts/all-posts'>Return to blog</Link>}
        </>
    )
}

export default BlogLayout
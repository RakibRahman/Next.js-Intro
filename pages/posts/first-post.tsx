import Link from "next/link";
import Image from 'next/image';
import Head from "next/head";
import Script from "next/script";
import Layout from '../../components/layout';
import utilStyles from '@/styles/utils.module.css'

export default function FirstPost() {
    return <Layout home={false}>
        {/* <Head>
            <title>First Post</title>
        </Head>
        {/* <Script
            src="https://connect.facebook.net/en_US/sdk.js"
            strategy="lazyOnload"
            onLoad={() =>
                console.log(`script loaded correctly, window.FB has been populated`)
            }
        /> */}



        <h1 className={utilStyles.heading2Xl}>First Blog Post</h1>
        <h1 className={'text-green-400'}>First Blog Post</h1>


        <Image
            src="/images/pp.png" // Route of the image file
            height={144} // Desired size with correct aspect ratio
            width={144} // Desired size with correct aspect ratio
            alt="Your Name"
            className="w-20 h-20 rounded-full border border-red-500"
        />
        <Link href='/'>Return to home</Link>




    </Layout>;
}
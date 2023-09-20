import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';

export const metadata = {
    title: 'First posts',
    description: 'different from tutorial',
}

export default function FirstPost() {
    return (
        <>  
            <img src="/images/profile.jpeg" alt="Mark" />

            <h1>First Post</h1>
            <p>but nextjs doesn`t seem to work the way this tutorial is showing.</p>
            <h2>
                <Link href="/">Bring me ~Home</Link>
            </h2>
        </>
    )
}

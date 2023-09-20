import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/page.module.css'

export default function Home() {
  return (
    <main>
      <div>
        <h1>NEXTJS</h1>
        <h2>
          Read <Link href="/posts"> posts here</Link>
        </h2>
      </div>
    </main>
  )
}

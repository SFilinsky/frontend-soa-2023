'use client'

import Link from "next/link";

export default function Home() {
  return (
    <main>
        <Link href={"/users"}>Go to Users</Link>
    </main>
  )
}

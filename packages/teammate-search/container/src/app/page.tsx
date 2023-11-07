import Link from "next/link";

import IntegrateAuthModule from "@/components/IntegrateAuthModule";

export default function Home() {
  return (
    <main>
        <Link href={"/users"}>Go to Users</Link>
        <IntegrateAuthModule />
    </main>
  )
}

import { HomePage } from "/src/components/PageComponents/index"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Droned: Your drone store.</title>
      </Head>
      <main>
        <HomePage />
      </main>
    </>
  )
}

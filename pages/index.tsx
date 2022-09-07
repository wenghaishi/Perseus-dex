import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Marquee from "react-fast-marquee";
import Header from '../components/Header';



const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-black">
      <Head>
        <title>Perseus dex</title>
      </Head>
      <Header />
    </div>
  )
}

export default Home

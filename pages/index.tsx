import AOS from "aos"
import type { NextPage } from "next"
import { useEffect } from "react"
import FeaturedGame from "../components/organisms/FeaturedGame"
import Footer from "../components/organisms/Footer"
import MainBanner from "../components/organisms/MainBanner"
import Navbar from "../components/organisms/Navbar"
import Reached from "../components/organisms/Reached"
import Story from "../components/organisms/Story"
import TransactionsStep from "../components/organisms/TransactionsStep"
import Head from "next/head"

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <Head>
        <title>StoreGG - Get a New Experience in Gaming</title>
        <meta
          name="description"
          content="Kami menyediakan jutaan cara untuk membantu
players menjadi pemenang sejati"
        />
        <meta property="og:title" content="StoreGG - Get a New Experience in Gaming" />
        <meta
          property="og:description"
          content="Kami menyediakan jutaan cara untuk membantu
players menjadi pemenang sejati"
        />
        <meta property="og:url" content="https://storegg.com" />
      </Head>
      <Navbar />
      <MainBanner />
      <TransactionsStep />
      <FeaturedGame />
      <Reached />
      <Story />
      <Footer />
    </>
  )
}

export default Home

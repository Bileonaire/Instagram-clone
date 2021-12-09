import Head from 'next/head'
import { Header }  from '../components'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title> Bileonaire Instagram </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  )
}

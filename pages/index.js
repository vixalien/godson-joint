import Head from 'next/head'

import HomeBanner from 'components/home_banner'

import Appbar from 'components/appbar'
import Button from 'components/button'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Appbar />
      <main>
        <HomeBanner />
        
      </main>
    </div>
  )
}

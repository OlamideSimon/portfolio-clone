import Head from 'next/head'
import Snowfall from 'react-snowfall'
import '../styles/globals.css'
import '../styles/Header.css'

function MyApp({ Component, pageProps }) {
  return <div className='relative'>
    <Head>
    <link href="https://fonts.cdnfonts.com/css/black-bones-personal-use" rel="stylesheet" />
    </Head>
    <Snowfall
      snowflakeCount={500}
      style={{zIndex: 999}}
    />
    <Component {...pageProps} />
  </div>
}

export default MyApp

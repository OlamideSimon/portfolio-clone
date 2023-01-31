import React, { useState } from 'react'
import Snowfall from 'react-snowfall'
import Preloader from '../components/Preloader';
import '../styles/globals.css'
import '../i18n'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])

  return (
    <>
      <Head>
        <meta name='theme-color' content='#1e42f8ff' />
        <title>Muhammed Erdem</title>
      </Head>
      {!loading ? (
        <div className='relative'>
          {/* <Snowfall
            snowflakeCount={800}
            style={{zIndex: 999}}
          /> */}
          <Component {...pageProps} />
        </div>
      ): (
        <Preloader />
      )}
    </>
  )
}

export default MyApp

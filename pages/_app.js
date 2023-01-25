import Head from 'next/head'
import React, { useState } from 'react'
import Snowfall from 'react-snowfall'
import Preloader from '../components/Preloader';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])

  return (
    <>
      {!loading ? (
        <div className='relative'>
          <Head>
          <link href="https://fonts.cdnfonts.com/css/black-bones-personal-use" rel="stylesheet" />
          </Head>
          <Snowfall
            snowflakeCount={1000}
            style={{zIndex: 999}}
          />
          <Component {...pageProps} />
        </div>
      ): (
        <Preloader />
      )}
    </>
  )
}

export default MyApp

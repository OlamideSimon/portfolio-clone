import Image from 'next/image'
import React from 'react'
import logo from '../public/assets/images/logo.svg'

const Preloader = () => {
  return (
    <div className='w-full h-screen bg-[#171A23] grid place-content-center z-50'>
        <div className={styles.logoContainer}>
            <Image
                src={logo}
                alt=''
                className={styles.logoImage}
                priority
            />
            <p className={styles.logoText}>me</p>
        </div>
    </div>
  )
}

export default Preloader

const styles = {
    logoContainer: 'w-20 md:w-40 relative group cursor-pointer',
    logoImage: 'w-full animate-rotate',
    logoText: 'absolute top-0 bottom-0 left-0 right-0 grid place-content-center uppercase font-corpsansmedium font-semibold',
}
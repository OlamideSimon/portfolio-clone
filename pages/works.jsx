import React from 'react'
import Link from 'next/link'
import Work from '../components/Work'
import { works } from '../utils'
import Header from '../components/header/Header'
import Footer from '../components/Footer'
import Contact from '../components/sections/Contact'

const Works = () => {
    return (
        <>
            <Header />
            <div className='space-y-60'>
                <div className='text-center'>
                    <p className='section-header-1'>
                        fantastic
                    </p>
                    <p className='section-header-2'>
                        selected works
                    </p>
                </div>
                <div className={styles.works}>
                    {works.map(({ bgColor, development, image, name, type, year }, index) => (
                        <Work
                            key={index}
                            bgColor={bgColor}
                            development={development}
                            image={image}
                            name={name}
                            type={type}
                            year={year}
                        />
                    ))}
                </div>
            </div>
            <Contact />
            <Footer />
        </>
    )
}

export default Works

const styles = {
    works: 'grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-24 px-10 sm:px-[68px]',
    seeMore: 'hover-scale bg-blue-500 py-3 px-8 uppercase font-corpsansmedium text-lg rounded-tl-xl rounded-br-xl'
}
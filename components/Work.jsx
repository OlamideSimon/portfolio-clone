import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
}

const Work = ({ bgColor, development, image, name, type, year }) => {
    return (
        <motion.a variants={item} initial='hidden' animate='visible' href='/' className={styles.container} style={{"--bgColor": bgColor}}>
            <div className={styles.subContainer1}>
                <div className={styles.sub1Text}>
                    <p className='text-[21px]'>{name}</p>
                    <p className='text-slate-400'>{year}</p>
                </div>
            </div>
            <div className={styles.subContainer2}>
                <div className={styles.relativeContainer}>
                    <p className={styles.type}>{type}</p>
                    <Image alt='' src={image} className='w-full' />
                    <button className={styles.development}>{development}</button>
                </div>
            </div>
        </motion.a>
    )
}

export default Work

const styles = {
    container: 'relative h-[300px] sm:h-[400px] group cursor-pointer',
    subContainer1: 'absolute right-0 left-0 h-[200px] sm:h-[250px] lg:h-[280px] z-[1] font-bold font-corpsansregular  rounded-tl-[40px] rounded-br-[40px] bg-[#252b3d] group-hover:bg-[var(--bgColor)]',
    sub1Text: 'absolute top-10 right-0 left-0 flex justify-between items-center px-[50px]',
    subContainer2: 'absolute right-0 left-0 top-20 md:h-[200px] lg:h-[280px] z-[2] px-7 lg:px-16 md:group-hover:scale-110 transition-all duration-300',
    relativeContainer: 'bg-slate-900 opacity-60 rounded-tl-3xl md:h-full rounded-br-3xl p-3 relative text-xs',
    type: 'rounded-tl-2xl rounded-br-2xl bg-[#212737] bg-opacity-70 py-3 px-5 absolute right-3',
    development: 'rounded-tl-2xl rounded-br-2xl bg-[#212737] bg-opacity-70 py-3 px-5 absolute bottom-3'
}
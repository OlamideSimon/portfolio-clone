import Image from 'next/image'
import Snowfall from 'react-snowfall'
import React from 'react'
import Button from '../components/Button'
import centerBox from '../public/assets/images/center_box_bg.png'
import web from '../public/assets/images/web_animation_bg.png'
import feDev from '../public/assets/images/fe_dev_bg.png'
import inDes from '../public/assets/images/interaction_design_bg.png'
import mobDev from '../public/assets/images/mobile_dev_bg.png'
import { MdOutlineDesignServices } from 'react-icons/md'
import { AiOutlineMobile } from 'react-icons/ai'
import { DiCodeBadge } from 'react-icons/di'
import { VscServerProcess } from 'react-icons/vsc'
import Contact from '../components/sections/Contact'
import { motion } from 'framer-motion'
import About from '../components/sections/About'
import Works from '../components/sections/Works'
import Header from '../components/header/Header'
import Footer from '../components/Footer'

const container = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      ease: 'linear',
      delay: 0.3,
      duration: 0.7
    }
  }
}

export default function Home() {
  return (
    <div className='h-full relative'>
      <>
        <Header />
        <motion.div variants={container} initial="hidden" whileInView="show" className={styles.homeContainer}>
          <div className={styles.introContainer}>
              <div className={styles.greeting}>
                <p className={styles.word}>👋</p>
                <p className={styles.word}>H</p>
                <p className={`${styles.word} mr-2`}>i{" "}</p>
                <p className={styles.word}>F</p>
                <p className={styles.word}>o</p>
                <p className={styles.word}>l</p>
                <p className={styles.word}>k</p>
                <p className={styles.word}>s</p>
                <p className={styles.word}>!</p>
              </div>
              <p className={styles.name}>I&apos;m Muhammed Erdem</p>
              <p className='text-purple'>Front-end Engineer</p>
              <p className={styles.specialisation}>
                Specialized in front-end development but also like trying out other
                technologies in order to become more flexible
              </p>
              <div className='font-corpsansbold pt-5'>
                <button className={styles.knowMe}>
                  Know me
                </button>
              </div>
          </div>
          <div className={styles.container}>
            <div className={styles.relativeContainer}>
              <Image src={centerBox} alt='' />
              <div className={`-top-24 right-24 ${styles.absoluteContainer}`}>
                <div className='relative w-[80%]'>
                  <Image src={web} alt='' />
                  <div className={styles.descriptionContainer}>
                    <VscServerProcess size={50} className='' />
                    <p>Web development</p>
                  </div>
                </div>
              </div>
              <div className={`${styles.absoluteContainer} -top-40 left-40`}>
                <div className='relative'>
                  <Image src={feDev} alt='' />
                  <div className={styles.descriptionContainer}>
                    <DiCodeBadge size={50} className='' />
                    <p>Frontend development</p>
                  </div>
                </div>
              </div>
              <div className={`${styles.absoluteContainer} -bottom-32 right-40`}>
                <div className='relative'>
                  <Image src={inDes} alt='' />
                  <div className={styles.descriptionContainer}>
                    <MdOutlineDesignServices size={50} className='' />
                    <p>Interaction design</p>
                  </div>
                </div>
              </div>
              <div className={`${styles.absoluteContainer} -bottom-32 left-36`}>
                <div className='relative w-[80%]'>
                  <Image src={mobDev} alt='' />
                  <div className={styles.descriptionContainer}>
                    <AiOutlineMobile size={50} className='' />
                    <p>Mobile development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <div className='space-y-[180px]'>
          <About />
          <Works />
          <Contact />
        </div>
        <Footer />
      </>
    </div>
  )
}


const styles = {
  homeContainer: 'py-[150px] lg:py-[300px] lg:flex lg:items-center px-10 md:px-20',
  introContainer: 'text-center lg:text-left lg:w-full space-y-3 flex-1',
  greeting: 'text-purple font-blackbones text-[52px] -my-4',
  word: 'hover:scale-125 cursor-pointer transition-all duration-100 inline-block',
  knowMe: 'w-fit px-5 cursor-pointer py-4 text-white font-semibold hover:scale-110 transition-all duration-100 rounded-tl-3xl rounded-br-3xl bg-purple uppercase',
  name: 'font-corpsansbold text-[52px] font-semibold',
  specialisation: 'text-slate-100 text-base font-thin font-corpsansregular text-xl',
  container: 'hidden lg:grid place-content-center flex-1',
  relativeContainer: 'relative font-corpsansregular text-xl',
  absoluteContainer: 'w-full hover-scale absolute',
  descriptionContainer: 'w-full h-full text-center absolute top-0 right-0 flex justify-center items-center flex-col'
}
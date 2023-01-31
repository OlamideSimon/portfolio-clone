import Image from 'next/image'
import React, { useState } from 'react'
import centerBox from '../public/assets/images/center_box_bg.png'
import web from '../public/assets/images/web_animation_bg.png'
import feDev from '../public/assets/images/fe_dev_bg.png'
import inDes from '../public/assets/images/interaction_design_bg.png'
import mobDev from '../public/assets/images/mobile_dev_bg.png'
import { MdOutlineDesignServices } from 'react-icons/md'
import { AiOutlineDesktop } from 'react-icons/ai'
import { DiCodeBadge } from 'react-icons/di'
import { VscServerProcess } from 'react-icons/vsc'
import Contact from '../components/sections/Contact'
import { motion } from 'framer-motion'
import About from '../components/sections/About'
import Works from '../components/sections/Works'
import Header from '../components/Header'
import Footer from '../components/Footer'
import shape1 from '../public/assets/images/shape_1.png'
import shape2 from '../public/assets/images/shape_2.png'
import shape3 from '../public/assets/images/shape_3.png'
import shape5 from '../public/assets/images/shape_4.png'
import shape4 from '../public/assets/images/shape_5.png'
import shape6 from '../public/assets/images/shape_6.png'
import shape7 from '../public/assets/images/shape_7.png'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const mouseMove = (e) => {
    console.log(e.clientX, e.clientY)

    setX(e.clientX / 20)
    setY(e.clientY / 20)
  }

  return (
    <div className='h-full relative' onMouseMove={mouseMove}>
      <>
        <Header />
        <motion.div variants={container} initial="hidden" whileInView="show" className={styles.homeContainer}>
          <Image src={shape1} alt='' className='hover:scale-110 w-16 md:w-28 absolute top-40 sm:top-20 left-10 sm:left-20 -z-[999]' />
          <Image src={shape2} alt='' className='hover:scale-110 w-16 absolute top-10 sm:top-12 left-40 sm:left-1/2 -z-[999]' />
          <Image src={shape3} alt='' className='hover:scale-110 w-16 md:w-28 absolute top-56 right-20 -z-[999]' />
          <Image src={shape4} alt='' className='hover:scale-110 w-16 absolute bottom-40 left-[30%] -z-[999]' />
          <Image src={shape5} alt='' className='hover:scale-110 w-16 md:w-28 absolute bottom-52 left-20 -z-[999]' />
          <Image src={shape6} alt='' className='hover:scale-110 w-16 md:w-28 absolute bottom-20 sm:bottom-20 left-40 sm:left-1/2 -z-[999]' />
          <Image src={shape7} alt='' className='hover:scale-110 w-10 absolute bottom-40 md:bottom-80 right-5 md:right-20 -z-[999]' />
          <div className={styles.introContainer}>
              <div className={styles.greeting}>
                <span>👋</span>
                {t("index.greeting").split("").map((word, index) => (
                  <span key={index} className={styles.word}>{word}</span>
                ))}
              </div>
              <p className={styles.name}>{t("index.name")}</p>
              <p className='text-blue-ryb-2 font-corpsansregular text-[20px] capitalize'>{t("index.profession")}</p>
              <p className={styles.specialisation}>{t("index.intro")}</p>
              <div className='font-corpsansbold pt-5'>
                <button className={styles.knowMe}>{t("index.button")}</button>
              </div>
          </div>
          <div className={styles.container}>
            <div className={styles.relativeContainer} style={{left: x, top: y}}>
              <Image src={centerBox} alt='' />
              <div className={`-top-20 right-20 lg:-top-24 lg:right-24 ${styles.absoluteContainer}`}>
                <div className='relative w-[80%]'>
                  <Image src={web} alt='' />
                  <div className={styles.descriptionContainer}>
                    <VscServerProcess size={50} className='' />
                    <p className={styles.description}>{t('index.web')}</p>
                  </div>
                </div>
              </div>
              <div className={`${styles.absoluteContainer} -top-32 left-20 lg:-top-40 lg:left-40`}>
                <div className='relative'>
                  <Image src={feDev} alt='' priority />
                  <div className={styles.descriptionContainer}>
                    <DiCodeBadge size={50} className='' />
                    <p className={styles.description}>{t('index.front')}</p>
                  </div>
                </div>
              </div>
              <div className={`${styles.absoluteContainer} -bottom-28 right-28 lg:-bottom-32 lg:right-40`}>
                <div className='relative'>
                  <Image src={inDes} alt='' />
                  <div className={styles.descriptionContainer}>
                    <MdOutlineDesignServices size={50} className='' />
                    <p className={styles.description}>{t('index.design')}</p>
                  </div>
                </div>
              </div>
              <div className={`${styles.absoluteContainer} -bottom-16 left-24 lg:-bottom-32 lg:left-36`}>
                <div className='relative w-[80%]'>
                  <Image src={mobDev} alt='' />
                  <div className={styles.descriptionContainer}>
                    <AiOutlineDesktop size={50} className='' />
                    <p className={styles.description}>{t('index.desktop')}</p>
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
  homeContainer: 'py-[150px] lg:pb-[250px] lg:pt-[150px] md:flex md:items-center px-10 lg:px-20 relative',
  introContainer: 'text-center md:text-left md:w-full space-y-3 flex-1',
  greeting: 'text-blue-ryb-2 font-blackbones text-[40px] lg:text-[52px] -my-4',
  word: 'cursor-pointer hover:scale-150 duration-100 transition-all inline-block whitespace-pre',
  knowMe: 'w-fit px-5 cursor-pointer py-4 text-white font-semibold hover:scale-110 transition-all duration-200 rounded-tl-xl rounded-br-xl bg-blue-ryb uppercase',
  name: 'capitalize font-corpsansbold text-[30px] sm:text-[40px] lg:text-[52px] font-semibold',
  specialisation: 'text-slate-100 text-base font-thin font-corpsansregular text-xl',
  container: 'hidden md:grid place-content-center flex-1',
  relativeContainer: 'relative font-corpsansregular text-xl w-40 lg:w-full',
  absoluteContainer: 'w-full hover-scale absolute',
  descriptionContainer: 'w-full h-full text-center absolute top-0 right-0 flex justify-center items-center flex-col',
  description: 'break-words w-28 capitalize'
}
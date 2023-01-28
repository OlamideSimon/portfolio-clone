import React, { useState } from 'react'
import { useEffect } from 'react'
import Link from 'next/link'
import logo from '../public/assets/images/logo.svg'
import { navItems } from '../utils'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

const container = {
    hidden: {
        opacity: 0,
        scale: 0
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 0.1,
            duration: 0.2
        }
    }
}

const Header = () => {
    const [active, setActive] = useState(false)
    const { t } = useTranslation()
    // console.log(t)

    useEffect(() => {
        if (active) {
            // prevent scrolling when modal is open
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'auto'
        }
    })

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.logoContainer}>
                    <Image
                        src={logo}
                        alt=''
                        className={styles.logoImage}
                        priority
                    />
                    <p className={styles.logoText}>me</p>
                </div>
                <div className={styles.lgContainer}>
                    {navItems.map(({ name, link, soon }) => (
                        <a
                            href={link}
                            key={name}
                            className={styles.textLink}
                        >
                            {t(`header.${name}`)}
                        </a>
                    ))}
                </div>
                <div className={styles.smContainer}>
                    <svg className={`ham hamRotate hamburger ${active && 'active'}`} viewBox="0 0 100 100" width="50" onClick={() => setActive(active => !active)}>
                        <path className={`${styles.stroke} top`} d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20" />
                        <path className={`${styles.stroke} middle`} d="m 30,50 h 40" />
                        <path className={`${styles.stroke} bottom`} d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20" />
                    </svg>
                </div>
            </div>
            {active && (
                <motion.div variants={container} initial="hidden" animate='show' className={styles.popupContainer}>
                    <div className={styles.linkContainer}>
                        {navItems.map(({ name, link, soon }) => (
                            <a
                                href={link}
                                key={name}
                                className={styles.textLink}
                                onClick={() => setActive(false)}
                            >
                                {t(`header.${name}`)}
                            </a>
                        ))}
                    </div>
                    <div className={styles.contactMeContainer}>
                        <div className={styles.contactBody}>
                            <p className='text-4xl uppercase font-bold'>{t('contact.question')}</p>
                            <p className='opacity-90'>{t('contact.ready')}</p>
                        </div>
                        <Link href='/#contact' onClick={() => setActive(false)} className={styles.contactButton}>
                            {t('contact.talk')}
                        </Link>
                    </div>
                </motion.div>
            )}
        </div>
    )
}

export default Header

const styles = {
    container: 'pt-[15px] md:pt-[40px] font-corpsansregular md:px-10 overflow-y-hidden',
    header: 'flex justify-between items-center px-5 leading-6 relative z-50',
    logoContainer: 'w-16 md:w-20 relative group cursor-pointer',
    logoImage: 'w-full group-hover:animate-rotate',
    logoText: 'absolute top-0 bottom-0 left-0 right-0 grid place-content-center uppercase font-corpsansmedium font-semibold',
    lgContainer: 'hidden md:flex space-x-3 font-bold mr-[10px] text-[16px]',
    textLink: 'relative uppercase px-[15px] cursor-pointer',
    smContainer: 'md:hidden bg-slate-700 rounded-tl-xl rounded-br-xl',
    stroke: 'line stroke-slate-500',
    popupContainer: 'absolute top-0 right-0 left-0 h-screen overflow-y-hidden backdrop-blur z-40 space-y-5',
    linkContainer: 'flex items-center flex-col space-y-10 pt-[150px] text-3xl font-corpsansbold',
    contactMeContainer: 'bg-blue-ryb font-corpsansmedium rounded-br-3xl rounded-tl-3xl p-10 md:p-20 text-center md:flex md:justify-between items-center',
    contactBody: 'md:text-left mb-5 md:mb-0',
    contactButton: 'uppercase font-semibold rounded-br-xl rounded-tl-xl px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-400'
}
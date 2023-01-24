import React from 'react'
import Link from 'next/link'
import Work from '../../components/Work'
import { works } from '../../utils'
import { motion } from 'framer-motion'

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 1,
            staggerChildren: 1
        }
    }
}

const Works = () => {
    return (
        <motion.div className='space-y-10' initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { ease: 'linear', delay: 0.3, duration: 0.7 } }}>
            <div className='text-center'>
                <p className='section-header-1'>
                    fantastic
                </p>
                <p className='section-header-2'>
                    selected works
                </p>
            </div>
            <div variants={container} initial="hidden" animate="show" className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-24 px-10 sm:px-[68px]'>
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
            <div className='w-full flex justify-center'>
                    <Link href='works' className='hover-scale bg-blue-500 py-3 px-8 uppercase font-corpsansmedium text-lg rounded-tl-xl rounded-br-xl'>
                        see more
                    </Link>
            </div>
        </motion.div>
    )
}

export default Works
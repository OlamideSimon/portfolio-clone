import React, { useState } from 'react'
import { AiOutlineCopy } from 'react-icons/ai'
import Link from 'next/link'
import { links } from '../../utils'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const Contact = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyTextToClipboard = async(text) => {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }

  const onClickCopy = () => {
    copyTextToClipboard('sample@gmail.com')
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transitiondelay: 0.3, transition: { ease: 'linear', delay: 0.3, duration: 0.7 } }}>
      <p className='w-full text-center mb-40 md:mb-60'>
        <q className='text-slate-700 text-4xl md:text-5xl text-center font-blackbones'>Be who you needed when you were younger</q>
      </p>
      <div className='bg-[#252437] md:px-20 py-10 relative'>
        <div className='bg-blue-ryb font-corpsansmedium rounded-br-3xl rounded-tl-3xl p-10 lg:p-20 absolute -top-20 right-5 left-5 md:right-20 md:left-20 text-center md:flex md:justify-between items-center'>
          <div className='md:text-left mb-5 md:mb-0'>
            <p className='text-4xl uppercase font-bold'>do you have a project?</p>
            <p className='opacity-90'>I&apos;m ready for new projects</p>
          </div>
          <Link href='#contact' className='uppercase font-semibold rounded-br-xl rounded-tl-xl px-5 py-3 bg-gradient-to-r from-blue-600 to-blue-400 hover:scale-110 transition-all duration-100'>
            Let&apos;s talk
          </Link>
        </div>
        <div className='w-full text-center capitalize text-3xl md:text-5xl mt-40' id='contact'>
          <p className='font-light text-blue-ryb-2 font-blackbones'>let&apos;s talk</p>
          <p className='font-semibold font-corpsansbold'>contact</p>
        </div>
        <div className={styles.formContainer}>
          <form onSubmit={onSubmit}>
            <div className="relative mt-6">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className={styles.input}
                autoComplete="NA"
              />
              <label htmlFor="name" className={styles.label}>Name</label>
            </div>
            <div className="relative mt-6">
              <input type="email" name="email" id="email" placeholder="Email Address" className={styles.input} autoComplete="NA" />
              <label htmlFor="email" className={styles.label}>Email</label>
            </div>
            <div className="relative mt-6">
              <textarea rows={3} type="text" name="message" id="message" placeholder="Message" className={styles.input} autoComplete="NA" />
              <label htmlFor="message" className={styles.label}>Message</label>
            </div>
            <div className='w-full flex justify-center md:justify-end mt-5'>
              <button className={styles.submitBtn} type='submit'>
                send message
              </button>
            </div>
          </form>

          <div className='w-full'>
            <motion.div variants={container} initial='hidden' animate='visible' className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
              {links.map(({ Icon, link, name }, index) => (
                <motion.a variants={item} initial='hidden' animate='visible' href={link} target='_blank' key={index} className='hover:bg-slate-900 p-5 transition-all duration-300 rounded' rel="noreferrer">
                  <div className='flex items-center space-x-4'>
                    <Icon size={40} />
                    <div className='flex-1'>
                      <p className='text-xl font-semibold capitalize'>{name}</p>
                      <p className='text-slate-600 md:w-40 truncate overflow-x-hidden'>{link}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
            <div className='w-full flex p-2 items-center relative group rounded-tl-3xl cursor-pointer bg-[#252430] hover:bg-blue-600 rounded-br-xl' onClick={onClickCopy}>
              <AiOutlineCopy size={40} className='rounded-tl-xl top-0 left-0 bottom-0 bg-slate-500 h-full w-[20%] sm:w-16 p-3 group-hover:bg-blue-800' />
              <p className='flex-1 text-center p-3 rounded-br-xl font-corpsansmedium text-2xl w-[80%]'>{isCopied ? 'Copied': 'sample@gmail.com'}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact

const styles = {
  formContainer: 'grid grid-cols-1 lg:grid-cols-2 gap-10 px-5 items-end',
  label: "pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-white opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-slate-500",
  input: "bg-transparent peer mt-1 w-full border-b-2 border-slate-500 px-0 py-3 placeholder:text-transparent focus:border-slate-100 focus:outline-none",
  submitBtn: 'font-corpsansbold bg-blue-600 px-5 py-3 uppercase rounded-br-xl rounded-tl-xl'
}
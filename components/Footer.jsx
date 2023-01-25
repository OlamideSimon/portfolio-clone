import React from 'react'
import Link from 'next/link'
import { navItems } from '../utils'

const Footer = () => {
  return (
    <div className={styles.container}>
      <span className='text-sm'>COPYRIGHT © {new Date().getFullYear()} ALL RIGHTS RESERVED</span>
      <div className={styles.links}>
        {navItems.map(({ name, link, soon }) => (
            <Link
                href={link}
                key={name}
                className={styles.link + (soon && styles.soon)}
            >
                {name}
                {soon && <button disabled className={styles.soonButton}>soon</button>}
            </Link>
        ))}
      </div>
    </div>
  )
}

export default Footer

const styles = {
  container: 'text-center flex flex-col md:flex-row justify-between md:px-10 py-10 text-slate-500 font-semibold space-y-10 md:space-y-0',
  links: 'flex font-bold space-x-2 justify-center',
  link: 'relative uppercase cursor-pointer text-[16px]',
  soon: 'cursor-not-allowed text-slate-600',
  soonButton: 'absolute text-slate-200 opacity-50 -top-7 right-0 bg-blue px-3 py-1 text-sm capitalize cursor-not-allowed rounded-tl-xl rounded-br-xl'
}
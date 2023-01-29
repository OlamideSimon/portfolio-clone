import React from 'react'
import Link from 'next/link'
import { navItems } from '../utils'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.container}>
      <span className='text-sm'>COPYRIGHT © {new Date().getFullYear()} ALL RIGHTS RESERVED</span>
      <div className={styles.links}>
        {navItems.map(({ name, link, soon }) => (
            <Link
                href={link}
                key={name}
                className={styles.link}
            >
                {t(`header.${name}`)}
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
}
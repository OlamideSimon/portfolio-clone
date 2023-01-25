import React from 'react'
import Link from 'next/link'

const Button = ({ title, link, skill }) => {
  return (
    <Link href={link} className={`${styles.button} ${skill ? ' capitalize text-sm': ''}`}>
      {title}
    </Link>
  )
}

export default Button

const styles = {
  button: ''
}
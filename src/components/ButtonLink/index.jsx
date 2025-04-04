import clsx from 'clsx'
import s from './styles.module.scss'
import Link from 'next/link'

const ButtonLink = ({ children, className, href = "/" }) => {
  return (
    <Link className={clsx(s["button"], className)} href={href}>{children}</Link>
  )
}

export default ButtonLink
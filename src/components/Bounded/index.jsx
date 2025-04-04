import s from './styles.module.scss'
import clsx from 'clsx'

const Bounded = ({children, className, safearea}) => {
  return (
    <div className={clsx(s["container-bounded"], {[s["top-space"]] : safearea}, className)}>{children}</div>
  )
}

export default Bounded
import s from './styles.module.scss'
import clsx from 'clsx'

const Alert = ({children, className}) => {
  return (
    <div className={clsx(s["container"], className)}>{children}</div>
  )
}

export default Alert
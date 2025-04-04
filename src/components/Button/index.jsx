import clsx from 'clsx'
import s from './styles.module.scss'
import navArrow from '/src/assets/svg/navArrow.svg'
import add from '/src/assets/svg/add.svg'
import Image from 'next/image'

const Button = ({children, className, arrowIcon, orangeColor, arrowClassName, addIcon, addClassName, onClick, ref }) => {
  return (
    <div ref={ref} className={clsx(s["button"], { [s["orange-var"]] : orangeColor}, className)} onClick={onClick}>{children} {arrowIcon && (<Image src={navArrow} className={clsx(s["icon"], arrowClassName)} alt="image"/>)} {addIcon && (<Image src={add} className={clsx(s["icon"], addClassName)} alt="image"/>)}</div>
  )
}

export default Button
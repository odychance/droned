import clsx from 'clsx'
import s from './styles.module.scss'

const Input = ({ className, placeholder, value, onChange, maxLength, type, min = 1, max }) => {
  return (
    <input
      className={clsx( s["input"], className)}
      placeholder={placeholder}  
      value={value}
      onChange={onChange}
      maxLength={maxLength}
      type={type}
      min={min}
      max={max}
    />
  )
}

export default Input
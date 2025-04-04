import { Button } from '..'
import s from './styles.module.scss'

const Modal = ({ children }) => {
  return (
    <div className={s["container-modal"]}>
      <Button className={s["button"]} onClick={() => console.log("algo")} >
        <div className={s["left-line"]}/>
        <div className={s["right-line"]}/>
      </Button>
      {children}
    </div>
  )
}

export default Modal
import Input from '/src/components/Input'
import Image from 'next/image'
import s from './styles.module.scss'
import star from '/src/assets/svg/star.svg'
import { DRONE_INVENTORY, MAIN_DRONE } from "/src/utils/constants";

const FormComment = () => {

  const drones = [ MAIN_DRONE, ...DRONE_INVENTORY]
  return (
    <div className={s["form-container"]}>
      <form className={s["form"]}>
        <label className={s["label"]}>Give us your opinion</label>
        <textarea className={s["textarea"]} placeholder="type here your opinion"/>
        <label className={s["label", "algo"]}>rate now</label>
        <select>
          {/* <option><Image src={star}/></option> */}
        </select>
        <select>
          {drones.map((item, idx) => (
            <option key={idx}>{item.name}</option>
          ))}
        </select>
      </form>
    </div>
  )
}

export default FormComment
import s from './styles.module.scss'
import bgImage from '/src/assets/images/real-images/drone3.webp'
import Image from 'next/image'
import { Button } from '/src/components'
import { AuthForm } from '/src/components'

const SignUpPage = () => {
  return (
    <div className={s["container-page"]}>
      <Image src={bgImage} className={s["bg-image"]} alt="bg image" />
      <form className={s["form"]}>
        <p>Let's start shopping</p>
          <AuthForm />
      </form>
    </div>
  )
}

export default SignUpPage
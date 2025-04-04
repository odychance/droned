import s from './styles.module.scss'
import bgImage from '/src/assets/images/real-images/drone4.webp'
import Image from 'next/image'
import { AuthForm } from '/src/components'
import { useState } from 'react'


const SignUpPage = () => {
  const [ userInfo, setUserInfo ] = useState({})
  console.log(userInfo)
  return (
    <div className={s["container-page"]}>
      <Image src={bgImage} className={s["bg-image"]} alt="bg image" />
      <form className={s["form"]}>
        <p>Register now!</p>
          <AuthForm registerForm setUserInfo={setUserInfo} />
      </form>
    </div>
  )
}

export default SignUpPage
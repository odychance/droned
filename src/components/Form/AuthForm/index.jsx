import { useEffect, useState } from 'react'
import s from './styles.module.scss'
import Input from '/src/components/Input'
import { Button } from '/src/components'
import { Alert } from '/src/components'

const AuthForm = ({ registerForm, setUserInfo }) => {
  const [ name, setName ] = useState("")
  const [ lastname, setLastname ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ repeatEmail, setRepeatEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ repeatPassword, setRepeatPassword ] = useState("")
  const [ birthdayDate, setBirthdayDate ] = useState({ month: "", day: "", year: "" })
  const [ alert, setAlert ] = useState(false)

  const userData = { 
    name, 
    lastname,
    email,
    password,
    birthdayDate,
    id: Date.now() + Math.floor(Math.random() * 1000)
  }

  const registerUser = () => setUserInfo(userData)

  useEffect(() => {
    if(registerForm) {
      setAlert(email !== repeatEmail && email !== "")
      setTimeout(() => {
        setAlert(false)
      }, 3000);
    }
  }, [email, repeatEmail, registerForm])

  
  useEffect(() => {
    if(registerForm) {
      setAlert(password !== repeatPassword && password !== "")
      setTimeout(() => {
        setAlert(false)
      }, 3000);
    }
  }, [password, repeatPassword, registerForm])



  return (
    <div className={s["personal-container"]}>
      { registerForm &&
        <section className={s["section"]}>
          <label className={s["label"]}>Name</label>
          <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
        </section>
      }
      { registerForm &&
        <section className={s["section"]}>
          <label className={s["label"]}>Lastname</label>
          <Input placeholder="Lastname" value={lastname} onChange={(e) => setLastname(e.target.value)}/>
        </section> 
      }
      <section className={s["section"]}>
        <label className={s["label"]}>Email</label>
        <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      </section>
      { registerForm &&
        <section className={s["section"]}>
          <label className={s["label"]}>Repeat Email</label>
          <Input placeholder="Email" value={repeatEmail} onChange={(e) => setRepeatEmail(e.target.value)}/>
        </section>
      }

      { alert && <Alert>Email not match</Alert>}

      <section className={s["section"]}>
        <label className={s["label"]}>Password</label>
        <Input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      </section>
      { registerForm &&
        <section className={s["section"]}>
          <label className={s["label"]}>Repeat Password</label>
          <Input placeholder="Password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)}/>
        </section>
      }

      { alert && <Alert>Passwords don't match</Alert>}

      { registerForm &&
          <section className={s["section"]}>
            <label className={s["label"]}>Birthday day</label>
            <section className={s["birthday-input"]}>
              <Input placeholder="MM" value={birthdayDate.month} onChange={(e) => setBirthdayDate(prev => ({ ...prev, month: e.target.value }))} maxLength={2} type="number" />
              <Input placeholder="DD" value={birthdayDate.day} onChange={(e) => setBirthdayDate(prev => ({ ...prev, day: e.target.value }))} maxLength={2} type="number" /> 
              <Input placeholder="YYYY" value={birthdayDate.year} onChange={(e) => setBirthdayDate(prev => ({ ...prev, year: e.target.value }))} maxLength={4} type="number" min={1900}/>
            </section>
          </section>
      }
      {registerForm &&  <Button orangeColor onClick={() => registerUser()}>Sign up</Button>}
      {!registerForm && <Button orangeColor>Login</Button>}
    </div>
  )
}

export default AuthForm
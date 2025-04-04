import s from './styles.module.scss'
import Image from 'next/image';
import Logo from '/src/assets/svg/logo.svg';
import Bag from '/src/assets/svg/bag.svg'
import User from '/src/assets/svg/user.svg'
import Like from '/src/assets/svg/heart.svg'
import Search from '/src/assets/svg/search.svg'
import { Button, ButtonLink } from '/src/components';
import clsx from 'clsx';

const index = ({children}) => {
  return (
    <div>
      <div className={s["container-navbar"]}>
        <ButtonLink href="/" className={s["btnLogo"]}>
          <Image src={Logo} className={s["logo"]} alt="logo" href="/"/>
        </ButtonLink>
        <div className={s["container-center-buttons"]}>
          <Button className={s["button"]}><ButtonLink href="/"><span className={s["text-btn"]}>Home</span></ButtonLink></Button>
          <Button href="/collection" className={s["button"]}><ButtonLink href="/collection"><span className={s["text-btn"]}>Collection</span></ButtonLink></Button>
          {/* <Button className={clsx(s["button"], s["offBtn"])}><span className={s["text-btn"]}>Design</span></Button>
          <Button className={clsx(s["button"], s["offBtn"])}><span className={s["text-btn"]}>Blog</span></Button>
          <Button className={clsx(s["button"], s["offBtn"])}><span className={s["text-btn"]}>Service</span></Button> */}
        </div>
        {/* <div className={s["container-right-buttons"]}>
          <Image src={Search} className={s["icon"]} alt="icon"/>
          <Image src={User} className={s["icon"]} alt="icon"/>
          <Image src={Like} className={s["icon"]} alt="icon"/>
          <Image src={Bag} className={s["icon"]} alt="icon"/>
        </div> */}
      </div>
      {children}
    </div>
  )
}

export default index
import s from "./styles.module.scss"
import Hero from "./Hero"
import { MAIN_DRONE } from "/src/utils/constants"
import { Description, CallToAction, StoreTrust, DronePhotos, Loader } from "/src/components"

const HomePage = () => {
  return (
    <div className={s["container-home-page"]} >
      <Loader>
        <Hero MAIN_DRONE={MAIN_DRONE}/>
        <Description
          title="Our most selled drone"
          drones={MAIN_DRONE}
          />
        <CallToAction cta="Watch drones" />
        <DronePhotos />
        <StoreTrust />
      </Loader>
    </div>
  )
}

export default HomePage
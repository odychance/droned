import '/src/theme/global.scss'
import { Navbar, Footer } from '/src/components'
import { SmothScroll } from '/src/hook';
import { useEffect, useState } from 'react';


function MyApp({ Component, pageProps }) {
  const [ fullPath, setFullPath ] = useState("")

  useEffect(() => {
      const path = window?.location.pathname;
      setFullPath(path)

  }, [])

  
  const isAuthPage = fullPath === "/sign-up" || fullPath === "/login"

  return( 
    <SmothScroll>
      { isAuthPage && (
        <Component {...pageProps} />
      )}
      { !isAuthPage && (
        <>
          <Navbar/>
          <Component {...pageProps} />
          <Footer />
        </>
      )}
    </SmothScroll>
  )
}

export default MyApp

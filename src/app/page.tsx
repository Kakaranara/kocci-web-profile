import Image from 'next/image'
import styles from './page.module.css'
import welcomeImage from './../assets/images/welcome-frame.png'
import { NavBar } from './component/navbar'
import SocialMedia from './component/social-media'
import strings from "../assets/strings/intro.json"

export default function Home() {
  const intro: string = strings.intro
  const headerIntro : string = strings.header
  return (
    <>
      <div className={styles.main}>
        <NavBar />
        <main>
          <div className={styles.welcome}>
            <div className={styles.introduction}>
              <h1>{headerIntro}</h1>
              <p>{intro}</p>
              <SocialMedia />
            </div>
            <div className={styles.image}>
              <Image
                src={welcomeImage}
                alt=''
                width={200}
                height={400}
              />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

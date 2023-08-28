import Image from 'next/image'
import styles from './page.module.css'
import welcomeImage from './../assets/images/welcome-frame.png'
import { NavBar } from './component/navbar'
import SocialMedia from './component/social-media'
import strings from "../assets/strings/intro.json"
import Dashboard from './component/dashboard'
import MyProject from './component/project'

export default function Home() {
  return (
    <>
      <NavBar/>
      <Dashboard/>
      <MyProject/>
    </>
  )
}

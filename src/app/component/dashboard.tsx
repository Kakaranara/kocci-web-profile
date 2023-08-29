import Image from 'next/image'
import welcomeImage from './../../assets/images/welcome-frame.png'
import strings from "../../assets/strings/intro.json"
import SocialMedia from './social-media'
import textStyle from "./../../styles/text-util.module.css"

export default function Dashboard() {
    const intro: string = strings.intro
    const headerIntro: string = strings.header
    return (
        <div className='mt-12'>
            <h1 className={textStyle.headlineMobile} >{headerIntro}</h1>
            <div className='flex flex-row'>
                <div className='flex flex-col justify-start w-4/6 pr-10'>
                    <h1 className={textStyle.headline}>{headerIntro}</h1>
                    <p className={textStyle.description}>{intro}</p>
                    <SocialMedia />
                </div>
                <div className='flex justify-end items-start w-2/6'>
                    <Image className='lg:h-full'
                        src={welcomeImage}
                        alt='handphone img'
                        width={0}
                        height={0} />
                </div>
            </div>
            <span className='mt-8 block border-b-2'></span>
        </div>
    )
}

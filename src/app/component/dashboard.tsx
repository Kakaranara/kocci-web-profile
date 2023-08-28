import Image from 'next/image'
import welcomeImage from './../../assets/images/welcome-frame.png'
import strings from "../../assets/strings/intro.json"
import SocialMedia from './social-media'

export default function Dashboard() {
    const intro: string = strings.intro
    const headerIntro: string = strings.header
    return (
        <>
            <div className='flex flex-row mt-12'>
                <div className='flex flex-col justify-start w-4/6'>
                    <h1 className='whitespace-pre-wrap font-bold text-5xl'>{headerIntro}</h1>
                    <br/>
                    <p className='whitespace-pre-wrap text-md gap-10'>{intro}</p>
                    <SocialMedia />

                </div>
                <div className='flex justify-end w-2/6'>
                    <Image src={welcomeImage}
                        alt='handphone img'
                        width={0}
                        height={0} />
                </div>
            </div>
            <span className='mt-8 block border-b-2'></span>
        </>
    )
}

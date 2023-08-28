import Image, { StaticImageData } from 'next/image'
import waImg from '../../assets/images/icon/wa.png'
import instagramImg from '../../assets/images/icon/instagram.png'
import linkedinImg from '../../assets/images/icon/linkedin.png'

export default function SocialMedia() {
    const iconSize: number = 36
    const listIcon: Array<StaticImageData> = [linkedinImg, instagramImg, waImg]
    return (
        <div className='flex flex-row gap-2 mt-2'>
            {listIcon.map((item: StaticImageData) => (
                <Image className='cursor-pointer'
                    key={`${item}`}
                    alt=""
                    src={item}
                    width={iconSize}
                    height={iconSize}
                />
            ))}
        </div>
    )
}
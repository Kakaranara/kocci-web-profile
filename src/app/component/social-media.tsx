import Image, { StaticImageData } from 'next/image'
import waImg from '../../assets/images/icon/wa.png'
import instagramImg from '../../assets/images/icon/instagram.png'
import linkedinImg from '../../assets/images/icon/linkedin.png'

export default function SocialMedia() {
    const iconSize: number = 36
    const listIcon: Array<StaticImageData> = [linkedinImg, instagramImg, waImg]
    return (
        <div style={{ display: "flex", flexDirection: "row", gap: 6 }}>
            {listIcon.map((item : StaticImageData) => (
                <Image
                    alt=""
                    src={item}
                    width={iconSize}
                    height={iconSize}
                />
            ))}
        </div>
    )
}
'use client';
import Image, { StaticImageData } from 'next/image'
import waImg from '../../assets/images/icon/wa.png'
import instagramImg from '../../assets/images/icon/instagram.png'
import linkedinImg from '../../assets/images/icon/linkedin.png'
import { MouseEventHandler } from 'react';
import Link from 'next/link';

export default function SocialMedia() {
    const iconSize: number = 36
    const socmedList: Array<{ image: StaticImageData, name: string, link: string }> = [
        { image: linkedinImg, name: "Linkedin", link: "https://www.linkedin.com/in/wahyu-koco/" },
        { image: instagramImg, name: "Instagram", link: "https://www.instagram.com/wahyu_koco224/" },
        { image: waImg, name: "Whatsapp", link: "https://wa.me/6283872155420" }
    ]
    return (
        <div className='flex flex-row gap-2 mt-4'>
            {socmedList.map((data) => (
                <div>
                    <a target='_blank' href={data.link} rel="noopener noreferrer">
                        <Image className='cursor-pointer hover:scale-125 transition'
                            key={`${data.name}`}
                            alt={`${data.name} icon`}
                            src={data.image}
                            width={iconSize}
                            height={iconSize}
                        />
                    </a>
                </div>
            ))}
        </div>
    )
}
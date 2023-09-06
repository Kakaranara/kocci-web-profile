import Image, { StaticImageData } from "next/image"
import textStyle from "./../../../styles/text-util.module.css"
import { randomUUID } from "crypto"
import Link from "next/link"

export default function ProjectCard(props: {
    title: string,
    overviewDesc: string,
    portofolioGif: StaticImageData,
    portofolioLink: string
}) {
    const { title, overviewDesc, portofolioGif, portofolioLink } = props

    const renderLink = () => {
        if (portofolioLink.startsWith("http")) {
            return (
                <a target='_blank' href={portofolioLink} rel="noopener noreferrer" className="text-blue-600">
                    Source code Link
                </a>
            );
        } else {
            return <p className="text-gray-600">{portofolioLink}</p>
        }
    }

    return (
        <div className="flex flex-col md:flex-row md:justify-center items-center gap-6 mt-20 cursor-pointer active:bg-gray-300 active:rounded-2xl transition duration-500">
            <div className="flex flex-col flex-1 w-4/6">
                <h1 className={textStyle.title}>{title}</h1>
                <h4 className={textStyle.description}>{overviewDesc}</h4>
                {renderLink()}
            </div>
            <div className="w-2/6 flex flex-col items-end">
                <div className="border-[5px] border-gray-50 rounded-2xl overflow-hidden">
                    <Image className="rounded-sm"
                        key={randomUUID()}
                        src={portofolioGif}
                        width={0}
                        height={500}
                        alt="s" />
                </div>
            </div>
        </div>
    )
}
import Image, { StaticImageData } from "next/image"
import textStyle from "./../../../styles/text-util.module.css"
import { randomUUID } from "crypto"

export default function ProjectCard(props: {
    title: string,
    overviewDesc: string,
    portofolioGif : StaticImageData 
}) {
    const {title, overviewDesc, portofolioGif: image} = props
    return (
        <div className="flex flex-col md:flex-row md:justify-center items-center gap-6 mt-12 cursor-pointer">
            <div className="flex flex-col flex-1 w-4/6">
                <h1 className={textStyle.title}>{title}</h1>
                <h4 className={textStyle.description}>{overviewDesc}</h4>
            </div>
            <div className="w-2/6">
                <Image className="md:w-1/2 ml-auto"
                    key={randomUUID()}
                    src={image}
                    width={0}
                    height={0}
                    alt="s" />
            </div>
        </div>
    )
}
import Image, { StaticImageData } from "next/image"
import textStyle from "./../../../styles/text-util.module.css"
import { randomUUID } from "crypto"
import Link from "next/link"
import { AiOutlineArrowRight } from "react-icons/ai"

export default function ProjectCard(props: {
    title: string,
    overviewDesc: string,
    portofolioGif: StaticImageData,
    portofolioLink: string,
    nextProjectId: string | null,
}) {
    const { title, overviewDesc, portofolioGif, portofolioLink, nextProjectId } = props

    const renderLink = () => {
        if (portofolioLink.startsWith("http")) {
            return (
                <a target='_blank' href={portofolioLink} rel="noopener noreferrer" className="text-blue-600 text-base">
                    Source code Link
                </a>
            );
        } else {
            return <p className="text-gray-600">{portofolioLink}</p>
        }
    }

    const renderNextProject = () => {
        if (nextProjectId != null) {
            return (
                <div className="w-fit mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    <a href={nextProjectId} className="flex flex-row items-center scroll-smooth">
                        <h1 className="mr-2">Go to next project</h1>
                        <AiOutlineArrowRight />
                    </a>
                </div>
            )
        }
    }

    return (
        <div id={title} className="flex flex-col md:flex-row md:justify-center items-center gap-6 mt-20 cursor-pointer active:bg-gray-300 active:rounded-2xl transition duration-500">
            <div className="flex flex-col flex-1 w-full md:w-4/6">
                <h1 className={textStyle.title}>{title}</h1>
                <h4 className={`${textStyle.description} mt-4`}>{overviewDesc}</h4>
                {renderLink()}
                {renderNextProject()}
            </div>
            <div className=" w-full md:w-2/6 flex flex-col items-start md:items-end">
                <div className="border-[4px] border-gray-100 w-[70%] rounded-2xl overflow-hidden shadow-[15px_15px_30px_-15px_rgba(0,0,0,0.3)]">
                    <Image className="rounded-sm w-full"
                        key={randomUUID()}
                        src={portofolioGif}
                        width={0}
                        height={0}
                        alt="Portofolio Showcase.gif" />
                </div>
            </div>
        </div>
    )
}
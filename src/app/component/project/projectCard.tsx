import Image from "next/image"
import linkedinImg from '../../../assets/images/icon/linkedin.png'
import textStyle from "./../../../styles/text-util.module.css"
import { randomBytes, randomUUID } from "crypto"

export default function ProjectCard() {
    return (
        <div className="flex flex-col md:flex-row md:justify-center items-center gap-6 mt-12">
            <div className="flex flex-col flex-1 w-4/6 md:mx-24">
                <h1 className={textStyle.title}>Healtikuy</h1>
                <h4 className={textStyle.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatum molestiae aliquam repellendus optio labore voluptatibus iusto illum animi incidunt, laudantium mollitia eum expedita sint totam, sapiente, soluta quam dolorum!</h4>
            </div>
            <div className="w-2/6">
                <Image className="md:w-1/2"
                    key={randomUUID()}
                    src={linkedinImg}
                    width={0}
                    height={0}
                    alt="s" />
            </div>
        </div>
    )
}
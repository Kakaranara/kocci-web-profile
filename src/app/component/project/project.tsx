import Image from "next/image"
import textStyles from "./../../../styles/text-util.module.css"
import linkedinImg from '../../../assets/images/icon/linkedin.png'
import textStyle from "./../../../styles/text-util.module.css"
import ProjectCard from "./projectCard"
import { randomUUID } from "crypto"
import strings from "../../../assets/strings/intro.json"

export default function MyProject() {
    const projects = strings.project;
    return (
        <div className="mt-4">
            <div id="project">
                <h1 className={textStyles.headline}>Projects</h1>
                <div className="flex flex-col">
                    {projects.map((item) => (
                        <ProjectCard
                            overviewDesc={item.overview}
                            title={item.title}
                            portofolioGif={linkedinImg} //still debug
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
import textStyles from "./../../../styles/text-util.module.css"
import ProjectCard from "./projectCard"
import strings from "../../../assets/strings/intro.json"
import healtikuy from "../../../../public/portofolio-gif/Healtikuy.gif"
import disasterTracker from "../../../../public/portofolio-gif/Disaster Tracker.gif"
import bisaDesign from "../../../../public/portofolio-gif/Bisa Design.gif"
import petCare from "../../../../public/portofolio-gif/Pet Care.gif"

export default function MyProject() {
    const projects = strings.project;
    const getPortofolioGif = (title : string) => {
        switch (title) {
          case "Healtikuy":
            return healtikuy;
          case "Disaster Tracker":
            return disasterTracker;
          case "Bisa Design Academy":
            return bisaDesign;
          case "Pet Care":
            return petCare;
          default:
            // Handle any other cases or provide a default image
            throw TypeError()
        }
      };
    return (
        <div className="mt-4">
            <div id="project">
                <h1 className={textStyles.headline}>Projects</h1>
                <div className="flex flex-col">
                    {projects.map((item) => (
                        <ProjectCard
                            overviewDesc={item.overview}
                            title={item.title}
                            portofolioGif={getPortofolioGif(item.title)} 
                            portofolioLink={item.repositoryLink}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
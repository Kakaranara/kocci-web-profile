import textStyles from "./../../../styles/text-util.module.css"
import ProjectCard from "./projectCard"
import strings from "../../../assets/strings/intro.json"
import healtikuy from "../../../../public/portofolio-gif/Healtikuy.gif"
import disasterTracker from "../../../../public/portofolio-gif/Disaster Tracker.gif"
import bisaDesign from "../../../../public/portofolio-gif/Bisa Design.gif"
import petCare from "../../../../public/portofolio-gif/Pet Care.gif"

export default function MyProject() {
  const projects = strings.project;
  const getPortofolioGif = (title: string) => {
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

  const getNextPorjectId = (index: number) => {
    try {
      return `#${projects[index + 1].title}`
    } catch (e) {
      return null;
    }
  }

  return (
    <div className="mt-4">
      <div id="project">
        <div className="flex flex-col">
          {projects.map((item, index) => (
            <ProjectCard
              overviewDesc={item.overview}
              title={item.title}
              portofolioGif={getPortofolioGif(item.title)}
              portofolioLink={item.repositoryLink}
              nextProjectId={getNextPorjectId(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
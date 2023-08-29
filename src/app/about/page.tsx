import { NavBar } from "../component/navbar"
import textStyles from "./../../styles/text-util.module.css"

export default function AboutScreen() {
    return (
        <>
            <NavBar />
            <h1 className={textStyles.headline}>About me</h1>
        </>
    );
}
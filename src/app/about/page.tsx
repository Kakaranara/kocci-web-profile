import { NavBar } from "../component/navbar"
import textStyles from "./../../styles/text-util.module.css"
import strings from "../../assets/strings/intro.json"
import selfPhoto from "../../assets/images/fijazah.png"
import Image from "next/image";

export default function AboutScreen() {
    return (
        <>
            <NavBar canBackHome={true} />
            <div className="mt-12">
                <h1 className={textStyles.headline}>Hello fellas!</h1>
                <div className="flex flex-col md:flex-row gap-12">
                    <div className="w-full md:w-1/2 order-2 md:order-1">
                        <p className="whitespace-pre-wrap text-lg">{strings.aboutMe}</p>
                    </div>
                    <div className="md:w-1/2 order-1 md:order-2">
                        <Image src={selfPhoto}
                            width={0}
                            height={0}
                            alt="Self Photo" />
                    </div>
                </div>

            </div>
        </>
    );
}
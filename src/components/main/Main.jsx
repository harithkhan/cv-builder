import "../../styles/Main.css"
import GeneralInfo from "./General-info"
import Experience from "./Experience"
import Education from "./Education"

export default function Main() {
    return (
        <>
            <div className="cv-container">
                <GeneralInfo />
                <Experience />
                <Education />
            </div>
        </>
    )
}
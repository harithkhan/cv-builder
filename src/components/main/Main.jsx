import "../../styles/Main.css"
import GeneralInfo from "./General-info"
import Experience from "./Experience"

export default function Main() {
    return (
        <>
            <div className="cv-container">
                <GeneralInfo />
                <Experience />
            </div>
        </>
    )
}
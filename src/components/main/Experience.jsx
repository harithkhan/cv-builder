import "../../styles/Experience.css";
import EditButton from "./Edit-button";

export default function Experience() {
    return (
        <div className="experience-section">
            <h2 className="experience-header">Experience</h2>
            <div className="experience-container">
                <div className="experience-title-container">
                    <h3 className="experience-organization">IHG College,
                        <span className="experience-location"> Kuala Lumpur</span>
                        <span className="experience-designation"> - Director</span>
                    </h3>
                    <EditButton />
                </div>
                <p className="start-date">September 2018<span className="end-date"> - Present</span></p>
                <ul className="experience-bullets-container">
                    <li className="experience-bullets">Advised and facilitated the successful acquisition of the college (legal and financial due diligence) into family business.</li>
                    <li className="experience-bullets">Increased student body to 400 +/- through management of marketing and recruitment teams.</li>
                </ul>
            </div>
        </div>
    )
}
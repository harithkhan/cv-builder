import "../../styles/General-info.css";
import EditButton from "./Edit-button";

export default function GeneralInfo() {
    return (
        <div className="general-info-container">
            <div className="general-info-left">
                <div className="cv-title-container">
                    <h2 className="cv-title">Harith Khan</h2>
                    <EditButton />
                </div>
                <p className="summary">Indie developer with an interest in b2b web development. Gym and restauranting in free time.</p>
            </div>
            <div className="general-info-right">
                <p className="phone-number">60163365111</p>
                <p className="email">harith.akma@dontudare.com</p>
                <p className="address-line-1">25, Jalan 8/152A</p>
                <p className="address-line-2">Bukit Halil</p>
                <p className="postcode">57000, <span className="state">Kuala Lumpur</span></p>
                <p className="country">Malaysia</p>
            </div>
            <hr className="general-info-break" />
        </div>
    )
}
import "../../styles/General-info.css";

export default function GeneralInfo() {
    return (
        <div className="general-info-container">
            <h2 className="cv-title">Harith Khan</h2>
            <p className="phone-number">60163365111</p>
            <p className="email">harith.akma@dontudare.com</p>
            <p className="address-line-1">25, Jalan 8/152A</p>
            <p className="address-line-2">Bukit Halil</p>
            <p className="postcode">57000, <span className="state">Kuala Lumpur</span></p>
            <p className="country">Malaysia</p>
            <button className="edit-general-info-button">Edit</button>
        </div>
    )
}
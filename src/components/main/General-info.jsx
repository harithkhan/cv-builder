import "../../styles/General-info.css";
import EditButton from "./Edit-button";
import ConfirmButton from "./Confirm-button";
import { useState } from "react";

export default function GeneralInfo() {
    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [cvTitle, setCvTitle] = useState("Harith Khan");
    const [inputValue, setInputValue] = useState(cvTitle);

    function handleEditClick() {
        setIsEditingTitle(true);
    }

    function handleCVTitleFormSubmit(event) {
        event.preventDefault();
        setCvTitle(inputValue);
        setIsEditingTitle(false);
    }

    return (
        <div className="general-info-container">
            <div className="general-info-left">
                <div className="cv-title-container">
                    {isEditingTitle ? (
                        <>
                            <form className="cv-title-form" onSubmit={handleCVTitleFormSubmit}>
                                <input
                                    type="text"
                                    value={inputValue}
                                    className="cv-title-input"
                                    onChange={(event) => setInputValue(event.target.value)}
                                    autoFocus
                                />
                            </form>
                            <ConfirmButton onClick={handleCVTitleFormSubmit}/>
                        </>
                    ): (
                        <>
                            <h2 className="cv-title">{cvTitle}</h2>
                            <EditButton onClick={handleEditClick}/>
                        </>
                    )}
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
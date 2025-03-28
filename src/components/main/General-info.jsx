import "../../styles/General-info.css";
import EditButton from "./Edit-button";
import ConfirmButton from "./Confirm-button";
import CancelButton from "./Cancel-button";
import { useState } from "react";

export default function GeneralInfo() {
    // Title State
    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [cvTitle, setCvTitle] = useState("Harith Khan");
    const [titleInputValue, setTitleInputValue] = useState(cvTitle);

    // Summary State
    const [isEditingSummary, setIsEditingSummary] = useState(false);
    const [summary, setSummary] = useState("Indie developer with an interest in b2b web development. Gym and restauranting in free time.");
    const [summaryInputValue, setSummaryInputValue] = useState(summary);

    // Title Functions
    function handleEditTitleClick() {
        setIsEditingTitle(true);
    }
    function handleCVTitleFormSubmit(event) {
        event.preventDefault();
        setCvTitle(titleInputValue);
        setIsEditingTitle(false);
    }
    function handleCancelTitleClick() {
        setIsEditingTitle(false);
    }

    // Summary Functions
    function handleEditSummaryClick() {
        setIsEditingSummary(true);
    }
    function handleSummaryFormSubmit(event) {
        event.preventDefault();
        setSummary(summaryInputValue);
        setIsEditingSummary(false);
    }
    function handleSummaryCancelClick() {
        setIsEditingSummary(false);
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
                                    value={titleInputValue}
                                    className="cv-title-input"
                                    onChange={(event) => setTitleInputValue(event.target.value)}
                                    autoFocus
                                />
                            </form>
                            <ConfirmButton onClick={handleCVTitleFormSubmit}/>
                            <CancelButton onClick={handleCancelTitleClick}/>
                        </>
                    ): (
                        <>
                            <h2 className="cv-title">{cvTitle}</h2>
                            <EditButton onClick={handleEditTitleClick}/>
                        </>
                    )}
                </div>
                {isEditingSummary ? (
                    <form onSubmit={handleSummaryFormSubmit} className="summary-form">
                        <textarea
                        value={summaryInputValue}
                        className="summary-input"
                        onChange={(event) => setSummaryInputValue(event.target.value)}
                        autoFocus
                        rows={4}
                        />
                        <div className="summary-button-container">
                            <ConfirmButton onClick={handleSummaryFormSubmit}/>
                            <CancelButton onClick={handleSummaryCancelClick}/>
                        </div>
                    </form>
                ) : 
                    <div className="summary-container">
                        <p className="summary">{summary}</p>
                        <EditButton onClick={handleEditSummaryClick}/>
                    </div>
                }
            </div>
            <div className="general-info-right">
                <div className="misc-info-container">
                    <p className="phone-number">60163365111</p>
                    <p className="email">harith.akma@dontudare.com</p>
                    <p className="address-line-1">25, Jalan 8/152A</p>
                    <p className="address-line-2">Bukit Halil</p>
                    <p className="postcode">57000, <span className="state">Kuala Lumpur</span></p>
                    <p className="country">Malaysia</p>
                </div>
                <EditButton />
            </div>
            <hr className="general-info-break" />
        </div>
    )
}
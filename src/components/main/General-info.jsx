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

    // General Info State
    const [isEditingGeneralInfo, setIsEditingGeneralInfo] = useState(false);
    const [phone, setPhone] = useState("+60163365111");
    const [phoneInputValue, setPhoneInputValue] = useState(phone);
    const [email, setEmail] = useState("harith@dontudare.com");
    const [emailInputValue, setEmailInputValue] = useState(email);
    const [addressLineOne, setAddressLineOne] = useState("24, Jalan 151A");
    const [addressLineOneInputValue, setAddressLineOneInputValue] = useState(addressLineOne);
    const [addressLineTwo, setAddressLineTwo] = useState("Bukit Jalil");
    const [addressLineTwoInputValue, setAddressLineTwoInputValue] = useState(addressLineTwo);
    const [postCode, setPostCode] = useState("57000");
    const [postCodeInputValue, setPostCodeInputValue] = useState(postCode);
    const [city, setCity] = useState("Kuala Lumpur");
    const [cityInputValue, setCityInputValue] = useState(city);
    const [country, setCountry] = useState("Malaysia");
    const [countryInputValue, setCountryInputValue] = useState(country);

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

    // General Info Functions
    function handleEditGeneralInfoClick() {
        setIsEditingGeneralInfo(true);
    }
    function handleGeneralInfoFormSubmit(event) {
        event.preventDefault();
        setPhone(phoneInputValue);
        setEmail(emailInputValue);
        setAddressLineOne(addressLineOneInputValue);
        setAddressLineTwo(addressLineTwoInputValue);
        setPostCode(postCodeInputValue);
        setCity(cityInputValue);
        setCountry(countryInputValue);
        setIsEditingGeneralInfo(false);
    }
    function handleGeneralInfoCancelClick() {
        setIsEditingGeneralInfo(false);
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
                {isEditingGeneralInfo ? (
                    <form className="general-info-form" onSubmit={handleGeneralInfoFormSubmit}>
                        <input
                            type="tel"
                            value={phoneInputValue}
                            className="phone-input"
                            onChange={(event) => setPhoneInputValue(event.target.value)}
                            autoFocus
                        />
                        <input
                            type="email"
                            value={emailInputValue}
                            className="email-input"
                            onChange={(event) => setEmailInputValue(event.target.value)}
                        />
                        <input
                            type="text"
                            value={addressLineOneInputValue}
                            className="address-line-one-input"
                            onChange={(event) => setAddressLineOneInputValue(event.target.value)}
                        />
                        <input
                            type="text"
                            value={addressLineTwoInputValue}
                            className="address-line-two-input"
                            onChange={(event) => setAddressLineTwoInputValue(event.target.value)}
                        />
                        <input
                            type="tel"
                            value={postCodeInputValue}
                            className="postcode-input"
                            onChange={(event) => setPostCodeInputValue(event.target.value)}
                        />
                        <input
                            type="text"
                            value={cityInputValue}
                            className="city-input"
                            onChange={(event) => setCityInputValue(event.target.value)}
                        />
                        <input
                            type="text"
                            value={countryInputValue}
                            className="country-input"
                            onChange={(event) => setCountryInputValue(event.target.value)}
                        />
                        <div className="general-info-form-button-container">
                            <ConfirmButton onClick={handleGeneralInfoFormSubmit}/>
                            <CancelButton onClick={handleGeneralInfoCancelClick}/>
                        </div>
                    </form>
                ): (
                    <>
                        <div className="misc-info-container">
                            <p className="phone-number">{phone}</p>
                            <p className="email">{email}</p>
                            <p className="address-line-1">{addressLineOne}</p>
                            <p className="address-line-2">{addressLineTwo}</p>
                            <p className="postcode">{postCode}<span className="state">, {city}</span></p>
                            <p className="country">{country}</p>
                        </div>
                        <EditButton onClick={handleEditGeneralInfoClick}/>
                    </>
                )
                }
            </div>
            <hr className="general-info-break" />
        </div>
    )
}
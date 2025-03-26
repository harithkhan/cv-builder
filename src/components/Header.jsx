import "../styles/Header.css";
import cvIcon from "../assets/cv.png"

export default function Header() {
    return (
        <>
            <header>
                <img 
                    alt=""
                    src={cvIcon}
                    className="header-icon"
                />
                <h1>CV Builder</h1>
            </header>
        </>
    )
}
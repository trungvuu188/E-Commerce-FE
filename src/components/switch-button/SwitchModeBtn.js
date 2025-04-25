import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const SwitchModeBtn = ({isDark, toggleTheme}) => {

    return (
        <div onClick={() => toggleTheme()} className={isDark ? "switch-btn dark" : "switch-btn"}>
            <label htmlFor="checkbox" className="switch-checkbox-label">
                <FontAwesomeIcon icon="fa-solid fa-moon" className="fa-moon" />
                <FontAwesomeIcon icon="fa-solid fa-sun" className="fa-sun" />
                <span className="switch-ball"></span>
            </label>
        </div>
    )
}
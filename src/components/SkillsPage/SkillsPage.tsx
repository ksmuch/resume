import "./SkillsPage.less"
import { useState } from "react";
import Hard from "./Hard/Hard";
import Soft from "./Soft/Soft";

export default function SkillsPage() {
    let [isHard, setIsHard] = useState(true);
    let handleClick = () => {
        setIsHard(!isHard);
    }
    return (
        <section className={`skills-page ${isHard ? "" : "soft-style"}`}>
            <h2>НАВЫКИ</h2>
            <button onClick={handleClick}><span className="hard-switcher">HARD</span> / <span className="soft-switcher">SOFT</span></button>  
            {isHard ? <Hard /> : <Soft/>}
        </section>
    );
}
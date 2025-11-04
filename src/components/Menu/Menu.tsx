import "./Menu.less";
import IconMenu from "../../../public/assets/menu.svg?react";
import IconDownload from "../../../public/assets/download.svg?react";
import IconAbout from "../../../public/assets/about.svg?react";
import IconSkills from "../../../public/assets/skills.svg?react";
import IconExpirience from "../../../public/assets/experience.svg?react";
import IconEducation from "../../../public/assets/education.svg?react";
import { useState } from "react";


interface MenuProps {
  switchMenu: (page: string) => void;
  page: string;
}

export default function Menu({ switchMenu, page }: MenuProps) {
    let activeColor: string = "#00A66E";

    let [isOpen, setIsOpen] = useState(false);
    let handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
            <ul>
                <li>
                    <button onClick={handleClick}>
                        <IconMenu fill={activeColor} />
                        <h4>Скрыть</h4>
                    </button>
                </li>
                <li>
                    <button className={page === "about" ? "active" : ""} onClick={() => {switchMenu("about")}}>
                        <IconAbout />
                        <h4>Обо мне</h4>
                    </button>
                    <button className={page === "skills" ? "active" : ""} onClick={() => {switchMenu("skills")}}>
                        <IconSkills />
                        <h4>Навыки</h4>
                    </button>
                    <button className={page === "exp" ? "active" : ""} onClick={() => {switchMenu("exp")}}>
                        <IconExpirience />
                        <h4>Опыт</h4>
                    </button>
                    <button className={page === "education" ? "active" : ""} onClick={() => {switchMenu("education")}}>
                        <IconEducation />
                        <h4>Обучение</h4>
                    </button>
                </li>
                <li>
                    <a href="./assets/resume.pdf" download>
                        <button>
                            <IconDownload fill={activeColor} />
                            <h4>Скачать резюме</h4>
                        </button>
                    </a>
                </li>
            </ul>
        </nav>
    )
}
import "./Hard.less"

export default function Hard() {
    return (
        <ul className="hard">
            <li>
                <h3>HTML</h3>
                <ul className="hard-skills">
                    <li>Атрибуты</li>
                    <li>Семантика</li>
                    <li>Работа с формами</li>
                </ul>
            </li>
            <li>
                <h3>CSS</h3>
                <ul className="hard-skills">
                    <li>Flexbox и Grid</li>
                    <li>Адаптивная вёрстка</li>
                    <li>Анимации</li>
                    <li>Препроцессор LESS</li>
                </ul>
            </li>
            <li>
                <h3>JS</h3>
                <ul className="hard-skills">
                    <li>Структуры данных</li>
                    <li>Функции, замыкания</li>
                    <li>Асинхронность</li>
                    <li>TypeScript</li>
                </ul>
            </li>
            <li>
                <h3>REACT</h3>
                <ul className="hard-skills">
                    <li>Компоненты</li>
                    <li>JSX</li>
                    <li>Состояния</li>
                    <li>Передача данных</li>
                </ul>
            </li>
            <li>
                <h3>GIT</h3>
                <ul className="hard-skills">
                    <li>init, clone</li>
                    <li>commit, add</li>
                    <li>push, pull</li>
                    <li>reset</li>
                </ul>
            </li>
            <li>
                <h3>VITE</h3>
                <ul className="hard-skills">
                    <li>Опыт настройки<br></br>сборки проекта<br></br></li>
                </ul>
            </li>
            <li>
                <h3>FIGMA</h3>
                <ul className="hard-skills">
                    <li>Опыт создания<br></br>макетов<br></br>для проектов</li>
                </ul>
            </li>
            <li>
                <h3>ТАКЖЕ</h3>
                <ul className="hard-skills">
                    <li>GitHub<br></br>и знание синтаксиса:<br></br>Python и Rust</li>
                </ul>
            </li>
        </ul>
    )
}
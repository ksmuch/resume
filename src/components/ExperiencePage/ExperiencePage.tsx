import "./ExperiencePage.less"

export default function ExperiencePage() {
    return (
        <section className="experience-page">
            <h2>ОПЫТ</h2>
            <ul className="projects">
                <li>
                    <img src="./assets/proj_1.png" />
                    <div className="description">
                        <div>
                            <h3><a href="https://ksmuch.github.io/memory-game/">Memory-game (Desktop)</a></h3>
                            <p>Интерактивная веб-игра для улучшения визуальной памяти</p>
                            <p>Используемый стек:<br></br>HTML, CSS, JS, React, Git, Vite</p>
                        </div>
                        <a className="button" href="https://ksmuch.github.io/memory-game/">Перейти</a>
                    </div>
                </li>
                <li>
                    <img src="./assets/proj_2.png" />
                    <div className="description">
                        <div>
                            <h3><a href="#">Сайт-резюме (Adaptive)</a></h3>
                            <p>Свой сайт-резюме для практики создания адаптивной верстки</p>
                            <p>Используемый стек:<br></br>HTML, CSS + LESS, TS, React, Git, Vite, Figma</p>
                        </div>
                        <a className="button" href="#">Перейти</a>
                    </div>
                </li>
            </ul>
        </section>
    )
}
import "./AboutPage.less"

export default function AboutPage() {
    return (
        <section className="content">
            <section className="about">
                <h2>ОБО МНЕ</h2>
                <ul>
                    <li>20 лет</li>
                    <li>Москва</li>
                    <li>Полная занятость, стажировка</li>
                </ul>
                <p>Меня зовут Кирилл. Я начинающий frontend-разработчик, увлечённый созданием современных и удобных веб-интерфейсов. За последние полгода прошёл обучение по HTML, CSS и JavaScript, освоил основы React и регулярно выполняю учебные проекты для прокачки навыков. Особое внимание уделяю адаптивной верстке, чистоте кода и работе с макетами из Figma. В работе активно использую Git, Vite и современные подходы к организации фронтенд-проектов.</p>
                <p>Постоянно учусь новым технологиям и стремлюсь к росту, практикуюсь на реальных задачах из opensource и пет-проектов с запросами к API. Готов внести вклад в команду, быстро адаптируюсь к новым инструментам и люблю решать нестандартные задачи. Ценю командную работу, открыт к свежим идеям и профессиональной критике.</p>
            </section>
            <section className="contacts">
                <h2>КОНТАКТЫ</h2>
                <ul>
                    <li>
                        <a href="tel:+79867429372"><span>Телефон:</span> +7 (986) 742-93-72</a>
                    </li>
                    <li>
                        <a href="mailto:xislasis@gmail.com"><span>Почта:</span> xislasis@gmail.com</a>
                    </li>
                    <li>
                        <a href="https://web.telegram.org/k/#@Kirillersmuch"><span>Telegram:</span> @Kirillersmuch</a>
                    </li>
                </ul>
            </section>
        </section>
    );
}
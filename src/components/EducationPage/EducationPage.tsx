import "./EducationPage.less"

export default function EducationPage() {
    return (
        <section className="education">
            <h2>Образование</h2>
            <ul>
                <li>
                    <p><span>ВУЗ:</span> РГАУ-МСХА им. К. А. Тимирязева</p>
                </li>
                <li>
                    <p><span>Кафедра:</span> Прикладная информатика</p>
                </li>
                <li>
                    <p><span>Направление:</span> ИТ-решения для бизнеса</p>
                </li>
                <li>
                    <p><span>Курс:</span> 3</p>
                </li>
            </ul>
            <p>Также дополнительно проходил обучение на платформе HTML Academy на курсе с тренажёрами для начинающих. В ходе этого курса я с нуля познакомился с такими инструменатами, как HTML, CSS, JS и React. В конце обучения был реализован мой первый проект (<a href="https://ksmuch.github.io/memory-game/">Memory-game</a>), который был проверен и засчитан преподавателем. Ознакомиться с результатами прохождения можно <a href="https://htmlacademy.ru/profile/ksmuch">здесь</a>.</p>
        </section>
    )
}
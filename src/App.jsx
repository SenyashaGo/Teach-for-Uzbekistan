import Header_bottom from "./components/Header_bottom"
import Header_top from "./components/Header_top"
import FundValues from "./components/fundValues.jsx"

export default function App() {
  return (
    <div>
      <Header_top />
      <Header_bottom />
      <main>
        <section className="about container">
            <h2>Мы – некоммерческая организация, которая работает над расширением образовательных возможностей в Казахстане.</h2>
            <div className="about2">
                <div><img src="../public/img/1.jpg" alt=""/></div>
                <div className="about_text">
                    <p>
                    Мы приглашаем, отбираем, обучаем и сопровождаем <strong>учителей, молодых
                    и продвинутых специалистов</strong> из разных сфер деятельности, которые
                    хотят посвятить 2 года своей жизни преподаванию в школах с уязвимым контекстом.
                    </p>
                    <p>
                    Мы ищем <strong>ЛИДЕРОВ</strong>, которые смогут стать ролевой моделью <strong>ДЛЯ
                    ДЕТЕЙ</strong>,
                    тех, кто поможет <strong>РАСКРЫТЬ</strong> их <strong>ПОТЕНЦИАЛ</strong>,
                    станет для детей не просто учителем, а наставником и другом.
                    </p>
                </div>
            </div>
        </section>
        <section className="about_plus">
            <img src="../public/img/2.jpg" alt=""/>
            <h3 className="container">МЫ создаем вдохновленное <strong>СООБЩЕСТВО ЛИДЕРОВ</strong>, которое будет делиться с детьми
                своими знаниями, компетенциями, навыками и опытом, чтобы способствовать развитию детей в классе
                и развитию системы образования в целом.
            </h3>
        </section>
        <section className="container">
            <h2>Ценности Фонда</h2>
            <FundValues />
        </section>
      </main>
    </div>
  )
}

import ButtonLanguage from "./buttons/Button_languages"
import '../index.css'

export default function Header() {
    return (
      <div className="container_header headerTopBack">
        <div>
          <ButtonLanguage>Uzb</ButtonLanguage>
          <ButtonLanguage>Рус</ButtonLanguage>
          <ButtonLanguage>Eng</ButtonLanguage>
        </div>
        <div className="contacts">
          <a href="" className="social">
            <img src="/social network/Telegram icon.png" alt=""/>
          </a>
          <a href="" className="social">
            <img src="/social network/Telegram icon.png" alt="" />
          </a>
          <a href="" className="social">
            <img src="/social network/Telegram icon.png" alt="" />
          </a>
          <a href="" className="number">+7 777 777 7777</a>
        </div>
      </div>
      
    )
  }
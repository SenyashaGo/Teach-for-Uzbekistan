import logo from '../../public/img/logo.svg'
import { textHeader } from '../data'
import './Header_bottom.css'

function TextHeader( { description } ){
    return (
        <li>
            <a href="">
                {description}
            </a>
        </li>
    )
}

export default function Header_bottom() {
    return (
      <header>
        <div>
            <a href="#"><img src={logo} alt="logo"/></a>
        </div>
          <div className='header_description'>
            <ul>
                <TextHeader 
                description={textHeader[0].description}/>
                <TextHeader 
                description={textHeader[1].description}/>
                <TextHeader 
                description={textHeader[2].description}/>
                <TextHeader 
                description={textHeader[3].description}/>
                <TextHeader 
                description={textHeader[4].description}/>
            </ul>
            <div className='btn-auth'>
                <a className='auth' href="">Войти</a>
            </div>
        </div>
      </header>
    )
  }
import logo from '/logo.png'
import { textHeader } from '../data'
import './Header_bottom.css'

function TextHeader(props){
    return (
        <li>
            <a href="">
                {props.description}
            </a>
        </li>
    )
}

export default function Header() {
    return (
      <header>
        <div>
            <img src={logo} alt="logo" />
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
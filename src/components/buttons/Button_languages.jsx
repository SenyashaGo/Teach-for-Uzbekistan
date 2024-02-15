import './Button_languages.css'

export default function ButtonLanguage({ children }) {
function handleClick() {
    console.log('button clicked')
}

    return <button className='button' onClick={handleClick}>{ children }</button>
}
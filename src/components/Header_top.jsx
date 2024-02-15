import logo from '/logo.png'

export default function Header() {
    return (
      <header>
        <div className={`languages ${props.pressed && 'btn-pressed'}`}>
          <button>Uzb</button>
          <button>Рус</button>
          <button>Eng</button>
        </div>
      </header>
    )
  }
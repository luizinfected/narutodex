import { Link } from 'react-router-dom'
import './style.css'

function Header() {
    return (
        <header>
            <h1>N<span>arutoDex</span></h1>
            <div>
            <Link to="./">Home</Link>
            <Link to="./meu-time">Meu time</Link>
            </div>
        </header>
    )
}

export default Header
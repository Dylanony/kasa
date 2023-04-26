import "./header.css"
import { Link } from 'react-router-dom'

const getCurrentPath = () => {
    const {pathname} = window.location; 
    return pathname;
}

function Header() {
    return (
        <header>
            <div className="logo-nav">
                <div className="logo">
                    <img src="/logo.png" alt="logo kasa" />
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" className={`welcome ${getCurrentPath() === "/"?'active':''}`} >
                                <span>
                                    Accueil
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/propos" className={`about ${getCurrentPath() === "/propos"?'active':''}`} >
                                <span>
                                    A Propos
                                </span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    ) 
}
  
export default Header
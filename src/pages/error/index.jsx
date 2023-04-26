import "./error.css"
import { Link } from 'react-router-dom'
import Header from "../../component/header"
import Footer from "../../component/footer"


function Error() {
    return (
        <main>
            <Header/>
            <div className="contenant">
                <div className="code-error">
                    <h1>
                        404
                    </h1>
                </div>
                <div className="msg">
                    <p>
                        Oups! La page que vous demandez n'existe pas.
                    </p>
                </div>
                <div className="back">
                    <Link to="/">Retourner sur la page d’accueil</Link>
                </div>
            </div>
            <Footer/>
        </main>
    ) 
}
  
export default Error
import "./host.scss"

function Host({name,picture}) {
    return (
        <div className="container_host">
            <div className="name_host">
                <span>
                    {name}
                </span>
            </div>
            <div className="picture_host">
                <img src={picture} alt="Photo de profil" className="profil"/>
            </div>
        </div>
    ) 
}
  
export default Host
import "./collaps.scss"

function Collaps({title, description, _id, i}) {
    return (
        <div className="col">
            <div className="tabs">
                <div className="tab">
                    <input type="checkbox" id={_id}/>
                    <label className="tab-label" htmlFor={_id}>
                        {title}
                    </label>
                    <div className="tab-content">
                        <p>
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    ) 
}
  
export default Collaps
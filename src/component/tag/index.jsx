import "./tag.css"

function Tag({tag}) {
    return (
        <div className="tag">
            <span>
                {tag}
            </span>
        </div>
    ) 
}
  
export default Tag
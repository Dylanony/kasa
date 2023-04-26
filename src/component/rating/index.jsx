import "./rating.css"

function Rating({note}) {
    let stars = []
    for(let i=0;i<note;i++) {
        stars.push(<img src="/assets/star.png" className="star" alt="rating" />)
    }
    for(let i=note;i<5;i++) {
        stars.push(<img src="/assets/grey_star.png" className="star" alt="rating" />)
    }
    return (
        <div className="rating-container">
            <div className="red-star">
                {stars.map((star, index) => {
                    return <span key={index}>{star}</span> 
                })
                }
            </div>
        </div>
    ) 
}
  
export default Rating
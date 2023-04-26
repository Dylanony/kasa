import "./slideCarousel.css"

function SlideCarousel(props) {
    return (
        <div className="Slide_actif" style={{"display":props.actif?'block':'none'}} >
            {props.children}
        </div>
    ) 
}
  
export default SlideCarousel
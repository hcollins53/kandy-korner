import { Link } from "react-router-dom"

export const Location = ({id, address, squareFootage}) => {
    return (
    <section className="location">
    <div>  Address: {address} 
    </div>
    <div> 
     Square Footage: {squareFootage} 
    </div>
</section>
    )
}
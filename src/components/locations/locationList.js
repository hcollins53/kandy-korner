import { useEffect, useState } from "react"
import { getAllLocations } from "../ApiManager"
import { Location } from "./location"
import "./location.css"

export const LocationList = () => {
    const [locations, setLocations] = useState([])
    


const localKandyUser = localStorage.getItem("kandy_user")
const kandyUserObject = JSON.parse(localKandyUser)

useEffect(
    () => {
        getAllLocations()
         .then((locationArray) => {
            setLocations(locationArray)
         })
         // View the initial state of tickets
    },
    [] // When this array is empty, you are observing initial component state
)

return <>
    <h2>List of Locations</h2>
        <article className="locations">
            {
                locations.map(location => <Location key={location.id} id={location.id} address={location.address} squareFootage = {location.squareFootage}/>)
            }
        </article>
        </>


}


//Given that an employee wants to see a list of all products

///When the employees clicks on a Products link in the navbar

//Then a list of all products should be displayed, sorted by product name, with prices shown.
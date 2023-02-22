import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductLocations } from "../ApiManager"

export const LocationDetails = () => {
    const {productId} = useParams()
    const [location, updateLocation] = useState([])

    useEffect(
        () => {
           getProductLocations({productId})
                .then((data) => {
                   const productLocations = data
                   updateLocation(productLocations)
                })
        },
        [productId]
    )

    return <>
   {
    location.map((location) => {
        return <> 
        <div className="location">{alert(location?.location?.address)}</div>
        <div className="location">{location?.location?.address}</div>
    </>
     })
    
 }  
    </>
}
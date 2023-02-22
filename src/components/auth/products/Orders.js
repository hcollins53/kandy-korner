import { useEffect, useState } from "react"
import { getMyOrders } from "../../ApiManager"


export const MyOrders = () => {
    const [purchases, setPurchases] = useState([])
    const [newPurchases, setNewPurchases] = useState([])
    const localKandyUser = localStorage.getItem("kandy_user")
   const kandyUserObject = JSON.parse(localKandyUser)
   useEffect(
    () => {
        getMyOrders({kandyUserObject})
         .then((purchasesArray) => {
            setPurchases(purchasesArray)
         })
    },
    []
)

    useEffect( () => {
        let eachPurchases = []
        purchases.forEach(purchase => {
          let foundPurchase = eachPurchases.find((eachPurchase) => eachPurchase.productId === purchase.productId)
            console.log(foundPurchase)
            if(foundPurchase) {
                foundPurchase.amount ++
                foundPurchase.product.price += purchase.product.price
            }
            else {
                eachPurchases.push(purchase)
            }
            
        })
        setNewPurchases(eachPurchases)
    }, [purchases])
    return <>
    <table className="purchases">
        You've Purchased
        <tbody>
        <tr><td>Name</td><td>Amount</td><td>Price</td></tr>
        {
            newPurchases.map((purchase) => {
                return <>
                <tr className="purchase"><td>{purchase?.product?.name}</td><td>{purchase?.amount}</td><td>{purchase?.product?.price}</td>
                </tr>
            </>
            })
        }
        </tbody>
    </table>
    </>
}



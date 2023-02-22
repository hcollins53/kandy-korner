import { useEffect, useState } from "react"
import { getAllPurchases } from "../../ApiManager"
import { Customer } from "./customers"
import "./customers.css"


export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

   
    useEffect(
        () => {
         getAllPurchases().then((customerArray)=> {
           let sorted = customerArray.sort((a,b) => b.purchases.length - a.purchases.length)
            setCustomers(sorted)
         })
        },
        []   
    )
   
    return <>
        <article className="customers">Customer   
        <div className="candies"> Candies Bought</div> 
            {
                customers.map(customer => <Customer key={customer.id} id={customer.id} fullName={customer.fullName} purchases={customer.purchases}  /> )
            }
        </article>
    </>
}
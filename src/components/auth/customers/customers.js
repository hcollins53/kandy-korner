import { Link } from "react-router-dom"

export const Customer = ({id, fullName, purchases }) => {
    
    let totalAmount = 0
    purchases.map(purchase => {
        if(purchase.userId === id) {

          totalAmount = totalAmount + purchase.amount 
          
        }

    })
    
    
    return <>
  
    <section className="customer">
    <div className="customer_name"> 
        <Link to={`/customers/${id}`}> Name: {fullName} </Link>
    </div>
    <div className="candiesBought">
        {totalAmount}
    </div>
    </section>
</>
}

import { useEffect, useState } from "react"
import {  useParams } from "react-router-dom"
import { changeCustomerLoyaltyNumber, getCustomerDetails } from "../../ApiManager"

export const CustomerDetails = () => {
    const {customerId} = useParams()
    const [customerLoyalty, updateCustomerNum] = useState({
        userId: 0,
        loyaltyNumber: 0,
        id: 0
    })
   

    useEffect(
        () => {
            getCustomerDetails({customerId})
                .then((data) => {
                   const singleCustomer = data[0]
                   updateCustomerNum(singleCustomer)
                }) 
        },
        [customerId]
    )
    

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        /*
            TODO: Perform the PUT fetch() call here to update the profile.
            Navigate user to home page when done.
        */
            changeCustomerLoyaltyNumber({customerLoyalty})
                .then(() => {
                    setFeedback("Customer loyalty number has been updated")
                })
            }
    const [feedback, setFeedback] = useState("")

    useEffect(() => {
        if (feedback !== "") {
            // Clear feedback to make entire element disappear after 3 seconds
            setTimeout(() => setFeedback(""), 3000);
        }
    }, [feedback])
    return <>
        <div className={`${feedback.includes("Error") ? "error" : "feedback"} ${feedback.includes("update") ? "visible" : "invisible"}`}>
                {feedback}
        </div>
        
        <section className="customer">
        <header className="customer_header">{customerLoyalty?.user?.fullName}</header>
        <div>{customerLoyalty?.user?.email}</div>
        <div> Loyalty Number: {customerLoyalty?.loyaltyNumber} </div>
    </section>
        
        <form className="customerNum">
            <h2 className="loyalty__title">New Loyalty Number</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="loyaltyNumber">Loyalty Number:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={customerLoyalty.loyaltyNumber}
                        onChange={
                            (evt) => {
                                // TODO: Update specialty property
                                const copy = {...customerLoyalty}
                                copy.loyaltyNumber = evt.target.value
                                updateCustomerNum(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Update Number
            </button>
        </form>
    </>

}
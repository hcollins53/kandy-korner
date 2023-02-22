import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export const UpdateLoyaltyNumber = () => {
    const [customer, updateCustomerNum] = useState({
        userId: 0,
        loyaltyNumber: 0
    })
   // const {customerId} = useParams()

    useEffect(
        () => {
            fetch(`http://localhost:8088/customers/${customer.id}`).then(
                response => response.json())
                .then((data) => {
                   const singleCustomer = data[0]
                   updateCustomerNum(singleCustomer)
                })
        },
        []
    )
    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        /*
            TODO: Perform the PUT fetch() call here to update the profile.
            Navigate user to home page when done.
        */
            fetch(`http://localhost:8088/customers/${customer.id}`, {
                method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
           body: JSON.stringify(customer) 
            }).then(
                response => response.json())
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
        <form className="customerNum">
            <h2 className="loyalty__title">New Loyalty Number</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="loyaltyNumber">Loyalty Number:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={customer.loyaltyNumber}
                        onChange={
                            (evt) => {
                                // TODO: Update specialty property
                                const copy = {...customer}
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


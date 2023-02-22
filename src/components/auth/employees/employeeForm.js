import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AddNewEmployee, AddNewUser, getLocations } from "../../ApiManager"

export const EmployeeForm = () => {
    const [locations, setLocations] = useState([])

    useEffect(
        () => {
           getLocations()
             .then((locationsArray) => {
                setLocations(locationsArray)
             })
             // View the initial state of tickets
        },
        [] // When this array is empty, you are observing initial component state
    )
   
    
    const [user, updateUser] = useState({
        fullName: "",
        email: "",
        isStaff: true,
    })
    const [employee, updateEmployee] = useState({
        startDate: "",
        payRate: "",
        locationId: "",
        userId: ""
    })
    const navigate = useNavigate()
   

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        

        const userDateToSend = {
            fullName: user.fullName,
            email: user.email,
            isStaff: true,
        }
        
        AddNewUser({userDateToSend})
            .then((createdUser) => {
                const employeeDataToSend = {
                    userId: createdUser.id,
                    startDate: employee.startDate,
                    payRate: employee.payRate,
                    locationId: employee.id
                }
                AddNewEmployee({employeeDataToSend}).then(
                    response => response.json())
                    .then(() => {
                       navigate("/employees")
                    })  
            })
          
       
        
        }
        return (
            <form className="employeeForm">
                <h2 className="employeeForm__title">Add New Employee</h2>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            required autoFocus
                            type="text"
                            className="form-control"
                            placeholder="Name of the Employee"
                            value={user.fullName}
                            onChange={
                                (evt) => {
                                    const copy = {...user}
                                    copy.fullName = evt.target.value
                                    updateUser(copy)
                                }
                            } />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="Email">Email:</label>
                        <input
                            required autoFocus
                            type="text"
                            className="form-control"
                            placeholder="Email of the Employee"
                            value={user.email}
                            onChange={
                                (evt) => {
                                    const copy = {...user}
                                    copy.email = evt.target.value
                                    updateUser(copy)
                                }
                            } />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="startDate">Start Date:</label>
                        <input required autoFocus
                            type="text"
                            className="form-control"
                            placeholder="Start Date"
                            value={employee.startDate}
                            onChange={
                                (evt) => {
                                    const copy = {...employee}
                                    copy.startDate = evt.target.value
                                    updateEmployee(copy)
                                }
                            } />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="payRate">Pay Rate:</label>
                        <input required autoFocus
                            type="text"
                            className="form-control"
                            placeholder="Employee Pay Rate"
                            value={employee.payRate}
                            onChange={
                                (evt) => {
                                    const copy = {...employee}
                                    copy.payRate = parseInt(evt.target.value)
                                    updateEmployee(copy)
                                }
                            } />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="type">Type:</label>
                        
                        <select 
                            className="form-control" 
                                onChange={
                                (evt) => {
                                    const copy = {...employee}
                                    copy.id = parseInt(evt.target.value)
                                    updateEmployee(copy)
                                }}>
                            <option name= "location">Choose a Location</option>
                            {
                            locations.map((location) => {
                               return (
                                <option value={location.id}> {location.address}</option> 
                               )
                            })
                        } 
                             </select>
                    </div>
                </fieldset>
                <button 
                 onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                 className="btn btn-primary">
                    Submit Employee Form
                </button>
            </form>
        )   
}
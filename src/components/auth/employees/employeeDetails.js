import { useEffect, useState } from "react"
import { getEmployeeDetails } from "../../ApiManager"
import "./employee.css"
import { EmployeeLocation } from "./EmployeeLocation"

export const EmployeeDetails = () => {
    
    const [employeesListed, updateEmployeeListed] = useState([])

    const getEmployees = () => {
        getEmployeeDetails()
                .then((employeeArray) => {
                    const employeeAndLocation = employeeArray
                   updateEmployeeListed(employeeAndLocation)
                })
    }

    useEffect(
        () => {
            getEmployees()
        },
        []
    )
    
    return <>
    <article className="employees">
    {
        employeesListed.map((employee) => 
        <EmployeeLocation employee={employee} getEmployees={getEmployees}/>
        )
    }
    
    </article>
</>
}
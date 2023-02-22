import { deleteEmployee } from "../../ApiManager"

export const EmployeeLocation = ({employee, getEmployees}) => {
   
    const deleteButton = () => {
        return <button onClick={() => {
           deleteEmployee({employee}).then(() => {
                    getEmployees()
                })  
        }} className="employee_delete">Delete</button>
    }
   
   
   
   
   
   return <>
            <section key={employee.id} className="employee">
        <header className="employee_header">{employee?.user?.fullName}</header>
        <div> Email: {employee?.user?.email} </div>
        <div> Pay Rate: {employee?.payRate} </div>
        <div> Start Date: {employee?.startDate} </div>
        <div> Location Employee works at: {employee?.location?.address} </div>
        <footer>
            {
                deleteButton()
            }
        </footer>
        </section>
            </>
}
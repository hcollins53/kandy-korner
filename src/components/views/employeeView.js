import { ProductForm } from "../auth/products/productForm"
import { ProductList } from "../auth/products/productList"
import { LocationList } from "../locations/locationList"
import { Outlet, Route, Routes, useNavigate } from "react-router-dom"
import { CustomerList } from "../auth/customers/customerList"
import { CustomerDetails } from "../auth/customers/customerDetails"
import { EmployeeForm } from "../auth/employees/employeeForm"
import { EmployeeDetails } from "../auth/employees/employeeDetails"




export const EmployeeViews = () => {
    const navigate = useNavigate()
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Kandy Korner</h1>
                    <div>Your one-stop-shop to get all your candy</div>
                     <button onClick={() => navigate("/employee/create")}>Add New Employee</button>
                    <Outlet />
                </>
            }>

                <Route path="locations" element={ <LocationList /> } />
				<Route path="products" element={ <ProductList /> } />
				<Route path="product/create" element={ <ProductForm /> } />
                <Route path="customers" element={ <CustomerList />} />
                <Route path="customers/:customerId" element={ <CustomerDetails/>} />
                <Route path="employee/create" element={ <EmployeeForm/> } />
                <Route path="employees" element={ <EmployeeDetails/> } />

            </Route>
        </Routes>
    )
}

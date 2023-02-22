import { LocationList } from "../locations/locationList"
import { Outlet, Route, Routes } from "react-router-dom"
import { ProductContainer } from "../auth/products/productContainer"
import { LocationDetails } from "../locations/locationDetails"
import { MyOrders } from "../auth/products/Orders"



export const CustomerViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Kandy Korner</h1>
                    <div>Your one-stop-shop to get all your candy</div>

                    <Outlet />
                </>
            }>

                <Route path="locations" element={ <LocationList /> } />
                <Route path="locations/:productId" element={ <LocationDetails/>} />
                <Route path="products" element={ <ProductContainer />} />
                <Route path="orders" element={ <MyOrders />} />

            </Route>
        </Routes>
    )
}

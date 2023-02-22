import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"
import { useState, useEffect } from "react"

export const NavBar = () => {
    const navigate = useNavigate()
    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)
    
        if(kandyUserObject.staff){
            return (
                <ul className="navbar">
                    <li className="navbar__item navbar__locations">
                       <Link className="navbar__link" to="/locations">Locations</Link>
                    </li>
                    <li className="navbar__item navbar__products">
                       <Link className="navbar__link" to="/products">Products</Link>
                    </li>
                    <li className="navbar__item active">
                <Link className="navbar__link" to="/customers">Customers</Link>
                     </li>
                    <li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("kandy_user")
                            navigate("/", {replace: true})
                        }}>Logout</Link>
                    </li>
                </ul>
            )
                    }
              else {
                        return (
                            <ul className="navbar">
                                 <li className="navbar__item navbar__locations">
                       <Link className="navbar__link" to="/locations">Locations</Link>
                    </li>
                    <li className="navbar__item active">
                <Link className="navbar__link" to="/products">Find Candy</Link>
                     </li>
                     <li className="navbar__item active">
                <Link className="navbar__link" to="/orders">My Orders</Link>
                     </li>
                    <li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("kandy_user")
                            navigate("/", {replace: true})
                        }}>Logout</Link>
                    </li>
                </ul>
        
                        )
                    }

   
}


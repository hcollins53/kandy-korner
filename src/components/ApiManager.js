export const getAllCustomers = () => {
    return fetch(`http://localhost:8088/users?isStaff=false`).then(
        response => response.json())
        
}

export const getCustomerDetails = ({customerId}) => {
   return fetch(`http://localhost:8088/customers?_expand=user&userId=${customerId}`).then(
                response => response.json())
}
export const changeCustomerLoyaltyNumber = ({customerLoyalty}) => {
   return fetch(`http://localhost:8088/customers/${customerLoyalty.id}`, {
                method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
           body: JSON.stringify(customerLoyalty) 
            }).then(
                response => response.json())
}
export const getEmployeeDetails = () => {
   return fetch(`http://localhost:8088/employees?_expand=user&_expand=location`).then(
                response => response.json())
}
export const getLocations = () => {
   return fetch(`http://localhost:8088/locations`).then(
        response => response.json())
}
export const AddNewUser = ({userDateToSend}) => {
   return fetch(`http://localhost:8088/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
           body: JSON.stringify(userDateToSend) 
        }).then(
            response => response.json())
}
export const AddNewEmployee = ({employeeDataToSend}) => {
   return fetch(`http://localhost:8088/employees`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                   body: JSON.stringify(employeeDataToSend) 
                })
}
export const getAllEmployees = () => {
   return fetch(`http://localhost:8088/users?isStaff=true`).then(
        response => response.json())
        
}
export const deleteEmployee = ({employee}) => {
   return fetch(`http://localhost:8088/employees/${employee.id}`, {
        method: "DELETE",
    
    })
}
export const getMyOrders = ({kandyUserObject}) => {
   return fetch(`http://localhost:8088/purchases?_expand=product&userId=${kandyUserObject.id}`).then(
         response => response.json())
}
export const getProductTypes = () => {
   return fetch(`http://localhost:8088/types`).then(
        response => response.json())
}
export const addNewProduct = ({productToSEndToAPI}) => {
   return fetch(`http://localhost:8088/products`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
       body: JSON.stringify(productToSEndToAPI) 
    })
}
export const getSortedProducts = () => {
   return fetch(`http://localhost:8088/products?_expand=type&_sort=name&_order=asc`).then(
         response => response.json())
}
export const purchaseProduct = ({PurchaseToSendToAPI}) => {
   return fetch(`http://localhost:8088/purchases`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
       body: JSON.stringify(PurchaseToSendToAPI) 
    })
}
export const getLogin = ({email}) => {
    return fetch(`http://localhost:8088/users?email=${email}`)
            .then(res => res.json())
}
export const getRegister = ({user}) => {
    return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
    }
    export const findEmail = ({user}) => {
        return fetch(`http://localhost:8088/users?email=${user.email}`)
                .then(res => res.json())
    }
    export const getProductLocations = ({productId}) => {
       return fetch(`http://localhost:8088/productLocations?_expand=location&_expand=product&productId=${productId}`)
        .then(
            response => response.json())
    }
    export const getAllLocations = () => {
      return  fetch('http://localhost:8088/locations').then(
         response => response.json())
    }
    export const getAllPurchases = () => {
        return  fetch('http://localhost:8088/users?isStaff=false&_embed=purchases').then(
            response => response.json())
    }
    
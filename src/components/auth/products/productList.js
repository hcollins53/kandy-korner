import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getSortedProducts, purchaseProduct } from "../../ApiManager"
import "./products.css"

//first question- how to only show when it is an employee

export const ProductList = ({searchTermState}) => {
    const [products, setProducts] = useState([])
    const [sortPrice, updatePricesSorted] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    
const navigate = useNavigate()

const localKandyUser = localStorage.getItem("kandy_user")
const kandyUserObject = JSON.parse(localKandyUser)

useEffect(
    () => {
       const searchedProducts = products.filter(product => {
       return product.name.toLowerCase().startsWith(searchTermState.toLowerCase())
    })
       setFilteredProducts(searchedProducts)

    },
    [searchTermState]
)


useEffect(
    () => {
        getSortedProducts()
         .then((productsArray) => {
            setProducts(productsArray)
         })
         // View the initial state of tickets
    },
    [] // When this array is empty, you are observing initial component state
)



useEffect(
    () => {
       
        if(kandyUserObject.staff) {
          setFilteredProducts(products)
        }
    },
    [products]
)
useEffect(
    () => {
        if(sortPrice) {
        const sortPriceArray = products.filter(product => {
            return product.price >= 2
        })
        setFilteredProducts(sortPriceArray)
    } else {

       setFilteredProducts(products) 
    }
       
    },
    [sortPrice]
)
const handleSaveButtonClick = (event, product) => {
    event.preventDefault()
    

    // TODO: Create the object to be saved to the API
    const PurchaseToSendToAPI = {
        userId: kandyUserObject.id,
        productId: product.id,
        amount: 1
    }

    // TODO: Perform the fetch() to POST the object to the API
    purchaseProduct({PurchaseToSendToAPI}).then(
        response => response.json())
        .then(() => {
           navigate("/products")
        }) 
}

return<>
{
    kandyUserObject.staff
    ? <>
    <button onClick={() => updatePricesSorted(true)}>Sort by Top Price</button>
    <button onClick={() => updatePricesSorted(false)}>List all Products</button>
    <button onClick={() => navigate("/product/create")}>Create Product</button>
    </>
    :""
}
<h2>List of Products</h2>
<article className="products">
   {
        searchTermState
        ? 
        
        filteredProducts.map(
            (product) => {
                    return <section key= {product.id} className="product">
                    <header> {product.name}</header> <Link to={`/locations/${product.id}`}>Show me Where </Link>
                    <footer>Price: {product.price}</footer>
                    <button onClick={(clickEvent) => handleSaveButtonClick(clickEvent, product)}>Purchase Candy</button>
                </section> 
                }
                )
            
        : kandyUserObject.staff
        ?
            filteredProducts.map(
                (product) => {
                        return <section key= {product.id} className="product">
                        <header> {product.name} is a {product.type.category} </header>
                        <footer>Price: {product.price}</footer>
                    </section>  
                    })    
        : ""             
   }
  
</article>
</>

}


//Given that an employee wants to see a list of all products

///When the employees clicks on a Products link in the navbar

//Then a list of all products should be displayed, sorted by product name, with prices shown.
//Given that an employee wants to see the most expensive products being sold

//When the employee clicks on a button labeled "Top Priced"

//Then only products that cost more than $2.00 per unit should be displayed

// <body>{productType.type}</body>

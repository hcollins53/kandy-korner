import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { addNewProduct, getProductTypes } from "../../ApiManager"

export const ProductForm = () => {
    const [types, setProductTypes] = useState([])
   
    useEffect(
        () => {
           getProductTypes()
             .then((productTypesArray) => {
                setProductTypes(productTypesArray)
             })
             // View the initial state of tickets
        },
        [] // When this array is empty, you are observing initial component state
    )

    const [product, update] = useState({
        name: "",
        typeId: "",
        price: "",
    })
    const navigate = useNavigate()

    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        const productToSEndToAPI= {
            name: product.name,
            typeId: product.id,
            price: product.price
        }

       addNewProduct({productToSEndToAPI}).then(
            response => response.json())
            .then(() => {
               navigate("/products")
            }) 

    }
    return (
        <form className="productForm">
            <h2 className="productForm__title">Add New Product</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Name of the product"
                        value={product.name}
                        onChange={
                            (evt) => {
                                const copy = {...product}
                                copy.name = evt.target.value
                                update(copy)
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
                                const copy = {...product}
                                copy.id = parseInt(evt.target.value)
                                update(copy)
                            }}>
                        <option name= "type">Choose a Type</option>

                        {
                        types.map((product) => {
                           return (
                            <option 
                                value={product.id}> {product.category}</option> 
                              
                           )
                        })
                    } 
                         </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Price of the product"
                        value={product.price}
                        onChange={
                            (evt) => {
                                const copy = {...product}
                                copy.price = parseInt(evt.target.value)
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button 
             onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
             className="btn btn-primary">
                Submit Product
            </button>
        </form>
    )

}
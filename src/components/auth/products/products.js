// import { useEffect, useState } from "react"
// import { ProductList } from "./productList"


// export const ProductList = () => {
//     const [products, setProducts] = useState([])

//     useEffect(
//         () => {
//             fetch(`http://localhost:8088/products`).then(
//              response => response.json())
//              .then((productArray) => {
//                 setProducts(productArray)
//              })
//         },
//         []
//     )
//     return (
//         <article className="products">
//         {
//             products.map(product => <ProductList key={product.id} id={product.id} />)
                

//             }
// </article>
//     )
// }
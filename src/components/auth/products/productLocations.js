// import { useEffect, useState } from "react"
// import { useParams } from "react-router-dom"

// export const ProductLocations = () => {
//     const {productId} = useParams()
//     const [product, updateProduct] = useState({})

//     useEffect(
//         () => {
//             fetch(`http://localhost:8088/products?_embed=productLocations&productId=${productId}`).then(
//                 response => response.json())
//                 .then((data) => {
//                    const singleProduct = data[0]
//                    updateProduct(singleProduct)
//                 })
//         },
//         [productId]
//     )

//     return (
//         <section className="product">
//         <header className="product_header">{product?.productLocation?.location?.address}</header>
//     </section>
//         )
// }
import { useState } from "react";

function Execise02(){
    const [product,setProduct] = useState({
        id: 1,
        product: `Pessi`,
        price: 1000,
        quantity: 100,
    })

    return(
        <>
            <h1>Thong tin san pham</h1>
            <p>Id: {product.id}</p>
            <p>product: {product.product}</p>
            <p>price: {product.price}</p>
            <p>quantity: {product.quantity}</p>
        </>
    )
}
export default Execise02;
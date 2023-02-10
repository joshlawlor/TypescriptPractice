"use client"
import { useState } from "react";

async function getProduct(productId: string) {
    const res =  await fetch(
        `http://127.0.0.1:8090/api/collections/products/records/${productId}`,
        {
            next: {revalidate: 10}
        }
    )
    const data = await res.json()
    return data;
}


    




export default async function ProductPage({params}: any) {
    const product = await getProduct(params.id)

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const add = async () => {
        await fetch(`http://127.0.0.1:8090/api/collections/cart/records`, {
            method: 'POST',
            headers: {
                'Content-Type' :'application/json',
            },
            body: JSON.stringify({
                title,
                price,
            }),

        });
    }
    

    return(
        <div>
            <div>
                <h2>{product.title}</h2>
                <h3>{product.price}</h3>
                

                <button onClick={add}>Add to Cart</button>
            </div>
        </div>
    )
}
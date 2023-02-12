'use client';

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function AddProduct({props}: any) {
    const router = useRouter()
    const [title, setTitle] = useState(props.title);
    const [price, setPrice] = useState(props.price);
    const [id, setId] = useState(props.id)

    const addProduct = async () => {
        await fetch(`http://127.0.0.1:8090/api/collections/cart/records`, {
            method: 'POST',
            headers: {
                'Content-Type' :'application/json',
            },
            body: JSON.stringify({
                title,
                price,
                id
            }),

        }); 
        router.push('/cart')
    }

    function deleteItem() {
        console.log(`ID:`+id)
        const res =  fetch(
            `http://127.0.0.1:8090/api/collections/cart/records/${id}`,
    
            {
                method: "DELETE"
            }
        )
    }
    

        return (
            <form onSubmit={addProduct}>
           
                <button type="submit">
                    Add to Cart
                </button>
                <button onClick={deleteItem}>Delete item</button>

            </form>
        )
}
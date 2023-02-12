'use client';

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function AddProduct({props}: any) {
    const router = useRouter()
    const [title, setTitle] = useState(props.title);
    const [price, setPrice] = useState(props.price);
    console.log(props.title)

    const addProduct = async () => {
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
        router.push('/cart')
    }


        return (
            <form onSubmit={addProduct}>
           
                <button type="submit">
                    Add to Cart
                </button>
                
            </form>
        )
}
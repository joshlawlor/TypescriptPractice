'use client';


import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProduct(product: any) {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');

    const router = useRouter();

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

        });    }


        return (
            <form onSubmit={addProduct}>
                <button type="submit">
                    Add to Cart
                </button>
            </form>
        )
}
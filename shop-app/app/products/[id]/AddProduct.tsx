'use client';


import { useState } from "react";

export default function AddProduct({props}: any) {
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

        });    }


        return (
            <form onSubmit={addProduct}>
                <button type="submit">
                    Add to Cart
                </button>
            </form>
        )
}
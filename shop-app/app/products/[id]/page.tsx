

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

    return(
        <div>
            <div>
                <h2>{product.title}</h2>
                <h3>{product.price}</h3>
            </div>
        </div>
    )
}
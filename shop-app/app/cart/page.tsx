

async function getCart() {
    const res = await fetch(`http://127.0.0.1:8090/api/collections/cart/records?page=1&perPage=30`, { cache: 'no-store' })
    const data = await res.json();
    return data?.items as any[];

}



export default async function CartPage({params}: any){
    const products = await getCart()
    let total = 0;

     function getTotal() {
        products.forEach(product => {
            total += +product.price
        })
    }
    getTotal()

   
    
    return(
        <div>
            <h1>Your Cart:</h1>
            <h2>Your total: {total}</h2>
            <div>
            {products?.map((product) => {
                    return <Product key={product.id} product={product} />;
                })}
            </div>
        </div>
    )
}

function Product({ product }: any) {
    const { id, title, price } = product || {};

    return (
            <div>
                <h2>{title}</h2>
                <h4>{price}</h4>
            </div>

    )
}
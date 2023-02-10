import Link from "next/link";

import styles from './Product.module.css'

async function getProducts() {
    const res = await fetch(`http://127.0.0.1:8090/api/collections/products/records?page=1&perPage=30`, { cache: 'no-store' })
    const data = await res.json();
    return data?.items as any[];

}


export default async function ProductsPage() {
    const products = await getProducts()
    return (
        <div className={styles.productContainer}>
            <div className={styles.productHeader}>
                <h1>My Products</h1>
            </div>
            <div className={styles.products}>
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
        <Link href={`/products/${id}`}>
            <div>
                <h2>{title}</h2>
                <h4>${price}</h4>
            </div>

        </Link>
    )
}
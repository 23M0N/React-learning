import { useEffect, useState } from "react";

export default function ProductFetcher() {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function getData(){
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json()
            setProducts(data)
            setLoading(true)
        }
        getData();
    }, [loading])

    if (loading === false) {return(<p>still loading ...</p>)}
    else{
        return (
        <ul>
            {products.map((product) => (<li key={product.id}>{product.title} <br />
                <img src={product.image} alt={product.title} height="100" />
                <br />
                {product.price}$
            </li>))}
        </ul>
    )
    }
}
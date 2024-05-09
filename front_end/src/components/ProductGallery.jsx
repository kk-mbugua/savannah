
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";

function ProductGallery() {
    const [gallery, setGallery] = useState([]);

    useEffect(()=> {
        async function fetchData() {
            const data = await getProducts()
            setGallery(data);
        }
        fetchData();
    }, [])

    const productCards = gallery.map(productDetails =>{
        return <ProductCard key={productDetails._id} details={productDetails}/>;
    })
    return (
        <div className="shoppingItems">
            {productCards}
        </div> 
    )
}

export default ProductGallery
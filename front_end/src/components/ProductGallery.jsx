
import ProductCard from "./ProductCard";
import { getItems } from "../services/productList";
import { useEffect, useState } from "react";
import axios from 'axios';

function ProductGallery() {
    const [gallery, setGallery] = useState([]);

    useEffect(()=> {
        
    }, []);

    const comp = getItems().map(itemDetails =>{
        return <ProductCard key={itemDetails.id} details={itemDetails}/>;
    })
    return (
        <div className="shoppingItems">
            {comp}
        </div> 
    )
}

export default ProductGallery
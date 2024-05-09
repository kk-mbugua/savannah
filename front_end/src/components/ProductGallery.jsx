
import ProductCard from "./ProductCard";
import { getItems } from "../services/shoppingList";

function ProductGallery() {
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
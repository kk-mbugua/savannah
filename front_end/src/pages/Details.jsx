import { useParams } from "react-router-dom"
import { getItem } from "../services/shoppingList";
import { addToCart } from "../services/cart";

function Details() {
    const { id }= useParams();
    const details = getItem(id);
    return (
        <div className="detail">
            <div className="detailsImageContainer">
                <img src={details.image} alt="" />
                <p>{details.name}</p>
            </div>
            <div className="detailsDataContainer">
                <div>
                    <p>{details.name}</p>
                    <p>{details.description}</p>
                </div>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                    <p>Kes {details.price}</p>
                    <button onClick={()=> addToCart(details)}>Add To Cart</button>
                </div> 
            </div>
        </div>
    )
}

export default Details
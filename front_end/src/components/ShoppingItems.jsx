import { AiOutlineShopping } from "react-icons/ai";
import { getItems } from "../services/shoppingList";
import { Link } from "react-router-dom";
import { addToCart } from "../services/cart";
import PathConstants from "../routes/pathsConstants";


function Item ({details}) {
    const itemLink = PathConstants.DETAILS+ "/" + details.id
    return (
        <div className="shoppingItem">
            <Link to={itemLink}>
                <img src={details.image} alt="img"></img>
            </Link>
            <Link to={itemLink}>
                <div className="itemName">{details.name}</div>
            </Link>
            <div className="itemDetails">
                <div className="itemPrice">Kes {details.price}</div>
                <div className="itemAction">
                    <button onClick={()=> addToCart(details)}><AiOutlineShopping /></button>
                </div>
            </div>
        </div> 
    )
}

function ShoppingItems() {
    const comp = getItems().map(itemDetails =>{
        return <Item key={itemDetails.id} details={itemDetails}/>;
    })
    return (
        <div className="shoppingItemsContent">
            {comp}
        </div> 
    )
}

export default ShoppingItems
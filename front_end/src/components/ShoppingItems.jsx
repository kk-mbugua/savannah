import { AiOutlineShopping } from "react-icons/ai";
import { getItems } from "../services/shoppingList";
import PathConstants from "../routes/pathsConstants";

function Item ({details}) {
    return (
        <div className="shoppingItem">
            <a href={PathConstants.DETAILS+ "/" + details.id}>
                <img src={details.image} alt="img"></img>
            </a>
            <a href={PathConstants.DETAILS+ "/" + details.id}>
                <div className="itemName">{details.name}</div>
            </a>
            <div className="itemDetails">
                <div className="itemPrice">Kes {details.price}</div>
                <div className="itemAction">
                    <button><AiOutlineShopping /></button>
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
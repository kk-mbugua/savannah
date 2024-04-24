import { AiOutlineShopping } from "react-icons/ai";
import { shoppingItemsArray } from "../utils/testData";

function Item ({details}) {
    return (
        <div className="shoppingItem">
            <a href="/">
                <img src={details.image} alt="img"></img>
            </a>
            <a href="/">
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
    const comp = shoppingItemsArray.map(itemDetails =>{
        return <Item key={itemDetails.id} details={itemDetails}/>;
    })
    return (
        <div className="shoppingItemsContent">
            {comp}
        </div> 
    )
}

export default ShoppingItems
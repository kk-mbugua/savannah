import testing from "../assets/images/6.jpeg"
import { AiOutlineShopping } from "react-icons/ai";

function item () {
    return (
        <div>
            <a href="/">
                <img src={testing} alt="img" className="itemImg"></img>
            </a>
            <a href="/">
                <div className="itemName">All Black Outfit</div>
            </a>
            <div className="itemDetails">
                <div className="itemPrice">Kes 500</div>
                <div className="itemAction">
                    <button><AiOutlineShopping /></button>
                </div>
            </div>
        </div> 
    )
}

function ShoppingItems() {
    return (
        <>
        <div className="shoppingItemsRow">
            {item()}
            {item()}
            {item()}
        </div>
        <div className="shoppingItemsRow">
            {item()}
            {item()}
            {item()}
        </div> 
        <div className="shoppingItemsRow">
            {item()}
            {item()}
            {item()}
        </div> 
        </> 
    )
}

export default ShoppingItems
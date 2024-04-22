import testing from "../assets/images/6.jpeg"
import { AiOutlineShopping } from "react-icons/ai";

function item () {
    return (
        <div>
            <a href="/">
                <img src={testing} alt="img" className="itemImg"></img>
            </a>
            <div className="itemName"></div>
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
        <div className="shoppingItems">
            {item()}
            {item()}
            {item()}
        </div>  
    )
}

export default ShoppingItems
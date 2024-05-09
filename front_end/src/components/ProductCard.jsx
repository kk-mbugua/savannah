import PathConstants from "../routes/pathsConstants";
import { addToCart } from "../services/cart";
import { AiOutlineShopping } from "react-icons/ai";
import { Link } from "react-router-dom";

function ProductCard ({details}) {
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

export default ProductCard
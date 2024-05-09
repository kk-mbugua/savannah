import PathConstants from "../routes/pathsConstants";
import { addToCart } from "../services/cart";
import { AiOutlineShopping } from "react-icons/ai";
import { Link } from "react-router-dom";
import getImgSrc from "../utils/getImgSrc";

function ProductCard ({details}) {
    const itemLink = PathConstants.DETAILS+ "/" + details._id
    return (
        <div className="productCard">
            <Link to={itemLink}>
                <img src={getImgSrc(details.img_url)} alt={details.name}></img>
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
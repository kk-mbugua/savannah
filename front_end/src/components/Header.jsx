import { Link } from "react-router-dom"
import PathConstants from "../routes/pathsConstants";

function Header() {
    return (
        <div className="titleBar">
            <div className="title"> 
                <h3>Savannah Boutique</h3>
            </div>
            <div className="navOptions">
                <div className="navItem">
                    <Link to={PathConstants.HOME}>HOME</Link>
                </div>
                <div className="navItem">
                    <Link to={PathConstants.CART}>CART</Link>
                </div>
                <div className="navItem">
                    <Link to={PathConstants.PREORDER}>PRE-ORDER</Link>
                </div>
                <div className="navItem">
                    <Link to={PathConstants.CONTACT}>CONTACT</Link>
                </div>
                <div className="navItem">
                    <Link to={PathConstants.ABOUT}>ABOUT</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;
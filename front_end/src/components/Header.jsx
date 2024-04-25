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
                    <Link to={PathConstants.HOME}></Link>
                </div>
                <div className="navItem">
                    <Link to={PathConstants.CART}></Link>
                </div>
                <div className="navItem">
                    <Link to={PathConstants.PREORDER}></Link>
                </div>
                <div className="navItem">
                    <Link to={PathConstants.ABOUT}></Link>
                </div>
                <div className="navItem">
                    <Link to={PathConstants.CONTACT}></Link>
                </div>
            </div>
        </div>
    )
}

export default Header;

function Header() {
    return (
        <div className="titleBar">
            <div className="title"> 
                <h3>Savannah Boutique</h3>
            </div>
            <div className="navOptions">
                <div className="navItem">
                    <a href="/">HOME</a>
                </div>
                <div className="navItem">
                    <a href="/cart">CART</a>
                </div>
                <div className="navItem">
                    <a href="/pre-order">PRE ORDER</a>
                </div>
                <div className="navItem">
                    <a href="/about">ABOUT</a> 
                </div>
                <div className="navItem">
                    <a href="/contact">CONTACT</a>
                </div>
            </div>
        </div>
    )
}

export default Header;
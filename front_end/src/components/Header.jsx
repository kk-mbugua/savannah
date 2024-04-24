
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
                    <a href="/">CART</a>
                </div>
                <div className="navItem">
                    <a href="/">PRE ORDER</a>
                </div>
                <div className="navItem">
                    <a href="/">ABOUT</a> 
                </div>
                <div className="navItem">
                    <a href="/">CONTACT</a>
                </div>
            </div>
        </div>
    )
}

export default Header;
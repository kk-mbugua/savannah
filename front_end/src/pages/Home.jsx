import ShoppingItems from "../components/ShoppingItems";

function Home () {
    return (
    <div>
        <div className="previewWindow">
            <div className="previewWindowContent">
                <input type="search" name="search" id="homeSearch" placeholder="                Search..."/>
            </div>
        </div>
        <div className="shopping">
            <div className="shoppingMenu">
                <button>New Collection</button>
                <button>Special Promo</button>
                <button>Casual Bag</button>
                <button>Party Bag</button>
            </div>
            <div className="shoppingItems">
                <ShoppingItems />
            </div>
            
        </div>
    </div>
    )
    
}

export default Home;
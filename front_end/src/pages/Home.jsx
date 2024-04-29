import ShoppingItems from "../components/ShoppingItems";

function Home () {
    return (
    <div className="home">
        <div className="previewWindow">
            <div className="homeSearch">
                <input type="search" name="search" placeholder="Search..."/>
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
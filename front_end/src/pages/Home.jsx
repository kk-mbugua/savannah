import ShoppingItems from "../components/ShoppingItems";

function Home () {
    return (
    <div className="home">
        <div className="previewWindow">
            <div className="previewTitle">
                <h4 style={{display: "inline-block"}}>Our New Collection</h4>
            </div>
            <div className="previewSearch">
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
            <ShoppingItems />
        </div>
    </div>
    )
    
}

export default Home;
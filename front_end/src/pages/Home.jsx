import ShoppingItems from "../components/ShoppingItems";

function Home () {
    return (
    <div>
        <div className="previewWindow"></div>
        <div className="shopping">
            <div className="shoppingMenu"></div>
            <ShoppingItems />
        </div>
    </div>
    )
    
}

export default Home;
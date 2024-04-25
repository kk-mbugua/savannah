import { useParams } from "react-router-dom"
import { getItem } from "../services/shoppingList";

function ItemDetails() {
    const { id }= useParams();
    const details = getItem(id);
    console.log(details)
    return (
        <>
            This will contain the item's details
        </>
    )
}

export default ItemDetails
import { useParams } from "react-router-dom"

function ItemDetails() {
    let { id }= useParams();
    console.log("id:", id);
    return (
        <>
            This will contain the item's details
        </>
    )
}

export default ItemDetails
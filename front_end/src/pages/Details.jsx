import { useParams } from "react-router-dom"
function ItemDetails() {
    let { id }= useParams();
    return (
        <>
            This will contain the item's details
        </>
    )
}
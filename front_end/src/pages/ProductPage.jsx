import { useParams } from "react-router-dom"
import { addToCart } from "../services/cart";
import { useEffect, useState } from "react";
import getImgSrc from "../utils/getImgSrc";
import { getProduct } from "../services/productService";

function ProductPage() {
    const [details, setDetails] = useState({})
    const { id } = useParams();

    useEffect(()=> {
        fetchData();
    }, [id])

    async function fetchData() {
        console.log("should wait here")
        await getProduct(id)
        .then((res)=>{
            setDetails(res);
        })
        .catch(err=> console.log("error fetching data")) 
    }

    return (
        <div className="detail">
            <div className="detailsImageContainer">
                <img src={getImgSrc(details.img_url)} alt={details.name} />
                <p>{details.name}</p>
            </div>
            <div className="detailsDataContainer">
                <div>
                    <p>{details.name}</p>
                    <p>{details.description}</p>
                </div>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                    <p>Kes {details.price}</p>
                    <button onClick={()=> addToCart(details)}>Add To Cart</button>
                </div> 
            </div>
        </div>
    )
}

export default ProductPage
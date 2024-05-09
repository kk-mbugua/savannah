
import axios from "axios"

export async function getProducts() {
    return await axios
        .get(`http://localhost:8082/api/products`)
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.log("Error getting products")
            return {}
        })
}

export async function getProduct(id) {
    return await axios
        .get(`http://localhost:8082/api/products/${id}`)
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.log("Error getting product details")
            return {}
        })
}
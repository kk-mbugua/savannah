

import Image1 from '../assets/images/1.jpeg';
import Image2 from '../assets/images/2.jpeg';
import Image3 from '../assets/images/3.jpeg';
import Image4 from '../assets/images/4.jpeg';
import Image5 from '../assets/images/5.jpeg';
import Image6 from '../assets/images/6.jpeg';
import Image7 from '../assets/images/7.jpeg';
import Image8 from '../assets/images/8.jpeg';

const shoppingItemsArray = [
    {
        id: 1,
        name: "Colourful Baggy Pants",
        price: "500",
        description: "This are some details about the outfit",
        img_url: "../assets/images/1.jpeg",
        image: Image1
    },
    {
        id: 2,
        name: "Blue Heels",
        price: "500",
        description: "This are some details about the outfit",
        img_url: "../assets/images/2.jpeg",
        image: Image2
    },
    {
        id: 3,
        name: "Formal Black Shoes",
        price: "500",
        description: "This are some details about the outfit",
        img_url: "../assets/images/3.jpeg",
        image: Image3
    },
    {
        id: 4,
        name: "Red Long Panel Skirt",
        price: "500",
        description: "This are some details about the outfit",
        img_url: "../assets/images/4.jpeg",
        image: Image4
    },
    {
        id: 5,
        name: "Pink Floral Top",
        price: "500",
        description: "This are some details about the outfit",
        img_url: "../assets/images/5.jpeg",
        image: Image5
    },
    {
        id: 6,
        name: "All Black Outfit",
        price: "500",
        description: "This are some details about the outfit",
        img_url: "../assets/images/6.jpeg",
        image: Image6
    },
    {
        id: 7,
        name: "Yellow Jumpsuit",
        price: "500",
        description: "This are some details about the outfit",
        img_url: "../assets/images/7.jpeg",
        image: Image7
    },
    {
        id: 8,
        name: "Yellow Romper",
        price: "500",
        description: "This are some details about the outfit",
        img_url: "../assets/images/8.jpeg",
        image: Image8
    }
]

export function getItems() {
    return shoppingItemsArray;
}

export function getItem(id) {
    return shoppingItemsArray[id-1];
}
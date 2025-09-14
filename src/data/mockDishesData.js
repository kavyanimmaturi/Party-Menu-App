import food_1 from "../assets/food_1.png";
import food_10 from "../assets/food_10.jpg";
import food_11 from "../assets/food_11.avif";
import food_12 from "../assets/food_12.jpg";
import food_13 from "../assets/food_13.jpg";
import food_14 from "../assets/food_14.jpg";
import food_15 from "../assets/food_15.jpg";
import food_16 from "../assets/food_16.jpg";
import food_17 from "../assets/food_17.webp";
import food_18 from "../assets/food_18.jpg";
import food_19 from "../assets/food_19.jpg";
import food_2 from "../assets/food_2.png";
import food_20 from "../assets/food_20.jpg";
import food_21 from "../assets/food_21.jpg";
import food_22 from "../assets/food_22.jpg";
import food_23 from "../assets/food_23.webp";
import food_3 from "../assets/food_3.png";
import food_4 from "../assets/food_4.webp";
import food_5 from "../assets/food_5.jpg";
import food_6 from "../assets/food_6.jpg";
import food_7 from "../assets/food_7.webp";
import food_8 from "../assets/food_8.jpeg";
import food_9 from "../assets/food_9.jpg";

export const dishes = [
    {
        id:1,
        name:"Ice-Cream Scoups",
        description: "Tasty and delicious ice cream with fully flavoured sprinkles.",
        image: food_1,
        mealType: "DESSERTS",
        type: "VEG",
        ingredients: [
            {name: "Vanilla", quantity: "250g"},
            {name: "sugar", quantity: "50g"}
        ]

    },
    {
        id:2,
        name:"Ice-Cream",
        description: "Tasty and delicious flavoured vanilla ice cream.",
        image: food_2,
        mealType: "DESSERTS",
        type: "VEG",
        ingredients: [
            {name: "Chocolates", quantity: "250g"},
            {name: "sugar", quantity: "50g"}
        ]

    },
    {
        id:3,
        name:"Strawberry Ice-Cream",
        description: "Tasty and delicious ice cream with fully flavoured sprinkles.",
        image: food_3,
        mealType: "DESSERTS",
        type: "VEG",
        ingredients: [
            {name: "Strawberries", quantity: "25"},
            {name: "sugar", quantity: "50g"},
            {name: "cream", quantity: "25g"}
        ]

    },
    {
        id:4,
        name:"Spring Rolls",
        description: "Spicy Veg Spring rolls made of maida flour,onions,oil,etc.",
        image: food_4,
        mealType: "STARTER",
        type: "VEG",
        ingredients: [
            {name: "Maida Flour", quantity: "1 Packet"},
            {name: "Onions", quantity: "1 Kg"},
            {name: "Salt", quantity: "1 Packet"},
            
        ]

    },
    {
        id:5,
        name:"Paneer Tikka",
        description: "Flavoured Paneer Tikka with green chutney,onions, lemons.",
        image: food_5,
        mealType: "STARTER",
        type: "VEG",
        ingredients: [
            {name: "Paneer", quantity: "1kg"},
            {name: "Oil", quantity: "1 ltr"},
            {name: "Mirchi Powder", quantity: "1 Packet"},
            {name: "Salt", quantity: "1/4 cup"}
        ]

    },
    {
        id:6,
        name:"Samosa",
        description: "Delicious and Tasty Samosa stuffed with Aloo kurma",
        image: food_6,
        mealType: "STARTER",
        type: "VEG",
        ingredients: [
            {name: "Maida Flour", quantity: "1 Kg"},
            {name: "Oil", quantity: "1 ltr"},
            {name: "Potatoes", quantity: "1 Kg"},
            {name: "Mirchi Powder", quantity: "1 packet"},
            {name: "Salt", quantity: "1/4 cup"}
        ]

    },
    {
        id:7,
        name:"Panipuri",
        description: "Popular Indian street food consisting of puri filled with pani and chutney.",
        image: food_7,
        mealType: "STARTER",
        type: "VEG",
        ingredients: [
            {name: "Wheat Flour", quantity: "1kg"},
            {name: "Onions", quantity: "1kg"},
            {name: "Chickpeas", quantity: "1cup"},
            {name: "Potatoes"},
            {name: "Mint Leaves"}
        ]

    },
    {
        id:8,
        name:"Manchurian",
        description: "It is a popula Indo-Chinese dish.",
        image: food_8,
        mealType: "STARTER",
        type: "VEG",
        ingredients: [
            {name: "Cabbage", quantity: "1 or 2"},
            {name: "Carrots", quantity: "2"},
            {name: "Ginger and Garlic", quantity: "1kg"},
            {name: "Oil", quantity: "2cups"},
            {name: "Maida", quantity: "3cups"},
            {name: "Chicken", quantity: "required"}
        ]

    },
    {
        id:9,
        name:"Chicken Pakodi",
        description: "It is a popular Indian snack featuring tender chicken pieces coated in a besan flour.",
        image: food_9,
        mealType: "MAIN COURSES",
        type: "VEG",
        ingredients: [
            {name: "Chicken", quantity: "500g"},
            {name: "Corn Flour", quantity: "3cups"},
            {name: "Onions", quantity: "25g"},
            {name: "Ginger and Garlice", quantity: "10g"},
            {name: "Salt", quantity: "10g"},
            {name: "Green Chillies", quantity: "10g"}
        ]

    },
    {
        id:10,
        name:"Chocolate Cake",
        description: "Tasty and very delicious chocolate flavoured ice-cream.",
        image: food_10,
        mealType: "DESSERTS",
        type: "VEG",
        ingredients: [
            {name: "Flour Sugar", quantity: "2cups"},
            {name: "Eggs", quantity: "3"},
            {name: "Sugar", quantity: "2cups"},
            {name: "Cocoa Powder", quantity: "2.5cups"},
            {name: "Oil", quantity: "1tbp"}
        ]

    },
    {
        id:11,
        name:"Seekh Kebab",
        description: "It is a type of skewered meat dish from India.",
        image: food_11,
        mealType: "STARTER",
        type: "VEG",
        ingredients: [
            {name: "Chicken", quantity: "3cups"},
            {name: "Oil", quantity: "3tbs"},
            {name: "Ginger", quantity: "5g"},
            {name: "Garlic", quantity: "5g"},
            {name: "Salt", quantity: "2tbs"},
            {name: "Coriander", quantity: "4leafs"},
            {name: "Garam Masala", quantity: "1tbs"}
        ]

    },
    {
        id:12,
        name:"Chicken Tandoori",
        description: "Chicken Tandoori is a popular North Indian dish of chicken marinated in Yogurt and Spices.",
        image: food_12,
        mealType: "MAIN COURSES",
        type: "VEG",
        ingredients: [
           {name: "Chicken (boneless)", quantity: "1"},
           {name: "Yogurt", quantity: "1.5cup"},
           {name: "Ginger-Garlic Paste", quantity: "1cup"},
           {name: "Turmeric", quantity: "1tbs"},
           {name: "Chilli Powder", quantity: "2tbs"},
           {name: "Garam Masala", quantity: "1.5tbs"}
        ]

    },
    {
        id:13,
        name:"Chicken Biryani",
        description: "Yummy and delicious spices flavoured Chicken Biryani.",
        image: food_13,
        mealType: "MAIN COURSES",
        type: "VEG",
        ingredients: [
           {name: "Chicken", quantity: "1.5kg"},
           {name: "Spices", quantity: "1 small cup"},
           {name: "Oil", quantity: "3cups"},
           {name: "Ginger & Garlic Paste", quantity: "1tbp"},
           {name: "Coriander", quantity: "10 Leaves"},
           {name: "Curd", quantity: "1cup"}
        ]

    },
    {
        id:14,
        name:"Fish Fry",
        description: "Flavoured and Tasty Fish Fry",
        image: food_14,
        mealType: "MAIN COURSES",
        type: "VEG",
        ingredients: [
           {name: "Fish", quantity: "2kg"},
           {name: "Spices", quantity: "1 small cup"},
           {name: "Oil", quantity: "3cups"},
           {name: "Ginger & Garlic Paste", quantity: "1tbp"},
           {name: "Coriander", quantity: "10 Leaves"},
        ]
    },
    {
        id:15,
        name:"Chicken Dum Biryani",
        description: "Famous and Delicious spices flavoured chicken dum biryani.",
        image: food_15,
        mealType: "MAIN COURSES",
        type: "VEG",
        ingredients: [
            {name: "Chicken", quantity: "1.5kg"},
           {name: "Spices", quantity: "1 small cup"},
           {name: "Oil", quantity: "3cups"},
           {name: "Ginger & Garlic Paste", quantity: "1tbp"},
           {name: "Coriander", quantity: "10 Leaves"},
        ]

    },
    {
        id:16,
        name:"Potato Fry",
        description: "Simple and tasty potato fry with no spices added.",
        image: food_16,
        mealType: "SIDES",
        type: "VEG",
        ingredients: [
            {name: "Potatoes", quantity: "1.5kg"},
           {name: "Oil", quantity: "3cups"},
          {name: "Chilli Powder", quantity: "2tbs"},
          {name: "Salt", quantity: "1.5tbs"},
           {name: "Coriander", quantity: "10 Leaves"},
        ]

    },
    {
        id:17,
        name:"Dal Makhan",
        description: "Popular and delicious Dal Makhan with limited spices.",
        image: food_17,
        mealType: "MAIN COURSES",
        type: "VEG",
        ingredients: [
            {name: "Dal", quantity: "1.5kg"},
           {name: "Oil", quantity: "3cups"},
           {name: "Ginger & Garlic Paste", quantity: "1tbp"},
           {name: "Coriander", quantity: "10 Leaves"},
        ]

    },
    {
        id:18,
        name:"Veg Thaali",
        description: "Pure vegetarian items with quality and tasty food for healthy.",
        image: food_18,
        mealType: "MAIN COURSES",
        type: "VEG",
        ingredients: [
            {name: "Rice", quantity:"2kgs"},
            {name: "Vegetables", quantity: "1.5kgs"},
            {name: "Oil", quantity: "5cups"},
            {name: "Chilli Powder", quantity: "4tbs"},
            {name: "Salt", quantity: "3tbs"}
        ]

    },
    {
        id:19,
        name:"Roasted Carrot",
        description: "Roasted Carrots brings out their natural sweetness, when topped with a tangy pesto.",
        image: food_19,
        mealType: "SIDES",
        type: "VEG",
        ingredients: [
           {name: "Carrots", quantity: "16-17"},
           {name: "Salt", quantity: "2tbs"},
           {name: "Basil Leaves", quantity: "1cup"},
           {name: "Black Pepper", quantity: "2tbs"},
           {name: "Carrot Greens", quantity: "1 1/2 cups"}
        ]

    },
    {
        id:20,
        name:"Macaroni",
        description: "This Macaroni and Cheeses recipe is simple and tasty to prepare with 7 ingredients.",
        image: food_20,
        mealType: "SIDES",
        type: "VEG",
        ingredients: [
            {name: "Macaroni", quantity: "1 box"},
            {name: "Butter", quantity: "0.25cup"},
            {name: "All-purpose flour", quantity: "0.25cup"},
            {name: "Salt", quantity: "0.5tbs"},
            {name: "Black Pepper", quantity: "1tbs"}
        ]

    },
    {
        id:21,
        name:"Aloo Fry",
        description: "This recipe is an easy and popular South Indian side dish made with potatoes,spices,etc..",
        image: food_21,
        mealType: "MAIN COURSES",
        type: "VEG",
        ingredients: [
            {name: "Potatoes", quantity: "1.5kg"},
           {name: "Oil", quantity: "3cups"},
          {name: "Chilli Powder", quantity: "2tbs"},
          {name: "Salt", quantity: "1.5tbs"},
           {name: "Coriander", quantity: "10 Leaves"},
        ]

    },
    {
        id:22,
        name:"Fried Broccoli With Garlic",
        description: "Most delicious easy pan-fried broccoli with garlice.",
        image: food_22,
        mealType: "SIDES",
        type: "VEG",
        ingredients: [
            {name: "Broccoli", quantity:"1 head"},
            {name: "Olive Oil", quantity: "2.5tbs"},
            {name: "Soya Sauce", quantity: "2tbs"},
            {name: "Cloves", quantity: "2"},
            {name: "Garlic", quantity: "2"},
            {name: "Lemon Juice", quantity: "1/4cup"}
        ]

    },
    {
        id:23,
        name:"Paneer Butter Masala",
        description: "Tasty and delicious ice cream with fully flavoured sprinkles.",
        image: food_23,
        mealType: "MAIN COURSES",
        type: "VEG",
        ingredients: [
            {name: "Paneer", quantity: "1kg"},
            {name: "Cashews", quantity: "18 to 20"},
            {name: "Tomatoes", quantity: "2cups"},
            {name: "Garlic", quantity: "3 to 4"}
        ]

    },

]
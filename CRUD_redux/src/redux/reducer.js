const value = {
    product : [
    {
      "id": 1,
      "title": "Wireless Headphones",
      "img": "https://sony.scene7.com/is/image/sonyglobalsolutions/1000X_THE_COLLEXION_primary_image?$primaryshotPreset$&fmt=png-alpha",
      "description": "High-quality wireless headphones with clear sound.",
      "price": 1499,
      "category": "Electronics"
    },
    {
      "id": 2,
      "title": "Smart Watch",
      "img": "https://rukminim3.flixcart.com/image/480/480/xif0q/smartwatch/n/o/z/-enriched-transparent-original-imah76jstup5zdww.png?q=90",
      "description": "Smart watch with fitness tracking and notifications.",
      "price": 2499,
      "category": "Electronics"
    },
    {
      "id": 3,
      "title": "Running Shoes",
      "img": "https://images.ctfassets.net/hnk2vsx53n6l/51P6uyBj7zt8QaM1DyD1eg/4b842416528db97db0b911d7dfe65304/ce8sjjfyhui5pcv5tcl6.png?fm=webp",
      "description": "Comfortable running shoes for everyday use.",
      "price": 1999,
      "category": "Fashion"
    },
    {
      "id": 4,
      "title": "Backpack",
      "img": "https://www.fgear.in/cdn/shop/files/1_527d93a7-e4ee-491f-bd6f-3a3c93d5313c.png?v=1759829244&width=1946",
      "description": "Stylish backpack for college, travel, and work.",
      "price": 899,
      "category": "Accessories"
    },
    {
      "id": 5,
      "title": "Bluetooth Speaker",
      "img": "https://media-ik.croma.com/Croma%20Assets/Communication/Speakers%20and%20Media%20Players/Images/323880_0_oKCL7M8hC.png?updatedAt=1784288706234",
      "description": "Portable Bluetooth speaker with powerful sound.",
      "price": 1299,
      "category": "Electronics"
    }
  ]
}

const Reducer = (state = value , action)=>{
    switch (action.type) {
        case "ADD_PRODUCT":
            return{
                ...state, product:[...state.product , action.data]
            }
    
        case "UPDATE_PRODUCT":
            
            break;
    
        case "DELETE_PRODUCT":
            
            break;
    
        default:
            return {...state}
    }
}

export default Reducer;
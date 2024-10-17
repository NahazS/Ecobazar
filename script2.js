const Product =[
    {
        id:1,
        name: "Green Apple",
        price: "$34.00",
        image: "./img/hot_deals_big_poster.png",
        rating: 4,
        subImg:["./img/hot_deals_big_poster.png","./img/product/product_1/1.png","./img/product/product_1/2.png","./img/product/product_1/3.png"]
    },
    {
        id:2,
        name: "Green Apple",
        price: "$14.99",
        image: "./img/product/product_1.png",
        rating: 4,
        subImg:["./img/product/product_1.png","./img/product/product_1/1.png","./img/product/product_1/2.png","./img/product/product_1/3.png"]
    },
    {
        id:3,
        name: "Fresh Indian Malta",
        price: "$20.00",
        image: "./img/product/product_2.png",
        rating: 4,
        subImg:["./img/product/product_2.png","./img/product/product_2/1.png","./img/product/product_2/2.png","./img/product/product_2/3.png"]
    },
    {
        id:4,
        name: "Chinese cabbage",
        price: "$12.00",
        image: "./img/product/product_3.png",
        rating: 4,
        subImg:["./img/product/product_3.png","./img/product/product_3/1.png","./img/product/product_3/2.png","./img/product/product_3/3.png"]
    },
    {
        id:5,
        name: "Green Lettuce",
        price: "$19.00",
        image: "./img/product/product_4.png",
        rating: 4,
        subImg:["./img/product/product_4.png","./img/product/product_4/1.png","./img/product/product_4/2.png","./img/product/product_4/3.png"]
    },
    {
        id:6,
        name: "Eggplant",
        price: "$34.00",
        image: "./img/product/product_5.png",
        rating: 4,
        subImg:["./img/product/product_5.png","./img/product/product_5/1.png","./img/product/product_5/2.png","./img/product/product_5/3.png"]
    },
    {
        id:7,
        name: "Big Potatoes",
        price: "$20.00",
        image: "./img/product/product_6.png",
        rating: 4,
        subImg:["./img/product/product_6.png","./img/product/product_6/1.png","./img/product/product_6/2.png","./img/product/product_6/3.png"]
    },
    {
        id:8,
        name: "Corn",
        price: "$12.00",
        image: "./img/product/product_7.png",
        rating: 4,
        subImg:["./img/product/product_7.png","./img/product/product_7/1.png","./img/product/product_7/2.png","./img/product/product_7/3.png"]
    },
    {
        id:9,
        name: "Fresh Cauliflower",
        price: "$12.00",
        image: "./img/product/product_8.png",
        rating: 4,
        subImg:["./img/product/product_8.png","./img/product/product_8/1.png","./img/product/product_8/2.png","./img/product/product_8/3.png"]
    },
    {
        id:10,
        name: "Green Capsicum",
        price: "$9.00",
        image: "./img/product/product_9.png",
        rating: 4,
        subImg:["./img/product/product_9.png","./img/product/product_9/1.png","./img/product/product_9/2.png","./img/product/product_9/3.png"]
    },
    {
        id:11,
        name: "Green Chili",
        price: "$34.00",
        image: "./img/product/product_10.png",
        rating: 4,
        subImg:["./img/product/product_10.png","./img/product/product_10/1.png","./img/product/product_10/2.png","./img/product/product_10/3.png"]
    },
    {
        id:12,
        name: "Fresh Cauliflower",
        price: "$12.00",
        image: "./img/product/product_8.png",
        rating: 4,
        subImg:["./img/product/product_8.png","./img/product/product_8/1.png","./img/product/product_8/2.png","./img/product/product_8/3.png"]
    },
    

]

function addwishlist(product) {
    const add_wishlist = document.getElementById('add_wishlist');
    const add_row = document.createElement('tr');
    add_row.className = "border-2 border-[#E6E6E6]";
    add_row.innerHTML = `
        <td class="flex flex-col sm:flex-row items-center">
            <img class="w-[50px] md:w-[100px]" src="${product.image}" class="product-image">
            <p>${product.name}</p>
        </td>
        <td>
            <span class="price">${product.price}</span>
        </td>
        <td>
            <span class="text-[#2C742F] py-[4px] px-[8px] bg-[#20b526] bg-opacity-20">In Stock</span>
        </td>
        <td>
            <button class="flex items-center justify-center bg-[#00B207] text-white py-4 px-3 sm:px-10 rounded-[43px]"><p class="hidden md:flex">Add to Cart</p>
                <span class="ml-0 md:ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M5.66667 7.33333H3.16667L1.5 16.5H16.5L14.8333 7.33333H12.3333M5.66667 7.33333V4.83333C5.66667 2.99239 7.15905 1.5 9 1.5V1.5C10.8409 1.5 12.3333 2.99238 12.3333 4.83333V7.33333M5.66667 7.33333H12.3333M5.66667 7.33333V9.83333M12.3333 7.33333V9.83333" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
            </button>
        </td>
    `;
    add_wishlist.appendChild(add_row);
}

// Retrieve the array from local storage
const a = JSON.parse(sessionStorage.getItem('myArray'));

// Check if 'a' is an array before processing
if (Array.isArray(a)) {
    a.forEach(id => {
        const temp = Product.find(product => product.id == id); // Use strict equality
        if (temp) { // Check if the product exists
            addwishlist(temp);
        } else {
            console.error(`Product with id ${id} not found.`);
        }
    });
} else {
    console.error('No valid array found in local storage.');
}
console.log('nahaz');
function addToArray(item) {
    let existingArray = JSON.parse(sessionStorage.getItem('myArray')) || [];
    if (!existingArray.includes(item)) {
        existingArray.push(item);
        sessionStorage.setItem('myArray', JSON.stringify(existingArray));
    }
}

const hot_bit_product = '<img src="./img/hot_deals_big_poster.png" alt="">'
const star_full = '<img src="img/Star_full.svg" alt="">';
const star_empty = '<img src="img/Star.svg" alt="">';
const Popular =[
    {
        name: "Fresh Fruit",
        image: "./img/popular/image.png"
    },
    {
        name: "Fresh Vegetables",
        image: "./img/popular/image_1.png"
    },
    {
        name: "Meat & Fish",
        image: "./img/popular/image_2.png"
    },
    {
        name: "Snacks",
        image: "./img/popular/image_3.png"
    },
    {
        name: "Beverages",
        image: "./img/popular/image_4.png"
    },
    {
        name: "Beauty & Health",
        image: "./img/popular/image_5.png"
    },
    {
        name: "Bread & Bakery",
        image: "./img/popular/image_6.png"
    },
    {
        name: "Baking Needs",
        image: "./img/popular/image_7.png"
    },
    {
        name: "Cooking",
        image: "./img/popular/image_8.png"
    },
    {
        name: "Diabetic Food",
        image: "./img/popular/image_9.png"
    },
    {
        name: "Dish Detergents",
        image: "./img/popular/image_10.png"
    },
    {
        name: "Oil",
        image: "./img/popular/image_11.png"
    },
    
]
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

function addPopular(product)
{
    return `
        <div class="popular_box">
            <img class="my-[16px]" src="${product.image}" alt="">
            <h5>${product.name}</h5>
        </div>
    `
}

//<!------------------------ Popular Categories  ---------------------------->
const popular_categories = document.querySelector('#popular_categories');
popular_categories.innerHTML = Popular.map(addPopular).join('');

function addProduct(product)
{
    const star = star_full.repeat(product.rating) + star_empty.repeat(5 - product.rating );
    return `
        <div class="pop_product_box relative group">
            <div class="absolute top-0 right-2 opacity-0 transform -translate-x-52 transition-all  group-hover:translate-x-0 group-hover:opacity-100">
                <div>
                    <button onclick="addToArray('${product.id}')" class="small_btn mb-2"><img src="./img/Heart 2.svg" alt=""></button>
                    <button id="eye" onclick="modal(${product.id}); my_modal_3.showModal();" class="small_btn"><img src="./img/Eye 1.svg" alt=""></button>
                </div>
            </div>
            <img class="p-[5px]" src="${product.image}" alt="">
            <div class="p-[12px]">
                <p>${product.name}</p>
                <div class="flex justify-between items-center">
                    <h6>${product.price}</h6>
                    <button onclick="idstorage(${product.id})" class="small_btn"><img class="w-5 h-5" src="./img/Bag.svg" alt=""></button>
                </div>
                <div class="flex">
                    ${star}
                </div>
            </div>    
        </div>
    `;

}

//<!------------------------ Popular Products  ---------------------------->
const popularProducts = Product.slice(1,11);
const product_div = document.querySelector('#pop_product');
product_div.innerHTML = popularProducts.map(addProduct).join('');

// <!------------------------ Featured Products ---------------------------->
const featuredProducts = Product.slice(1,6);
const featured_products = document.querySelector('#featured_products');
featured_products.innerHTML = featuredProducts.map(addProduct).join('');


function hotProduct(product , index=0)
{
    let extra_style = "";

    if(index === 0)
        extra_style = "col-span-2 row-span-2 sm:col-span-2 sm:row-span-2 place-content-center mx-auto sm:mx-0 w-full";
    else
        extra_style = "max-w-[264px]";
    const star = star_full.repeat(product.rating) + star_empty.repeat(5 - product.rating );
    return `
        <div onclick="idstorage(${product.id})" class="pop_product_box ${extra_style}">
            <img class="p-[5px]" src="${product.image}" alt="">
            <div class="p-[12px]">
                <p>${product.name}</p>
                <div class="flex justify-between items-center">
                    <h6>${product.price}</h6>
                    <img class="bg-[#CCCCCC] rounded-full hover:bg-[#00B207] p-1" src="img/Bag.svg" alt="">
                </div>
                <div class="flex">
                    ${star}
                </div>
            </div>    
        </div>
    `;

}
//<!------------------------ Hot Deals  ---------------------------->
const hot_product = document.querySelector('#hot_product');
hot_product.innerHTML = Product.map(hotProduct).join('');

function modal(id)
{
    const selectProduct = Product.find(product => product.id == id);
    showProduct(selectProduct);
}
function idstorage(id)
{
    localStorage.setItem("product_id", id);
    window.location.href = 'select_product.html';
}
function showProduct(product)
{
    const product_name = document.getElementById('product_name');
    product_name.innerText = product.name;
    const product_price = document.getElementById('product_price');
    product_price.innerText = product.price;
    const show_product = document.querySelector('#show_product');
    show_product.innerHTML = `
    <div class="flex flex-col-reverse md:flex-row w-fit items-center">
        <div class="flex flex-row md:flex-col">
            <img class="smallImg" src="${product.subImg[0]}" onclick="displayImg(this)" alt="">
            <img class="smallImg" src="${product.subImg[1]}" onclick="displayImg(this)" alt="">
            <img class="smallImg" src="${product.subImg[2]}" onclick="displayImg(this)" alt="">
            <img class="smallImg" src="${product.subImg[3]}" onclick="displayImg(this)" alt="">
        </div>
        <div class=""><img id="big_img" class="h-[356px] w-[356px] sm:h-[456px] sm:w-[456px] md:h-[556px] md:w-[556px]" src="${product.image}" alt=""></div>
    </div>

    `
}
function displayImg(smallImg)
{
    const big_img = document.getElementById('big_img');
    big_img.src = smallImg.src;
}
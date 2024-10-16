
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

const selectProductId = localStorage.getItem("product_id");
console.log(selectProductId);
const selectProduct = Product.find(product => product.id == selectProductId);
console.log(selectProduct);
// show the product in select_product page 
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
showProduct(selectProduct);

function displayImg(smallImg)
{
    const big_img = document.getElementById('big_img');
    big_img.src = smallImg.src;
}
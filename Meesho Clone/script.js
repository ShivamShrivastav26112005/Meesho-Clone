import BagsFootwear from "./data/BagsFootwear.js" // Diff Js files (like BagsFootwear.js, BeautyHealth.js, etc.) are imported.
import BeautyHealth from "./data/BeautyHealth.js"
import Electronics from "./data/Electronic.js" 
import HomeAndKitchen from "./data/HomeAndKitchen.js"
import JewelleryAccessories from "./data/JewelleryAccessories.js"
import Kids from "./data/Kids.js"
import Men from "./data/Men.js"
import WomenEthnic from "./data/WomenEthnic.js"
import WomenWestern from "./data/WomenWestern.js"



// Search Bar Functionality -: 
// Shows/hides close button when typing.
// Stores and displays recent searches dynamically.


// querySelector -: Select element that matches a specific CSS selector
// getElementById -: select a single HTML element by its unique id

let inputSearchEl = document.querySelector(".inputSearch")
let recentInput = []
let formInputEl = document.getElementById("inputForm")
const listofRecentEl = document.querySelector(".listofRecent")

// addEventListener -: attach event handlers to HTML elements

inputSearchEl.addEventListener("keydown", () => {
    // console.log(inputSearchEl)
    if (inputSearchEl.value) {
        document.getElementById("closeSearch").style.display = "block"
    }
    else {
        document.getElementById("closeSearch").style.display = "none"
    }
})

formInputEl.addEventListener("submit", (e) => {
    e.preventDefault()
    let listofRecentHTMLEl = ""

    recentInput.unshift(inputSearchEl.value)
    console.log(recentInput)

    if (recentInput.length > 0) {
        for (let i = 0; i < recentInput.length; i++) {
            listofRecentHTMLEl += `
            <div class="recentItem">
                <div class="recentIcon">
                     <img src="./img/recent.png"/>
                </div>
                <p>${recentInput[i]}</p>
            </div>
        `
        }

        listofRecentEl.innerHTML = listofRecentHTMLEl
    }
})



// Dynamic Menu Rendering -:
// Renders submenus dynamically based on category data.

/*function reuble*****/
function renderSubMenu(id, data) {
    let temp = document.getElementById(id)
    function TempFunc() {
        return data.map(el => {
            let list = "";
            list = el.data.map(element => `<p>${element}</p>`).join(" ")
            return `
        <div class="column">
            <h4>${el.heading}</h4>
            ${list}
        </div>
       `
        }).join("")
    }
    temp.innerHTML = TempFunc()
}




// renderSubMenu -: populates HTML elements with 
// content related to specific product categories, 
// making the UI dynamic and reducing repetitive code.



// ID of the target HTML element ("womenEthic").
// Category data ( WomenEthnic).


/****womenEthic */
renderSubMenu("womenEthic", WomenEthnic)

/****WomenWestern */
renderSubMenu("womenWestern", WomenWestern)

//Men 
renderSubMenu("men", Men)

/***kids */
renderSubMenu("kids", Kids)

/**home % kitchen */
renderSubMenu("HomeAndKitchen", HomeAndKitchen)

/**beauty and health */
renderSubMenu("beautyAndHealth", BeautyHealth)

// Jewellery & Accessories
renderSubMenu("JewelleryAndAccessories", JewelleryAccessories)

// Bags & Footwear
renderSubMenu("BagsFootWarId", BagsFootwear)

// Electronics
renderSubMenu("ElectronicsId", Electronics)






/**********product section***************/
import ProductData from "./meesho/data.js"

const category = [...new Set(ProductData.map(el => el.category))]
console.log(category)


let filterData = []


// Filter and Product Display -:
// Filters products based on selected checkboxes.
// Displays products dynamically, filtered or all.


document.addEventListener("click", (e) => {


    const bluetoothEl = document.getElementById("bluetooth").checked
    const ChainsEl = document.getElementById("chains").checked
    const KurtasEl = document.getElementById("kurtas").checked
    const AccessoriesEl = document.getElementById("accessories").checked
    const sareesEl = document.getElementById("sarees").checked
    const watchEl = document.getElementById("watch").checked

    console.log(bluetoothEl)
    filterData = ProductData.filter(el => (
        bluetoothEl && el.category == "bluetooth Headset" ||
        ChainsEl && el.category == "Men Chains" ||
        KurtasEl && el.category == "Kurtas" ||
        AccessoriesEl && el.category == "Mobile Accessories" ||
        sareesEl && el.category == "sarees" ||
        watchEl && el.category == "watch"
    ))

    renderProductData()


})

function renderProductData(){
    let filterDataHTML = "";

    if(filterData[0]){
        filterData.forEach(el => {
            filterDataHTML += `
            <div class="productCard" onclick="ClickProduct(${el.id})">
                <div class="product_image">
                    <img src="./meesho/productImage/${el.img}"/>
                </div>
                <h3 class="product_name">${el.name}</h3>
                <p class="product_price">
                    <span>₹</span>
                    <span>${el.price}</span>
                </p>
             </div>
            `
        })
    }
    else{
        ProductData.forEach(el => {
            filterDataHTML += `
            <div class="productCard" onclick="ClickProduct(${el.id})">
                <div class="product_image">
                    <img src="./meesho/productImage/${el.img}"/>
                </div>
                <h3 class="product_name">${el.name}</h3>
                <p class="product_price">
                    <span>₹</span>
                    <span>${el.price}</span>
                </p>
             </div>
            `
        }) 
    }
    
    document.getElementById("product_category_displayId").innerHTML = filterDataHTML
} 
renderProductData()



// Product Click -: Stores product ID in local storage when clicked.

function ClickProduct(id){
    localStorage.setItem("productId",JSON.stringify(id))
    // window.location("./page/product.html")

    alert("hii")
}














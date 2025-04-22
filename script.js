import { getArticlesArray } from "./modules/getArrays.js";
import { createMainArticles } from "./modules/createMainArticles.js";
import { categoriesFilter } from "./modules/categoriesFilter.js";

export let cartList = [];

import { APIURL } from "./const/ApiUrl.js";

let mainarticlescontainer = document.getElementById("articles-container")
let categoriesfiltercontainer = document.getElementById("categories-filter")
let topsellercontainer = document.getElementById("top-seller-content");
export let cartArticles = document.getElementById("cart-articles");

let bannercontainer = document.getElementById("top-banner");
let closebannerbtn = document.getElementById("close-top-banner-btn");

let searchbar = document.getElementById("searchbar");
let submitsearch = document.getElementById("searchbtn");

closebannerbtn.addEventListener("click", () => {
    bannercontainer.innerHTML = "";
})

export let searchtext = "";
export let search = false;
let categorychosen = "";
let categorychosed = false


submitsearch.addEventListener("click", () => {
    searchtext = searchbar.value;
    if(searchtext === ""){
        search = false;
        createMainArticles(mainarticlescontainer, searchtext, search);
    } else {
        search = true;
        createMainArticles(mainarticlescontainer, searchtext, search);
    }
});


let cartbutton = document.getElementById("cart-btn");
let cartvisible = false;

cartbutton.addEventListener("click", () => {
    if(!cartvisible){
        cartArticles.style.display = "block";
        cartvisible = true;
    } else {
        cartArticles.style.display = "none";
        cartvisible = false;
    }
})


createMainArticles(mainarticlescontainer, searchtext, search, categorychosen, categorychosed);
categoriesFilter(categoriesfiltercontainer, mainarticlescontainer, search, searchtext, categorychosen, categorychosed);

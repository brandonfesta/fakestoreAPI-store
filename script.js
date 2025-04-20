import { getArticlesArray } from "./modules/getArrays.js";
import { createMainArticles } from "./modules/createMainArticles.js";
import { categoriesFilter } from "./modules/categoriesFilter.js";
import { topSellerCard } from "./modules/topSellerCard.js";

import { APIURL } from "./const/ApiUrl.js";

let mainarticlescontainer = document.getElementById("articles-container")
let categoriesfiltercontainer = document.getElementById("categories-filter")
let topsellercontainer = document.getElementById("top-seller-content");

let bannercontainer = document.getElementById("top-banner");
let closebannerbtn = document.getElementById("close-top-banner-btn");

let searchbar = document.getElementById("searchbar");
let submitsearch = document.getElementById("searchbtn");

closebannerbtn.addEventListener("click", () => {
    bannercontainer.innerHTML = "";
})

let searchtext = "";


submitsearch.addEventListener("click", () => {
    searchtext = searchbar.value;
    createMainArticles(mainarticlescontainer, searchtext)
});


createMainArticles(mainarticlescontainer, searchtext);
categoriesFilter(categoriesfiltercontainer);
topSellerCard(topsellercontainer)

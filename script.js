import { getArticlesArray } from "./modules/getArrays.js";
import { createMainArticles } from "./modules/createMainArticles.js";
import { categoriesFilter } from "./modules/categoriesFilter.js";

import { APIURL } from "./const/ApiUrl.js";

let mainarticlescontainer = document.getElementById("articles-container")
let categoriesfiltercontainer = document.getElementById("categories-filter")

let bannercontainer = document.getElementById("top-banner");
let closebannerbtn = document.getElementById("close-top-banner-btn");

closebannerbtn.addEventListener("click", () => {
    bannercontainer.innerHTML = "";
})


createMainArticles(mainarticlescontainer);
categoriesFilter(categoriesfiltercontainer);


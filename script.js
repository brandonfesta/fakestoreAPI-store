import { getArticlesArray } from "./modules/getArrays.js";
import { createMainArticles } from "./modules/createMainArticles.js";
import { categoriesFilter } from "./modules/categoriesFilter.js";

import { APIURL } from "./const/ApiUrl.js";

export let mainarticlescontainer = document.getElementById("articles-container")
let categoriesfiltercontainer = document.getElementById("categories-filter")
let topsellercontainer = document.getElementById("top-seller-content");

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


createMainArticles(mainarticlescontainer, searchtext, search, categorychosen, categorychosed);
categoriesFilter(categoriesfiltercontainer, mainarticlescontainer, search, searchtext, categorychosen, categorychosed);

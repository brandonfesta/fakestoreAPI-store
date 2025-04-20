import { getArticlesArray } from "./modules/getArticlesArray.js";
import { createMainArticles } from "./modules/createMainArticles.js";
import { APIURL } from "./const/ApiUrl.js";

let mainarticlescontainer = document.getElementById("articles-container")

let bannercontainer = document.getElementById("top-banner");
let closebannerbtn = document.getElementById("close-top-banner-btn");

closebannerbtn.addEventListener("click", () => {
    bannercontainer.innerHTML = "";
})


createMainArticles(mainarticlescontainer);



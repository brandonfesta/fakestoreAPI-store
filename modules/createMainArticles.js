import { APIURL } from "../const/ApiUrl.js";
import { getArticlesArray } from "./getArrays.js"


export async function createMainArticles(mainarticlescontainer, searchtext, search, categorychosen, categorychosed){
    mainarticlescontainer.innerHTML = "";
    let products = await getArticlesArray(searchtext, search, categorychosen, categorychosed);
    products.products.map(product => createArticle(product, mainarticlescontainer));
}

function createArticle(product, mainarticlescontainer){
    let article = document.createElement("article");
    let image = document.createElement("img");
    let brand = document.createElement("h6");
    let title = document.createElement("h3");
    let price = document.createElement("h4");
    let button = document.createElement("button");

    image.src = product.thumbnail;
    brand.textContent = product.brand;
    title.textContent = product.title;
    price.textContent = product.price + "$";
    button.textContent = "ADD TO CART";

    let div = document.createElement("div");

    article.append(image);
    div.append(brand);
    div.append(title);
    div.append(price);
    div.append(button);
    article.append(div)

    mainarticlescontainer.append(article);

}
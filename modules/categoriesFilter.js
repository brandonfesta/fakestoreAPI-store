import { getCategoriesArray } from "./getArrays.js";

export async function categoriesFilter(container){
    container.innerHTML = "";
    let categories = await getCategoriesArray();
    categories.map(category => createCategoriesFilter(category, container));
}

function createCategoriesFilter(category, container){
    let categorybtn = document.createElement("button");

    categorybtn.textContent = category.name;


    container.append(categorybtn);
}
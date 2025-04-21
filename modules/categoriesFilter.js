import { createMainArticles } from "./createMainArticles.js";
import { getCategoriesArray } from "./getArrays.js";

export async function categoriesFilter(container, mainarticlescontainer, search, searchtext, categorychosen, categorychosed){
    container.innerHTML = "";
    let categories = await getCategoriesArray();
    categories.map(category => createCategoriesFilter(category, container, mainarticlescontainer, search, searchtext, categorychosen, categorychosed));
}

function createCategoriesFilter(category, container, mainarticlescontainer, search, searchtext, categorychosen, categorychosed){
    let categorybtn = document.createElement("button");

    categorybtn.textContent = category.name;

    categorybtn.addEventListener("click", () => {
        categorychosen = categorybtn.textContent;
        categorychosed = true
        createMainArticles(mainarticlescontainer, searchtext, search, categorychosen, categorychosed)
    })

    container.append(categorybtn);
}
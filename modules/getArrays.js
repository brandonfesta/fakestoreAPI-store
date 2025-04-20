import { APIURL } from "../const/ApiUrl.js"

export async function getArticlesArray(searchtext){
    try{
        let response = await fetch(APIURL+"/search?q="+searchtext);
        if(response.status === 404){
            throw new Error("cannot get products");
        }
        let products = await response.json();
        return products;
    }catch(error){
        alert(error)
    }
}
export async function getCategoriesArray(){
    try{
        let response = await fetch(APIURL+"/categories");
        if(response.status === 404){
            throw new Error("cannot get products");
        }
        let categories = await response.json();
        return categories;
    }catch(error){
        alert(error)
    }
}
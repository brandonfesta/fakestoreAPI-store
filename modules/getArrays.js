import { APIURL } from "../const/ApiUrl.js"

export async function getArticlesArray(searchtext, search, categorychosen, categorychosed){
    try{
        let response;
        if(!categorychosed){
            if(search){
                response = await fetch(APIURL+"/search?q="+searchtext);
            }else{
                response = await fetch(APIURL+"?limit=16");
            }
        } else{
            response = await fetch(APIURL+"/category/"+categorychosen);
        }
        
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
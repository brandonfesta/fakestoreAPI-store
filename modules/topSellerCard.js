import { APIURL } from "../const/ApiUrl.js";

export async function topSellerCard(container){ 
    container.innerHTML = "";
    
    try{
        let response = await fetch(APIURL+"?limit=0")
        if(response.status === 404){
            throw new Error();
        }
        let products = await response.json();
        console.log(products)
        let maxproduct = await Math.max(...products.products.rating)
        console.log(maxproduct)
    } catch (error){
        alert(error)
    }
}
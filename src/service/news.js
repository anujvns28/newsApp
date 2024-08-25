import axios from "axios"
import API_URL from "../constant";


export const fetchNews = async() =>{
    let result
    try{
        const data = await axios({method:"GET",url:API_URL});
        if(data){
            result = data.data.articles
        }
    }catch(err){
        console.log("Error in fetching news",err)
    }
    return result;
}
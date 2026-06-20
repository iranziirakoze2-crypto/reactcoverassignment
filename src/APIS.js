import { BASE_URL } from "./AuthHeaders"

export const GetOrdersAPI=async()=>{
    return await fetch(`${BASE_URL}/orderrouter/getallorders`,{
    method:"GET",
    Headers:{
        "Content-Type":"application/json"
    }
    });
}
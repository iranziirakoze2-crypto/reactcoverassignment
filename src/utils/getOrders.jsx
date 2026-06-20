import { useEffect } from "react"
import { useState } from "react"
import { toast } from "react-toastify"
import { GetOrdersAPI } from "../APIS"


export const GetAllOrders =()=>{
  
    const[items,setItems]=useState([])

   useEffect(()=>{
    const fetchAllOrders =async()=>{
        try {
         const response= await GetOrdersAPI()
        const data= await response.json()
        if(!response.OK){
            toast(data.message||"Fetch Order failed")
        }
        setItems(data.data||[])
         toast(data.message||"Orders fetched successfully")
            
        } catch (error) {
            console.log(error.message)
        }
     
    }

    fetchAllOrders()
  },[])
  return{items}
}


import {useState} from "react"
import { useEffect } from "react"

const Customers=(props)=>{

    //my two counters
    const[counter1,setCounter1]=useState(10)
    const[counter2,setCounter2]=useState(20)

    //fetch function to call all the users

    const getUsers= async()=>{
          
        try{
        const response= await fetch ("https://jsonplaceholder.typicode.com/users")
        const users=await response.json()
        console.log(users)

    } catch(error){
        console.log(error)
    }
    }

// getUsers()

// use effect to call a specific function only when it is needed

  useEffect(()=>{
    getUsers()

 },[])  // dependancy array->[counter2] controls like ,fn called when counter2 changes


    return(
         //fragment
        <>  
        My customers component! <br/>
        Counter1 : {counter1}<button onClick={e=>setCounter1(counter1+1)}>ctr1+</button>  <br/>
        Counter2 : {counter2}<button onClick={e=>setCounter2(counter2+2)}>ctr2+</button>  <br/>
        
        </>
    )


}

export default Customers
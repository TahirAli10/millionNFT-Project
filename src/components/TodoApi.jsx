import React, { Component } from 'react';
import {useState, useEffect} from 'react'
import axios from "axios";
const Todo = (props) => {
    const [person ,setPerson] = useState({data:[]});
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
              axios.get("https://fakerapi.it/api/v1/addresses?_quantity=1").then(responce=>
               
                 setPerson(responce.data)
              ).catch(error =>{
                return console.log(error)
              })
     
    },[])
  
 
   console.log(person)
    return ( <>

    <div>{person.data.map(p => <div key={p.id}>
        {p.street}
    </div>)}</div>
    </> );
}
 
export default Todo;
import React, { Component } from 'react';
import {useState, useContext ,  useEffect} from 'react'
import counterContext from './context';
import Counter from './counter';
const Hooks = (props) => {
    const CounterContext  = useContext(counterContext)
   
    const object = { a: 1, b: 2, c: 3 };
    const keys = Object.keys(object);
    const mapped = keys.map(key => [key, object[key]]);
    console.log(mapped); // [['a', 1], ['b', 2], ['c', 3]]

        return ( <>
        <div>
            hello
            <div>{CounterContext.counter}</div>
            <button className='btn badge-danger' onClick={CounterContext.handleChange}>Add</button>
        </div>
    </> );
}
export default Hooks;
    
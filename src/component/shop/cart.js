import React, { Component, useEffect } from "react";
import Purchase from "./purchase";
import './cart.css'
export default function Cart() {
  let stopdec ="false";
  let arr =new Array([]);

  let temp = localStorage.getItem("cart");
   arr = JSON.parse(temp);
  let sum = 0;
  arr.map((item, index) => {
    sum += item.price*item.count;
    return sum;
  });
  console.log(sum);

  let newcart = new Array();

  let remove = (index) => {
    if (temp != null) {
      newcart = JSON.parse(temp);
    }
    newcart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(newcart));
    window.location.href = "/cart";
  };
  let incCount=(arr,index)=>{
    for(var i in arr ){
      if( arr[i].id == index){
        arr[i].count+=1;
        localStorage.setItem("cart",JSON.stringify(arr));
      }
      window.location.href="/cart";
    }
  }
  let decCount =(arr,index)=>{
    for(var i in arr ){
      if(arr[i].count == 0){
        // remove(index);
      }else if( arr[i].id == index && arr[i].count !== 1){
        arr[i].count-=1;
        localStorage.setItem("cart",JSON.stringify(arr));
      }
      window.location.href="/cart";
    }
  }
  return (
    <div>
      <h1>CART</h1>
      <button  className="btn btn-primary btn-block btn-large"
        onClick={() => {
          window.location.href = "/purchase";
        }}
      >
        BACK TO SHOP
      </button>
      <table>
        {arr.map((item, index) => {
          return (
            <tr key={index}>
              <td>
                <img className="lap" src={item.ph} />
              </td>
              <td>
              {item.price}
              </td>
              <td>
                <button className="button"  onClick={()=>decCount(arr,item.id)}>-</button>
                {item.count}
                <button className="button" onClick={()=>incCount(arr,item.id)}>+</button>
              </td>
              <td>
                <button className="btn btn-primary btn-block btn-large" onClick={() => remove(index)}>remove from cart</button>
              </td>
            </tr>
          );
        })}
        <tr>
          <td ></td>
          <td >Total  ={sum}</td>
        </tr>
      </table>
      <br></br>
      <br></br>
    </div>
  );
}

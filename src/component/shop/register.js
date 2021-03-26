import React, { useState } from "react";
import "./register.css";
import {
  BrowserRouter as Router,
  Route,
   Link,
    Switch
} from 'react-router-dom';
function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [age, setage] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword,setCpassword] = useState("");
  let arr = new Array();
  console.log(username, email, age, password);
  // let userdetails = new Array();

  
  let savedetails = async () => {


    if(username === null ||email === null || age === null || password === null || cpassword === null){
      alert("enter all details");
    }else if((!/^[a-zA-Z]*$/g.test(username)) )
    {
      alert("enter valid user name");
    }
    else if((! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g.test(email))){
      alert("enter valid email address");
    }else if((!/^[0-9]*$/g.test(age)) && age<=90){
      alert("enter valid age");
    }else if(password !== cpassword){
      alert("password don't matching");
    }else {

      let temp = localStorage.getItem("shopuser");
      console.log(temp);
      if (temp != null) {
        arr = await JSON.parse(temp);
        console.log(arr);
        
      }
      arr.push({
        username: username,
        email: email,
        age: age,
        password: password,
      });
      localStorage.setItem("shopuser", JSON.stringify(arr));
      alert("user registered");
      window.location.href="/login";


    } 
 
    setUsername("");
    setEmail("");
    setage("");
    setpassword("");
    setCpassword("");
  };

  return (
 
    <div>

      <div className="p">
        <table className=".styled-table">
          <tr>
            <td>USER NAME</td>
            <td>
              <input
                type="text"
                  value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              ></input>
            </td>
          </tr>
          <tr>
            <td>EMAIL ID</td>
            <td>
              <input
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
            </td>
          </tr>
          <tr>
            <td>age</td>
            <td>
              <input
                type="text"
                value={age}
                onChange={(e) => {
                  setage(e.target.value);
                }}
              ></input>
            </td>
          </tr>
          <tr>
            <td>password</td>
            <td>
              <input
                type="text"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              ></input>
            </td>
          </tr>
          <tr>
            <td>confirm password</td>
            <td>
              <input
                type="text"
                value={cpassword}
                onChange={(e) => {
                  setCpassword(e.target.value);
                }}
              ></input>
            </td>
          </tr>
          <tr>
            <td></td>
            <td><button className="btn btn-primary btn-block btn-large" onClick={savedetails}>SUBMIT</button>
              
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
export default Register;

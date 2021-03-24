import React, { useState } from "react";
import "./register.css";
function Register() {
  // const [userdetails,setUserdetails]=useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [age, setage] = useState("");
  const [password, setpassword] = useState("");
  let arr = new Array([]);
  console.log(username, email, age, password);
  // let userdetails = new Array();
  let savedetails = async () => {
    let temp = localStorage.getItem("shopuser");
    console.log(temp);
    if (temp != null) {
      arr = await JSON.parse(temp);
      // setUserdetails(JSON.parse(temp));
      console.log(arr);

      // console.log(userdetails)
    }
    arr.push({
      username: username,
      email: email,
      age: age,
      password: password,
    });
    localStorage.setItem("shopuser", JSON.stringify(arr));
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
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              ></input>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button className="btn btn-primary btn-block btn-large" onClick={savedetails}>SUBMIT</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
export default Register;

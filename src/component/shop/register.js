import React, { useState,useEffect } from 'react';
function Register() {
    const [userdetails,setUserdetails]=useState([]);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [age, setage] = useState("");
    const [password, setpassword] = useState("");
    console.log(username, email, age, password);
    // let userdetails = new Array();
    var save =() => {
        let temp = localStorage.getItem("shopuser");
        if (temp != null) {
            let userdetails = JSON.stringify(temp);
            console.log(userdetails);
        }
        userdetails.push({
            username: username,
            email: email,
            age: age,
            password: password
        })
        localStorage.setItem("shopuser",JSON.stringify(userdetails));
        
    }
    
    
    return (
        <div>
            <label>FIRST NAME</label><input type="text" onChange={(e) => { setUsername(e.target.value) }}></input><br></br>
            <label>EMAIL ID</label><input type="text" onChange={(e) => { setEmail(e.target.value) }}></input><br></br>
            <label>age</label><input type="text" onChange={(e) => { setage(e.target.value) }}></input><br></br>
            <label>password</label><input type="text" onChange={(e) => { setpassword(e.target.value) }}></input><br></br>
            <button onClick={save}>SUBMIT</button>
        </div>
    );

}
export default Register;
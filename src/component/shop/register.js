import React, { useState} from 'react';
function Register() {
    // const [userdetails,setUserdetails]=useState([]);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [age, setage] = useState("");
    const [password, setpassword] = useState("");
    let arr =new Array([]);
    console.log(username, email, age, password);
    // let userdetails = new Array();
     let savedetails =async() => {
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
            password: password
        });
        localStorage.setItem("shopuser",JSON.stringify(arr));
        
    }
    
    
    return (
        <div>
            <label>USER NAME</label><input type="text" onChange={(e) => { setUsername(e.target.value) }}></input><br></br>
            <label>EMAIL ID</label><input type="text" onChange={(e) => { setEmail(e.target.value) }}></input><br></br>
            <label>age</label><input type="text" onChange={(e) => { setage(e.target.value) }}></input><br></br>
            <label>password</label><input type="text" onChange={(e) => { setpassword(e.target.value) }}></input><br></br>
            <button onClick={savedetails}>SUBMIT</button>
        </div>
    );

}
export default Register;
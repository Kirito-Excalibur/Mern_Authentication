import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [name, Setname] = useState("");
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");

 async function registerUser(event){
  event.preventDefault()
const response= await fetch('http://localhost:1337/api/register',{
  method:'POST',
  headers:{
    'Content-Type':'application/json'
  },
  body: JSON.stringify({
    name,
    email,
    password,
  })
})

const data=await response.json()
console.log(data)

  }


  return (
    <div className="App">
      <h1>Authentication</h1>

      <form onSubmit={registerUser}>
        <input
          onChange={(e) => Setname(e.target.value)}
          type="name"
          placeholder="Name"
        />
        <br />
        <input
          onChange={(e) => Setemail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <br />
        <input
          onChange={(e) => Setpassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <br />
        <input type="submit" value="Register" />
       
      </form>
    </div>
  );
}

export default App;

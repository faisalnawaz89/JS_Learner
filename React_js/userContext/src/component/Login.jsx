import React from "react";
import UserContext from "../context/UserContext";
import { useState } from "react";
import { useContext } from "react";


export default function Login(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser(username, password)
    }
    return(
        <>
        <h1>Login</h1>
        <input 
        type="text" 
        value={username}
        onChange={(e)=> setUsername(e.target.value)}
        placeholder={username}
        />
        <br/>
        <input 
        type="text" 
        onChange={(e)=>setPassword(e.target.value)}
        placeholder={password}
        />
        <br/>
        <button type="submit" onClick={handleSubmit}>Submit</button>
        </>
    )
}
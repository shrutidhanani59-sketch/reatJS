import { useState } from "react"

function Demo()
{
    const [fname , setFname] = useState("");
    const [lname , setlname] = useState("");
    const [age , setage] = useState();
    const [is18 , setis18] = useState(true);
    return(
         <>
        <button onClick={()=>{setFname(prompt("Enter your first name: "))}}>Fname</button>
        <button onClick={()=>{setlname(prompt("Enter your last name: "))}}>lname</button>
        <button onClick={()=>{setage(prompt("Enter your age name: "))}}>age</button>
        <button onClick={()=>{setis18((age>=18))}}>is18</button>

        <h1>Enter Name : {fname} {lname}</h1>
        <h1>Age Name : {age} </h1>
        <h1>is18 Name : {(is18)?"true":"false"}</h1>
     </>
    )
    
}
export default Demo
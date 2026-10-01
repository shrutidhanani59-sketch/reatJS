import { useEffect } from "react";
import {useNavigate} from "react-router-dom"

function Logout(){
    const navigate = useNavigate();
    useEffect(()=>{
        localStorage.setItem("login",JSON.stringify({islogin : false}));
        navigate("/login");
    });
    return (
        <></>
        
    )
}

export default Logout;
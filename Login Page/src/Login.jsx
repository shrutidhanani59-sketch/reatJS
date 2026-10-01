import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email,setEmail] = useState("");
    const [pwd,setPwd] = useState("");
    const navigate = useNavigate();
    let islogin = false;

    const localdata = JSON.parse(localStorage.getItem("userData"));
    const handleClick = (e)=>{
        e.preventDefault();
        if(email == localdata.email){
            if(pwd==localdata.password){
                islogin = true;
                navigate("/home");
            }else{
                // document.querySelector("pwd").innerHTML = "Wrong Password";
                // Toolkit 
            }
        }else{
            navigate("/register");
        }
    }

    useEffect(()=>{
        if(islogin == true){
            localStorage.setItem("login",JSON.stringify({islogin : true}));
        }
    },[islogin]);
    return (
        <div class="container">
            <div class="row justify-content-center align-items-center min-vh-100">
                <div class="col-md-6 col-lg-5">
                    <div class="card shadow border-0">
                        <div class="card-body p-4">
                            <h2 class="text-center fw-bold mb-4"> Sign In </h2>
                            <form>
                                <div class="mb-3">
                                    <label class="form-label"> Email </label>
                                    <input type="email" class="form-control" placeholder="Enter your email" />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label"> Password </label>
                                    <input type="password" class="form-control" placeholder="Enter your password" />
                                </div>
                                <div class="form-check mb-3">
                                    <input class="form-check-input" type="checkbox" id="remember" />
                                    <label class="form-check-label" for="remember"> Remember me </label>
                                </div>
                                <button type="submit" class="btn btn-primary w-100"> Sign In </button>
                            </form>
                            <p class="text-center mt-3 mb-0"> Don't have an account? <a href="#" class="text-decoration-none"> Register </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
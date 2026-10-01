import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"

function Register() {

    const [name , setName]  = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [Confirm , setConfirm] = useState("");
      const [userdata,setUserData] = useState(null);

    const navigate  = useNavigate()

    const handleSubmit = ()=>{
        setUserData(
            {
               username:name,
               email:email,
               password:password,
              Confirm:Confirm
            }
        );
        navigate("/Home")
    }

    useEffect(()=>{
        if(userdata == null)
            return;
         localStorage.setItem("userData",JSON.stringify(userdata));
        localStorage.setItem("login",JSON.stringify({islogin : true}));
    },[userdata]);
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center min-vh-100">
                <div className="col-md-6 col-lg-5">
                    <div className="card shadow border-0">
                        <div className="card-body p-4">
                            <h2 className="text-center fw-bold mb-4"> Create Account </h2>
                            <form>
                                <div className="mb-3">
                                    <label className="form-label" onChange={(e)=>{setName(e.target.value)}}> Full Name </label>
                                    <input type="text" className="form-control" placeholder="Enter your full name" />
                                </div>  <div className="mb-3">
                                    <label className="form-label" onChange={(e)=>{setEmail(e.target.value)}}> Email </label>
                                    <input type="email" className="form-control" placeholder="Enter your email" />
                                </div> <div className="mb-3">
                                    <label className="form-label" onChange={(e)=>{setPassword(e.target.value)}}> Password </label>
                                    <input type="password" className="form-control" placeholder="Enter password" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" onChange={(e)=>{setConfirm(e.target.value)}}> Confirm Password </label>
                                    <input type="password" className="form-control" placeholder="Confirm password" />
                                </div>
                                <button type="submit" className="btn btn-primary w-100" onClick={handleSubmit}> Register </button>
                            </form>
                            <p className="text-center mt-3 mb-0"> Already have an account? <a href="#" className="text-decoration-none"> Sign In </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;
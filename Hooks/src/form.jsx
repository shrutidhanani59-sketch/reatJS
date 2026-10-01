import { useEffect, useState , } from 'react';
import { PiTextT } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { Route , Routes } from 'react-router-dom';
import Display from './display.jsx'
import './form.css'

function Home() {

     const [fullname, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [pnumber, setPnumber] = useState(0);
    const [note, setNote] = useState("");
    const [cv, setCv] = useState("");
    const navigate = useNavigate();

    const [data, setData] = useState(null);

    const submitbtn = () => {
        setData(
            {
                fname: fullname,
                email: email,
                phone: pnumber,
                note: note,
                cv: cv
            });

            
          navigate("/display"); 
    };

    useEffect(() => {
        if (data != null)
            localStorage.setItem("formData", JSON.stringify(data));
         
    }, [data])
    return (
        <>
            <div className="main">
                <div className="form">
                    <main style={{ fontSize: "32px", fontStyle: "italic", color: "gray" }}>
                        logo
                    </main>
                    <main style={{ fontWeight: "bold", fontSize: "35px" }}>
                        vacanice Application
                    </main>
                    <main style={{ fontSize: "16px", fontStyle: "italic", color: "gray" }}>
                        Lorem ipsum dolor sit amet.
                    </main>

                    <section>
                        <main>
                            <PiTextT style={{ position: "absolute", marginTop: "10px", marginLeft: "15px" }} />
                            <input type="text" placeholder='Full name' onChange={(e) => {
                                setFullName(e.target.value);
                            }} />
                        </main>
                        <main>
                            <MdEmail style={{ position: "absolute", marginTop: "10px", marginLeft: "15px" }} />
                            <input type="text" placeholder='email' onChange={(e) => {
                                setEmail(e.target.value);
                            }} />
                        </main>
                        <main>
                            <PiTextT style={{ position: "absolute", marginTop: "10px", marginLeft: "15px" }} />
                            <input type="text" placeholder='phone' onChange={(e) => {
                                setPnumber(e.target.value);
                            }} />
                        </main>
                        <main>
                            <PiTextT style={{ position: "absolute", marginTop: "10px", marginLeft: "15px" }} />
                            <input type="text" placeholder='Notes' onChange={(e) => {
                                setNote(e.target.value);
                            }} />
                        </main>
                        <main>
                            <PiTextT style={{ position: "absolute", marginTop: "10px", marginLeft: "15px" }} />
                            <input type="text" placeholder='(cv)' onChange={(e) => {
                                setCv(e.target.value);
                            }} />
                        </main>

                        <main>
                            <button onClick={submitbtn}>+Submit </button>
                            <button>+Submit form</button>
                        </main>

                    </section>
                </div>
            </div>
        </>
    )
}


function UserForm() {
    return (
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/display" element={<Display/>}/>
        </Routes>

        </>
    )
}

export default UserForm;
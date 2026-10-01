import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {

    const navigate = useNavigate();

    const loginData = JSON.parse(
        localStorage.getItem("login") || '{"islogin": false}'
    );

    const [islogin, setIsLogin] = useState(loginData.islogin);

    const logout = () => {
        localStorage.setItem(
            "login",
            JSON.stringify({ islogin: false })
        );

        setIsLogin(false);
        navigate("/login");
    };

    return (
        <header className="bg-dark text-white p-3">

            <div className="container">

                <div className="d-flex justify-content-between align-items-center">

                    <h3 className="mb-0">
                        MyWebsite
                    </h3>

                    <div>

                        {
                            islogin
                                ?
                                <button
                                    onClick={logout}
                                    className="btn btn-danger"
                                >
                                    Logout
                                </button>

                                :

                                <>
                                    <button
                                        onClick={() => navigate("/register")}
                                        className="btn btn-outline-light me-2"
                                    >
                                        Sign Up
                                    </button>

                                    <button
                                        onClick={() => navigate("/login")}
                                        className="btn btn-primary"
                                    >
                                        Sign In
                                    </button>
                                </>
                        }

                    </div>

                </div>

            </div>

        </header>
    );
}

export default Header;
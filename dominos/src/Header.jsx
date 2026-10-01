import { Link } from "react-router-dom";
import "./App.css";

function Header() {
    return (
        <div className="wrapper">

            <div className="logo-box">
                <img
                    className="logo"
                    src="https://logos-world.net/wp-content/uploads/2021/09/Dominos-Pizza-Logo-2012.png"
                    alt="Dominos"
                />
            </div>

            <ul className="menu list-unstyled">

                <li className="active">
                    <Link to="/CheesePizza">
                        <span>Cheese Pizza</span>
                    </Link>
                </li>

                <li>
                    <Link to="/CornPizza">
                        <span>Corn Pizza</span>
                    </Link>
                </li>

                <li>
                    <Link to="/PaneerSpice">
                        <span>Paneer Spice</span>
                    </Link>
                </li>

                <li>
                    <Link to="/PeppyPaneer">
                        <span>Peppy Paneer</span>
                    </Link>
                </li>

                <li>
                    <Link to="/VegParadise">
                        <span>Veg Paradise</span>
                    </Link>
                </li>

            </ul>

        </div>
    );
}

export default Header;
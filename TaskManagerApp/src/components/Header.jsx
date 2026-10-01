import {Link} from "react-router-dom"

function Header()
{
    return(
       <nav>
        <p>Task Manager</p>

        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
       </nav>
    )
}

export default Header;
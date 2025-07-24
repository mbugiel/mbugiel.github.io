import { Link } from "react-router-dom";

function Navigation() {
    return(
        <>
            <nav>
                <ul>
                    <li><Link to="/">Main Page</Link></li>
                    <li><Link to="cars">Cars</Link></li>
                </ul>
            </nav>
        </>
    );
} 

export default Navigation;
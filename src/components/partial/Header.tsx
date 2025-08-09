import { NavLink } from 'react-router-dom'

const Header = ()=>{
    return(
        <>
            <header>
                <div>

                </div>
                <nav>
                    <NavLink to="/">
                        {/* <span className="material-symbols-outlined">arrow_right_alt</span> */}
                        About me
                    </NavLink>
                    <NavLink to="/projects">
                        {/* <span className="material-symbols-outlined">arrow_right_alt</span> */}
                        Projects
                    </NavLink>
                    <NavLink to="/contact">
                        {/* <span className="material-symbols-outlined">arrow_right_alt</span> */}
                        Contact
                    </NavLink>
                </nav>
                <div>

                </div>
            </header>
        </>
    )
}

export default Header;
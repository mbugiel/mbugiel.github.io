import { Outlet } from "react-router"
import Header from "./partial/Header"
import Footer from "./partial/Footer"

const Layout = () =>{
    return(
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}

export default Layout;
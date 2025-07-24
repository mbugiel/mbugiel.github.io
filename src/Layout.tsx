import { Outlet } from "react-router-dom";
import Header from "./components/partial/header";
import Navigation from "./components/partial/navigation";

export default function Layout(){
    return(
        <>
            <Header></Header>
            <Navigation></Navigation>
            <Outlet/>
        </>
    )
}
import { Outlet } from "react-router";
import Header from "./Pages/assets/Header.jsx"
import Footer from "./Pages/assets/Footer.jsx"


export default function Layout(){
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}
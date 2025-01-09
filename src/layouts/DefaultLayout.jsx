import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import { Outlet } from "react-router"

function DefaultLayout(){
    return(
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
    )
}

export default DefaultLayout
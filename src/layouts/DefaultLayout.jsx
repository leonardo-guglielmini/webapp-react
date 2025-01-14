import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import { Outlet } from "react-router"

import GlobalContext from "../contexts/GlobalContext"
import Loader from "../components/Loader"
import { useContext } from "react"

function DefaultLayout(){

    const {Loading} = useContext(GlobalContext)

    return(
    <>
        <Header/>
        <main>
            <Outlet/>
            {Loading && <Loader/>}
        </main>
        <Footer/>
        
    </>
    )
}

export default DefaultLayout
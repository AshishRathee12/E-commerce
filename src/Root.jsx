import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import SuggestionList from './Components/suggestion/SuggestionList';
import { useLocation } from "react-router-dom";

export default function Root() {

    const location = useLocation();
    // console.log(location)
    return (
        <>
            <Navbar />
            {location.pathname !== "/" && location.pathname !== "/Cart" && <SuggestionList />}

            <Outlet />
            <Footer />
        </>
    )
}

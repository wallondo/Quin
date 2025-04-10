import React from "react";
import "./app.css"
import Header from "../front/conponents/header/Header";
import Main from "../front/conponents/main/Main";
import Footer from "../front/conponents/footer/Footer";
export default function App(){
    return(
        <div className="app">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}
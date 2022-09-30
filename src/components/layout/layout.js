import React from 'react';
import "../../global.scss";
import Header from "../header/header";
import Footer from "../footer/footer";
import Blog from "../../screens/blog/blog";

function Layout() {
    return (
        <div className="layout">
            <Header/>
            <Blog/>
            <Footer/>
        </div>
    );
}
export default Layout;

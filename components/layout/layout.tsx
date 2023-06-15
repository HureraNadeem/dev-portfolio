import React, { PropsWithChildren } from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";


const Layout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};
export default Layout;

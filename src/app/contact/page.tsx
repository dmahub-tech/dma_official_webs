import React from 'react';
import Header2 from "@/dva/components/Header2";
import Navbar from "@/dva/components/NavBar";
import Contact from '@/dva/components/Contact';

const Page = () => {
    return (
        <>
            <Navbar />

                 <Header2 bg="/img/background/contactUs.png" mainTitle="" mainTitleSpan="Contact" eyebrow="Get In Touch With Us"/>
            
            <main className="position-re">
                <Contact/>
            
            </main>
        </>
    );
};

export default Page;
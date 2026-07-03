import React from 'react';
import Header2 from "@/dva/components/Header2";
import Services from "@/dva/components/Services";
import Navbar from "@/dva/components/NavBar";
const Page = () => {
    return (
        <>
            <Navbar />
            <Header2 bg="/img/background/22.jpg"   eyebrow= "Services"
title= "Learn more about DIGITAL MASTERMIND ACADEMY"
mainTitle= "Where Creativity Meets"  mainTitleSpan= "Innovation"
/>
            <main className="position-re">
                <Services />
            </main>
        </>
    );
};

export default Page;
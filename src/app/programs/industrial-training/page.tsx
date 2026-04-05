

import React from 'react';
import Header2 from "@/dva/components/Header2";
import Features from "@/dva/components/Features";
import Services2 from "@/dva/components/Services2";
import Services from "@/dva/components/Services";
import Process from "@/dva/components/Process";
import Testimonials from "@/dva/components/Testimonials";
import Clients from "@/dva/components/Clients";
import Footer from "@/dva/components/Footer";
import Navbar from "@/dva/components/NavBar";
import CallToAction from "@/dva/components/CallAction";
import IndustrialPrograms from '@/dva/components/programs/IndrustrialPrograms';

export default function IndustrialTrainingPage() {
    return (
        <>
            <Navbar />
            <Header2 bg="/img/background/tranning.png" mainTitle="Industrial Training" mainTitleSpan="Program" eyebrow="Learn with us"/>
            <main className="position-re">
                <IndustrialPrograms />
               
          
                <div className="mb-50" ></div>
                <Footer footerClass="main-footer bg-dark-blue bg-img" business={true} />
            </main>
        </>
    );
};
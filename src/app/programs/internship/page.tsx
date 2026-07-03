import React from 'react';
import Header2 from "@/dva/components/Header2";
import Footer from "@/dva/components/Footer";
import Navbar from "@/dva/components/NavBar";
import IntershipPrograms from '@/dva/components/programs/intership';

export default function InternshipPage() {
    return (
        <>
            <Navbar />
            <Header2 bg="/img/background/tranning.png" mainTitle="Internship" mainTitleSpan="Program" eyebrow="Learn with us"/>
            <main className="position-re">
                <IntershipPrograms />
               
          
                <div className="mb-50" ></div>
             
            </main>
        </>
    );
};

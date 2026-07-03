import React from 'react';
import Header2 from "@/dva/components/Header2";
import Navbar from "@/dva/components/NavBar";
import IndustrialPrograms from '@/dva/components/programs/IndrustrialPrograms';

export default function IndustrialTrainingPage() {
    return (
        <>
            <Navbar />
            <Header2 bg="/img/background/tranning.png" mainTitle="Industrial Training" mainTitleSpan="Program" eyebrow="Learn with us"/>
            <main className="position-re">
                <IndustrialPrograms />
               
          
                <div className="mb-50" ></div>
               
            </main>
        </>
    );
};
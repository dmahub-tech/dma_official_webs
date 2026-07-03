import React from 'react';
import Header2 from "@/dva/components/Header2";

import Navbar from "@/dva/components/NavBar";
import Courses from '@/dva/components/Courses';

const Page = () => {
    return (
        <>
            <Navbar />
            <Header2 bg="/img/background/course.jpg"   eyebrow= "Courses"
title= "Structured Learning Path For Tech Industry"
mainTitle= "Explore Our Learning Programs"  mainTitleSpan= "Our Courses" />
            <main className="position-re">
                <Courses />
              
                
            </main>
        </>
    );
};

export default Page;
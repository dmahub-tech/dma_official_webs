import Navbar from "@/dva/components/NavBar";
import Header from "@/dva/components/Header";
import Services from "@/dva/components/Services";
import CallToAction from "@/dva/components/CallAction";
import Process from "@/dva/components/Process";
import Testimonials from "@/dva/components/Testimonials";
import Clients from "@/dva/components/Clients";
import Footer from "@/dva/components/Footer";
import GetStarted from "@/dva/components/CallAction/GetStarted";



export default function Home() {
  return (
   <>
       {/*<FixedSearch />*/}
       <Navbar />
       <Header />
       <main className="position-re">
           <Services />
           {/*<Features />*/}
           <CallToAction />
           <Process />
           {/*<Numbers />*/}
           <GetStarted type="purple-light" />
           {/*<Portfolio />*/}
           <Testimonials curve={true} />
           {/*<Blog />*/}
           <Clients />
           <Footer footerClass="main-footer bg-dark-blue bg-img mt-40" footerBg={true} business={true} />
       </main>
   </>
  );
}

import Navbar from "@/dva/components/NavBar";
import Header from "@/dva/components/Header";
import Services from "@/dva/components/Services";


export default function Home() {
  return (
   <>
       {/*<FixedSearch />*/}
       <Navbar />
       <Header />
       <main className="position-re">
           <Services showImages={true} />

          
       </main>
   </>
  );
}


 
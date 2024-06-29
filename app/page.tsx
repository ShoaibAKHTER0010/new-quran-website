import Choose from "@/components/choose";
import Claim from "@/components/claim";
import Courses from "@/components/courses";
import Experts from "@/components/experts";
import About from "@/components/about";
import Hire from "@/components/hire";
import Homee from "@/components/homee";
import Navbar from "@/components/navbar";
import Offer from "@/components/offer";
import Questions from "@/components/questions";
import Steps from "@/components/steps";
import Top from "@/components/top";
import Trial from "@/components/trial";
import Vital from "@/components/vital";
import Footer from "@/components/footer";



export default function Home() {
  return (
   <main>
  <Top />
  <Navbar />
  <Homee />
  <Steps/>
  <Trial />
  <Choose/>
  <Vital/>
  <Hire/>
  <Offer/>
  <Experts/>
  <Courses/>
  <Claim/>
  <Questions/>
  <About/>
  <Footer/>
  
   </main>
  );
}

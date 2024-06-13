import Choose from "@/components/choose";
import Courses from "@/components/courses";
import Experts from "@/components/experts";
import Hire from "@/components/hire";
import Homee from "@/components/homee";
import Navbar from "@/components/navbar";
import Offer from "@/components/offer";
import Steps from "@/components/steps";
import Top from "@/components/top";
import Trial from "@/components/trial";
import Vital from "@/components/vital";



export default function Home() {
  return (
   <main >
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
  
   </main>
  );
}

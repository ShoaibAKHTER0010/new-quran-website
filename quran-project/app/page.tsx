import Choose from "@/components/choose";
import Homee from "@/components/homee";
import Navbar from "@/components/navbar";
import Steps from "@/components/steps";
import Top from "@/components/top";
import Trial from "@/components/trial";



export default function Home() {
  return (
   <main >
  <Top />
  <Navbar />
  <Homee />
  <Steps/>
  <Trial />
  <Choose/>
  
   </main>
  );
}

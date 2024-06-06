import Homee from "./components/homee";
import Navbar from "./components/navbar";
import Top from "./components/top";


export default function Home() {
  return (
   <main className="select-none">
  < Top />
  < Navbar />
  < Homee />
   </main>
  );
}

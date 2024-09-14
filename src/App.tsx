import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { BasicUsage } from "./components/1_BasicUsage";
import { Timeline } from "./components/2_Timeline";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div className="px-4">
      {/* <BasicUsage /> */}
      <Timeline />
    </div>
  );
}

export default App;

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { BasicUsage } from "./components/1_BasicUsage";
import { Timeline } from "./components/2_Timeline";
import { ScrollTriggerDemo } from "./components/3_ScrollTriggerDemo";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div>
      {/* <BasicUsage /> */}
      {/* <Timeline /> */}
      <ScrollTriggerDemo />
    </div>
  );
}

export default App;

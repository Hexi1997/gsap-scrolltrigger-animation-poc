import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { BasicUsage } from "./components/1_BasicUsage";
import { Timeline } from "./components/2_Timeline";
import { ScrollTriggerDemo } from "./components/3_ScrollTriggerDemo";
import { ScrollTriggerSwiper } from "./components/4_ScrollTriggerSwiper";
import { SVGAnimation } from "./components/5_SVGAnimation";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div>
      {/* <BasicUsage /> */}
      {/* <Timeline /> */}
      {/* <ScrollTriggerDemo /> */}
      {/* <ScrollTriggerSwiper /> */}
      <SVGAnimation />
    </div>
  );
}

export default App;

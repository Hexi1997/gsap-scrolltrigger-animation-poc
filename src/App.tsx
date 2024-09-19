import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { BasicUsage } from "./components/1_BasicUsage";
import { Timeline } from "./components/2_Timeline";
import { ScrollTriggerDemo } from "./components/3_ScrollTriggerDemo";
import { ScrollTriggerSwiper } from "./components/4_ScrollTriggerSwiper";
import { SVGAnimation } from "./components/5_SVGAnimation";
import { SVGPathAnimation } from "./components/6_SVGPathAnimation";
import { ClippathDemo } from "./components/7_ClipPath";
import { Total } from "./components/Total";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div>
      {/* <BasicUsage /> */}
      {/* <Timeline /> */}
      {/* <ScrollTriggerDemo /> */}
      {/* <ScrollTriggerSwiper /> */}
      {/* <SVGAnimation /> */}
      {/* <SVGPathAnimation /> */}
      {/* <ClippathDemo /> */}
      <Total />
    </div>
  );
}

export default App;

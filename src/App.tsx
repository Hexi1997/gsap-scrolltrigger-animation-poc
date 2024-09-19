import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

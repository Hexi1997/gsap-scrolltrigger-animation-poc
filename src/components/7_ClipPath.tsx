import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ClippathDemo() {
  useGSAP(() => {
    gsap.to("#forest", {
      clipPath: "circle(100%)",
      scrollTrigger: {
        trigger: "#container",
        start: "top top",
        end: "+=3000px",
        // 确保 pinContainer元素高度为 100vh 即可
        pin: "#container",
        scrub: true,
        markers: true,
        invalidateOnRefresh: true,
      },
    });
  }, []);
  return (
    <>
      <section className="h-screen" id="container">
        <div
          className="w-full h-full bg-center bg-cover bg-[url('/forest.jpg')]"
          id="forest"
          style={{
            clipPath: "circle(20%)",
          }}
        ></div>
      </section>
    </>
  );
}

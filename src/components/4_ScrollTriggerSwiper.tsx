import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function ScrollTriggerSwiper() {
  useGSAP(() => {
    let horizontalSection = document.querySelector("#horizontal");
    if (!horizontalSection) return;
    gsap.to("#horizontal", {
      x: () => horizontalSection.scrollWidth * -1,
      xPercent: 100,
      scrollTrigger: {
        trigger: "#horizontal",
        start: "center center",
        end: "+=6000px",
        // 确保 pinContainer元素高度为 100vh 即可
        pin: ".pinContainer",
        scrub: true,
        markers: true,
        invalidateOnRefresh: true,
      },
    });
  }, []);
  return (
    <>
      <div className="pinContainer">
        <div className="h-[calc((100vh_-_600px)_/_2)] bg-blue-200 w-full"></div>
        <div className="h-[600px] bg-green-500 overflow-hidden">
          <div
            id="horizontal"
            className="flex items-center justify-start h-full"
          >
            <section className="px-10 h-full flex items-center justify-center flex-nowrap gap-10">
              {new Array(30).fill(0).map((_, index) => {
                return (
                  <div className="h-[80%] flex items-center justify-center aspect-[0.6] bg-pink-300">
                    Card{index}
                  </div>
                );
              })}
            </section>
          </div>
        </div>
        <div className="h-[calc((100vh_-_600px)_/_2)] bg-yellow-200"></div>
      </div>
    </>
  );
}

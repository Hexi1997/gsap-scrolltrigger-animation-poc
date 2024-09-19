import { useGSAP } from "@gsap/react";
import gsap, { Linear } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import rocketImg from "../assets/rocket.svg";
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export function SVGPathAnimation() {
  useGSAP(() => {
    // const pathEle = document.getElementById("path")! as SVGPathElement;
    // const circleEle = document.getElementById("circle")! as HTMLDivElement;
    gsap.to("#rocket", {
      duration: 5,
      yoyo: true,
      ease: Linear.easeNone,
      motionPath: {
        // 指定要跟随的 SVG 路径
        path: "#road",
        // 指定用于对齐的参考路径，通常与 path 属性相同
        align: "#road",
        // 指定对齐的参考点，这里指定为car中心
        alignOrigin: [0.5, 0.5],
        // 从 road 10% 处开始
        start: 0.1,
        // 到 road 90% 处结束
        end: 0.9,
        // 自动旋转元素，让元素与路径方向相同
        autoRotate: true,
      },
      onUpdate: function () {
        console.log(this.progress()); // 输出动画进度
      },
    });

    const tl = gsap.timeline();
    tl.to("#rocket2", {
      duration: 5,
      ease: Linear.easeNone,
      scrollTrigger: {
        trigger: "#rocket-section",
        pin: "#rocket-section",
        scrub: true,
        markers: true,
        start: "start start",
        end: "+=6000px",
      },
      motionPath: {
        // 指定要跟随的 SVG 路径
        path: "#road2",
        // 指定用于对齐的参考路径，通常与 path 属性相同
        align: "#road2",
        // 指定对齐的参考点，这里指定为car中心
        alignOrigin: [0.5, 0.5],
        // 从 road 10% 处开始
        start: 0.05,
        // 自动旋转元素，让元素与路径方向相同
        autoRotate: true,
      },
    });

    // 将 circle element 转换成 path
    MotionPathPlugin.convertToPath("#circle");
    gsap.to("#rocket3", {
      duration: 5,
      ease: Linear.easeNone,
      scrollTrigger: {
        trigger: "#circle-section",
        pin: "#circle-section",
        scrub: true,
        markers: true,
        start: "start start",
        end: "+=6000px",
      },
      motionPath: {
        // 指定要跟随的 SVG 路径
        path: "#circle",
        // 指定用于对齐的参考路径，通常与 path 属性相同
        align: "#circle",
        // 指定对齐的参考点，这里指定为car中心
        alignOrigin: [0.5, 0.5],
        // 从 road 10% 处开始
        start: 0.05,
        // 自动旋转元素，让元素与路径方向相同
        autoRotate: true,
      },
    });
  }, []);

  return (
    <>
      <section id="hero" className="h-screen overflow-y-hidden">
        {/* bg */}
        <div className="absolute bottom-[35vh] inset-x-0 z-10">
          <img id="rocket" src={rocketImg} className="w-36 absolute" />
          <svg
            width="100%"
            viewBox="0 0 1440 256"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="road"
              d="M0.339762 254.633C441 -83 999 -83 1440 254.633"
              stroke="#13418f"
              strokeWidth={2}
            />
          </svg>
        </div>
      </section>
      <section
        id="rocket-section"
        className="h-screen overflow-hidden pr-10 flex items-center justify-center"
      >
        <img id="rocket2" src={rocketImg} className="w-36 absolute" />
        <svg
          className="w-full aspect-2263/960"
          viewBox="0 0 2263 960"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="road2"
            stroke="#13418f"
            strokeWidth={2}
            d="M1 862.5C494.5 432.5 953.5 961.5 1240.5 958.5C1527.5 955.5 2262 696 2262 0"
          />
        </svg>
      </section>
      <section
        id="circle-section"
        className="flex h-screen items-center justify-center overflow-hidden"
      >
        <img id="rocket3" src={rocketImg} className="w-36 absolute" />
        <svg
          className="w-[400px]"
          viewBox="0 0 2171 2076"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            id="circle"
            cx="1085.5"
            cy="1038"
            rx="1085.5"
            ry="1038"
            fill="transparent"
            strokeWidth={2}
            stroke="#13418f"
          />
        </svg>
      </section>
    </>
  );
}

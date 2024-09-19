import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import rocketImg from "../assets/rocket.svg";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const menus = ["Work", "About", "Courses", "Blog"];
export function Total() {
  // hero container
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from("#hero-container #logoTitle", {
      y: -60,
      duration: 0.5,
      delay: 0.2,
    })
      .from("#hero-container a", {
        y: -60,
        duration: 0.4,
        stagger: 0.1,
      })
      .from("#hero-container h1", {
        scale: 0.2,
        y: 60,
        duration: 1,
        opacity: 0,
      });
  }, []);

  // swiper text container
  useGSAP(() => {
    gsap.to("#swiper-text-container h2", {
      transform: "translateX(-44%)",
      scrollTrigger: {
        trigger: "#swiper-text-container",
        start: "top 0%",
        end: "top -100%",
        scrub: 2,
        pin: true,
      },
    });
  });

  // clip container
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to("#clip-container #clip", {
      clipPath: "circle(100%)",
      scrollTrigger: {
        trigger: "#clip-container",
        start: "top top",
        end: "+=1200 top",
        pin: "#clip-container",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });
  }, []);

  // swiper container
  useGSAP(() => {
    let horizontalSection = document.querySelector("#swiper-horizontal")!;
    gsap.to("#swiper-horizontal", {
      x: () => horizontalSection.scrollWidth * -1,
      xPercent: 100,
      scrollTrigger: {
        trigger: "#swiper-horizontal",
        start: "center center",
        end: "+=6000px",
        pin: "#swiper-container",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to("#rocket-container #rocket", {
      scrollTrigger: {
        trigger: "#rocket-container",
        pin: "#rocket-container",
        scrub: true,
        start: "start start",
        end: "+=6000px",
      },
      motionPath: {
        // 指定要跟随的 SVG 路径
        path: "#rocket-container #road",
        // 指定用于对齐的参考路径，通常与 path 属性相同
        align: "#rocket-container #road",
        // 指定对齐的参考点，这里指定为car中心
        alignOrigin: [0.5, 0.5],
        // 从 road 10% 处开始
        start: 0.05,
        // 自动旋转元素，让元素与路径方向相同
        autoRotate: true,
      },
    });
  }, []);

  // 设置 path 的初始dasharray和offset
  useEffect(() => {
    const pathEles = document.querySelectorAll("#world3-container path");
    if (pathEles.length) {
      pathEles.forEach((ele: any) => {
        const length = ele.getTotalLength();
        ele.style.strokeDasharray = length.toString();
        ele.style.strokeDashoffset = length.toString();
      });
    }
  }, []);

  // 这个hook必须放在最后面
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#world3-container",
        start: "top top",
        end: "+=3000",
        scrub: true,
        pin: "#world3-container",
      },
    });

    const pathEles = document.querySelectorAll("#world3-container path");
    tl.to(pathEles[0], {
      strokeDashoffset: 0,
      ease: "none",
    })
      .to(pathEles[1], {
        strokeDashoffset: 0,
        ease: "none",
      })
      .to(pathEles[2], {
        strokeDashoffset: 0,
        ease: "none",
      })
      .to(pathEles[3], {
        strokeDashoffset: 0,
        ease: "none",
      })
      .to(pathEles[4], {
        strokeDashoffset: 0,
        ease: "none",
      })
      .to(pathEles[5], {
        strokeDashoffset: 0,
        ease: "none",
      })
      .to(pathEles[0], {
        strokeWidth: "0",
        fill: "#4cc28f",
        duration: 0,
        ease: "none",
      })
      .to(pathEles[1], {
        strokeWidth: "0",
        duration: 0,
        fill: "#4cc28f",
        ease: "none",
      })
      .to(pathEles[2], {
        strokeWidth: "0",
        fill: "#4cc28f",
        duration: 0,
        ease: "none",
      })
      .to(pathEles[3], {
        strokeWidth: "0",
        duration: 0,
        fill: "#4cc28f",
        ease: "none",
      })
      .to(pathEles[4], {
        strokeWidth: "0",
        duration: 0,
        fill: "#4cc28f",
        ease: "none",
      })
      .to(pathEles[5], {
        strokeWidth: "0",
        duration: 0,
        fill: "#fff",
        ease: "none",
      });
  }, []);

  return (
    <div className="text-[#4cc28f]">
      <section id="hero-container" className="px-10">
        <header className="flex items-center justify-between h-20">
          <span id="logoTitle" className="text-2xl">
            Hexi
          </span>
          <nav className="flex items-center gap-x-16">
            {menus.map((item) => (
              <a href="/">{item}</a>
            ))}
          </nav>
        </header>
        <div className="flex items-center justify-center font-serif h-[calc(100dvh_-_80px)]">
          <h1 className="text-[80px]">ScrollTrigger Animation POC</h1>
        </div>
      </section>
      <section
        id="swiper-text-container"
        className="flex h-[100vh] w-full bg-blue-200-200 overflow-hidden items-center"
      >
        <h2 className="text-[20vw] whitespace-nowrap font-bold">
          Build With GSAP
        </h2>
      </section>
      <section className="h-screen relative" id="clip-container">
        <div
          className="w-full h-full bg-center bg-cover bg-[url('/forest.jpg')]"
          id="clip"
          style={{
            clipPath: "circle(20%)",
          }}
        ></div>
      </section>
      <section
        id="swiper-container"
        className="h-screen bg-[#1e4131] flex items-center"
      >
        <div className="h-[600px] overflow-hidden">
          <div
            id="swiper-horizontal"
            className="flex items-center justify-start h-full"
          >
            <div className="px-10 h-full flex items-center justify-center flex-nowrap gap-10">
              {new Array(20).fill(0).map((_, index) => {
                return (
                  <div className="h-[80%] flex items-center justify-center aspect-[0.6] text-white bg-[rgba(0,0,0,0.5)] rounded-lg">
                    Card{index + 1}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section
        id="rocket-container"
        className="h-screen overflow-hidden pr-10 flex items-center justify-center"
      >
        <img id="rocket" src={rocketImg} className="w-36 absolute" />
        <svg
          className="w-full aspect-2263/960"
          viewBox="0 0 2263 960"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="road"
            stroke="#4cc28f"
            strokeWidth={2}
            d="M1 862.5C494.5 432.5 953.5 961.5 1240.5 958.5C1527.5 955.5 2262 696 2262 0"
          />
        </svg>
      </section>
      <section
        id="world3-container"
        className="h-screen max-h-screen overflow-hidden flex items-center justify-center bg-black"
      >
        <svg
          width="452"
          height="144"
          viewBox="0 0 113 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            stroke="white"
            strokeWidth="1"
            d="M5.2696 34.6851L0.780273 1.19531H5.31474L7.26601 18.6013L7.35629 19.6934H7.71738L7.85279 18.6013L9.93948 1.19531H13.4775L15.5642 18.6013L15.6996 19.6934H16.0607L16.1509 18.6013L18.1022 1.19531H22.6367L18.1473 34.6851H14.3385L12.0713 18.8281L11.8005 16.8674H11.6199L11.3491 18.8281L9.08189 34.6851H5.27307H5.2696Z"
          />
          <path
            d="M33.9278 35.0475C32.5668 35.0475 31.4002 34.73 30.4245 34.0915C29.4489 33.4531 28.7024 32.5878 28.1816 31.4958C27.6608 30.4038 27.4004 29.1722 27.4004 27.8046V8.07494C27.4004 6.69335 27.6608 5.45828 28.1816 4.37324C28.7024 3.2882 29.4524 2.42645 30.4245 1.78798C31.4002 1.14952 32.5668 0.832031 33.9278 0.832031C35.2888 0.832031 36.4554 1.14952 37.4311 1.78798C38.4067 2.42645 39.1532 3.29169 39.674 4.38371C40.1948 5.47573 40.4552 6.7073 40.4552 8.07494V27.8046C40.4552 29.1722 40.1948 30.4003 39.674 31.4958C39.1532 32.5913 38.4032 33.4565 37.4311 34.0915C36.4554 34.73 35.2888 35.0475 33.9278 35.0475ZM33.9278 30.2642C34.5319 30.2642 34.9555 30.0095 35.1986 29.5002C35.4416 28.9908 35.5596 28.4256 35.5596 27.8011V8.07145C35.5596 7.45043 35.4312 6.88175 35.1743 6.37237C34.9173 5.863 34.5007 5.60831 33.9278 5.60831C33.3549 5.60831 32.9556 5.863 32.6918 6.37237C32.4279 6.88175 32.2959 7.44694 32.2959 8.07145V27.8011C32.2959 28.4256 32.4244 28.9908 32.6813 29.5002C32.9383 30.0095 33.3549 30.2642 33.9278 30.2642Z"
            fill="none"
            stroke="white"
            strokeWidth="1"
          />
          <path
            d="M46.3506 34.6851V1.19531H51.2496C54.1835 1.19531 56.3431 2.01171 57.7354 3.64451C59.1242 5.2773 59.822 7.68114 59.822 10.856C59.822 12.74 59.4922 14.3693 58.836 15.7439C58.1798 17.1186 57.3812 18.1234 56.4438 18.7618L59.7769 34.6886H54.8779L52.1107 20.5621H51.2496V34.6886H46.3506V34.6851ZM51.2496 16.0021C52.1558 16.0021 52.8745 15.7998 53.4023 15.3985C53.93 14.9973 54.3085 14.4217 54.5342 13.6785C54.7598 12.9354 54.8744 12.0527 54.8744 11.034C54.8744 9.43954 54.614 8.21145 54.0932 7.35318C53.5724 6.49492 52.6245 6.06579 51.2461 6.06579V15.9986L51.2496 16.0021Z"
            fill="none"
            stroke="white"
            strokeWidth="1"
          />
          <path
            d="M65.0332 34.6851V1.19531H69.9322V30.1286H76.418V34.6851H65.0367H65.0332Z"
            fill="none"
            stroke="white"
            strokeWidth="1"
          />
          <path
            d="M80.9043 34.6851V1.19531H85.8936C87.4664 1.19531 88.7962 1.45349 89.8829 1.96984C90.9697 2.4862 91.8481 3.36888 92.5113 4.61093C93.1744 5.85646 93.657 7.56601 93.9522 9.73609C94.2473 11.9097 94.3931 14.6484 94.3931 17.9594C94.3931 21.2703 94.2473 24.03 93.9522 26.1966C93.657 28.3632 93.1779 30.0623 92.5113 31.3009C91.8446 32.5394 90.9697 33.4116 89.8829 33.921C88.7962 34.4304 87.4629 34.6851 85.8936 34.6851H80.9043ZM85.7999 29.7623C87.0081 29.7623 87.8622 29.2843 88.3622 28.3283C88.8622 27.3724 89.1642 26.0047 89.2684 24.2289C89.3726 22.4531 89.4281 20.3423 89.4281 17.8966C89.4281 15.4509 89.376 13.3052 89.2684 11.5503C89.1642 9.7954 88.8552 8.45218 88.3518 7.51716C87.8449 6.58214 86.9942 6.11463 85.7999 6.11463V29.7623Z"
            fill="none"
            stroke="white"
            strokeWidth="1"
          />
          <path
            d="M106.424 35.0479C105.396 35.0479 104.507 34.8839 103.761 34.5594C103.014 34.2315 102.393 33.771 101.903 33.1709C101.41 32.5708 101.022 31.8556 100.737 31.0287C100.449 30.2018 100.244 29.2773 100.126 28.262C100.004 27.2433 99.9452 26.1652 99.9452 25.0278H104.75C104.75 26.0012 104.782 26.9223 104.841 27.7945C104.9 28.6667 105.053 29.375 105.296 29.9123C105.539 30.453 105.914 30.7217 106.427 30.7217C106.941 30.7217 107.323 30.5123 107.573 30.0937C107.823 29.675 107.99 29.1447 108.073 28.4993C108.157 27.8538 108.198 27.1805 108.198 26.4827C108.198 24.6615 108.073 23.2659 107.823 22.303C107.573 21.3401 107.136 20.6597 106.507 20.2655C105.879 19.8713 104.994 19.634 103.844 19.5607V15.4613C104.994 15.402 105.848 15.1892 106.407 14.8229C106.966 14.46 107.337 13.8529 107.518 13.0121C107.698 12.1713 107.788 10.9956 107.788 9.49185C107.788 8.74871 107.761 8.04396 107.709 7.38456C107.657 6.72516 107.525 6.18788 107.313 5.77968C107.101 5.36799 106.747 5.16564 106.247 5.16564C105.778 5.16564 105.424 5.43428 105.181 5.97506C104.938 6.51583 104.775 7.2171 104.695 8.08234C104.612 8.94758 104.57 9.87562 104.57 10.863H99.7646C99.7646 9.40462 99.8619 8.06489 100.06 6.8403C100.258 5.61919 100.594 4.55857 101.081 3.66193C101.563 2.76529 102.226 2.071 103.063 1.57558C103.903 1.08365 104.962 0.835938 106.247 0.835938C107.275 0.835938 108.184 1.02783 108.979 1.41858C109.774 1.80585 110.438 2.33964 110.976 3.02346C111.51 3.70728 111.917 4.49577 112.188 5.39241C112.458 6.28906 112.597 7.24501 112.597 8.26376C112.597 9.78142 112.49 11.1526 112.281 12.3771C112.069 13.6017 111.757 14.6345 111.34 15.4753C110.924 16.3196 110.393 16.9511 109.743 17.3767C110.816 18.1966 111.629 19.3758 112.181 20.9075C112.733 22.4426 113.007 24.18 113.007 26.1233C113.007 27.6584 112.76 29.1028 112.271 30.4635C111.778 31.8242 111.049 32.9266 110.083 33.7779C109.115 34.6292 107.9 35.0549 106.434 35.0549L106.424 35.0479Z"
            fill="none"
            stroke="white"
            strokeWidth="1"
          />
        </svg>
      </section>
    </div>
  );
}

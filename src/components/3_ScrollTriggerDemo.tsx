import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function ScrollTriggerDemo() {
  useGSAP(() => {
    gsap.from("#page1 #box1", {
      delay: 1,
      opacity: 0,
      duration: 2,
      rotate: 360,
      borderRadius: "50%",
    });

    gsap.from("#page2 #box2", {
      opacity: 0,
      duration: 2,
      rotate: 360,
      borderRadius: "50%",
      scrollTrigger: {
        // markers: true,
        // 默认trigger-start为trigger元素的顶部，trigger-end为trigger元素的顶部
        trigger: "#page2 #box2",
        // 定义 trigger-end,注意如果end属性定义也定义了trigger-end，则end属性的优先级高于endTrigger
        // endTrigger: "#page3",

        // start 有两个取值
        // 第一个取值代表元素的trigger-start位置，是相对trigger element自身来说的，比如说设置10%，就是从元素顶部过10%高度
        // 第二个取值代表动画开始基准线（scroll-start)： 当 trigger-start 超过定义的 scroll-start 之后，则动画开始执行。这里定义的90%，意思就是动画基准线的位置在屏幕的从上往下90%比例处
        start: "top 90%",
        // 同 start属性，第一个代表trigger-end，第二个代表scroll-end
        // 简单来说，start和end的第一个取值是trigger element自身高度来的，第二个是基于视口高度。方向都是从上往下。
        end: "center top",
        // 设置为true或者1，代表根据滚动条进行关联动画执行进度，如果设置为数值，有点像对动画做debounce的感觉，怪怪的，一般设置为true就行
        scrub: true,
      },
    });

    gsap.to("#page3 h2", {
      transform: "translateX(-40%)",
      scrollTrigger: {
        trigger: "#page3",
        markers: true,
        start: "top 0%",
        end: "top -100%",
        scrub: 2,
        pin: true,
      },
    });
  }, []);
  return (
    <>
      <section
        id="page1"
        className="flex items-center justify-center h-[100vh] w-full bg-red-200"
      >
        <div id="box1" className="w-40 aspect-square bg-purple-700"></div>
      </section>
      <section
        id="page2"
        className="flex items-center justify-center h-[50vh] min-h-[800px] w-full bg-yellow-200"
      >
        <div id="box2" className="w-40 aspect-square bg-red-700"></div>
      </section>
      <section
        id="page3"
        className="flex h-[100vh] w-full bg-blue-200-200 overflow-hidden items-center"
      >
        <h2 className="text-[30vw]">Experience</h2>
      </section>
      <section className="h-screen bg-blue-200"></section>
    </>
  );
}

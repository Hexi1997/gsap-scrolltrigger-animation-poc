import { useGSAP } from "@gsap/react";
import { Title } from "./Title";
import { gsap } from "gsap";

export function BasicUsage() {
  // 不能直接在 useEffect 内调用 gasp.from 方法，需要将他们包裹在gsap.context中运行，或者使用 useGSAP
  // 参考：https://gsap.com/community/forums/topic/35261-gsapfrom-not-working-correctly-in-next-js/
  // 基础使用
  useGSAP(() => {
    gsap.to("#box1", {
      x: 500,
      duration: 2,
      delay: 1,
      rotate: 360,
      backgroundColor: "green",
      borderRadius: "50%",
      // 动画重复执行1次，a => b a => b
      repeat: 1,
      // 设置为yoyo，以后执行就变成了 a => b => a，像yoyo球一样
      yoyo: true,
    });
    gsap.from("h1", {
      opacity: 0,
      duration: 1,
      y: 30,
      delay: 1,
      // 如果选择了多个元素，逐个执行动画的间隔
      stagger: 0.3,
      color: "#4ade80",
    });
  }, []);

  return (
    <>
      <Title>1、基础使用</Title>
      <div id="box1" className="w-[300px] aspect-square bg-red-300"></div>
      <div className="text-red-300 px-4">
        <h1> I am h1</h1>
        <h1> I am h1</h1>
        <h1> I am h1</h1>
      </div>
    </>
  );
}

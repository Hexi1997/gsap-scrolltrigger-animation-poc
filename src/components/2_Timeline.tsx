import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
// import { Title } from "./Title";

const menus = ["Work", "About", "Courses", "Blog"];
export function Timeline() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from("#logoTitle", {
      y: -60,
      duration: 0.5,
      delay: 0.2,
    })
      .from("a", {
        y: -60,
        duration: 0.4,
        stagger: 0.1,
      })
      .from("h1", {
        scale: 0.2,
        y: 60,
        duration: 1,
        opacity: 0,
      });
  }, []);
  return (
    <>
      {/* <Title>2、Timeline</Title> */}
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
      <main className="flex items-center justify-center font-serif h-[calc(100dvh_-_80px)]">
        <h1 className="text-[80px]">Hexi Coding School</h1>
      </main>
    </>
  );
}

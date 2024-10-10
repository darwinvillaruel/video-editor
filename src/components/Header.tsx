import ModeToggle from "./ui/toggle-theme";
import { kanit } from "@/lib/fonts";

export default function Header() {
  return (
    <section className={`${kanit.className} grid grid-cols-2 my-5`}>
      <a href="/">
        <div className="text-xl md:text-2xl lg:text-3xl">MARCUS GO</div>
      </a>
      <div className="flex justify-end items-end">
        <ModeToggle />
      </div>
    </section>
  );
}

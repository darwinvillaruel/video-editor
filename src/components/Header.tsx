import ModeToggle from "./ui/toggle-theme";
import { kanit } from "@/lib/fonts";

export default function Header() {
  return (
    <section className={`${kanit.className} grid grid-cols-2 my-3`}>
      <div className="text-4xl">MARCUS GO</div>
      <div className="flex justify-end items-end">
        <ModeToggle />
      </div>
    </section>
  );
}

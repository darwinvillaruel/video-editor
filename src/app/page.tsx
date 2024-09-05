import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Expo from "@/components/Expo";

export default function Home() {
  return (
    <main className="mx-auto px-5 container">
      <nav>
        <Header />
      </nav>
      <section>
        <Hero />
      </section>
      <section>
        <Expo />
      </section>
    </main>
  );
}

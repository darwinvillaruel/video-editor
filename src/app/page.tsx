import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Expo from "@/components/Expo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="mx-auto px-5 max-w-screen-lg container">
      <Header />
      <Hero />
      <Expo />
      <Footer />
    </main>
  );
}

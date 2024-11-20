import Image from "next/image";
import { lexend } from "@/lib/fonts";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className={`${lexend.className}`}>
      <section className="flex flex-col items-center md:gap-4 py-3 font-bold text-xl md:text-4xl">
        <h2 className="text-3xl md:text-6xl">Turning Raw Footage </h2>
        <h2>into Cinematic Experiences</h2>
      </section>
      <section className="justify-end gap-4 grid md:grid-cols-2 my-3">
        <Card className="flex flex-col justify-between text-[hsl(var(--accent))] text-sm md:text-base">
          <CardContent className="pt-5">
            <p>
              Marcus Go is a skilled video editor with two years of professional experience, specializing in content
              creation, social media reels, and business advertising videos. In addition to editing, he is hands-on with
              videography, personally overseeing the filming for each project. Marcus is proficient in Adobe Premiere
              Pro and is adept at using built-in social media editors from Instagram, TikTok, and Facebook to tailor
              content for various audiences.
            </p>
          </CardContent>
          <CardFooter>
            <p className="mr-3 font-semibold text-lg md:text-2xl">ABOUT US</p>
            <FaArrowAltCircleRight className="text-3xl" />
          </CardFooter>
        </Card>
        <section>
          <Image
            src="/coverphoto.jpg"
            alt="marcus-go"
            width={4000}
            height={3000}
            className="rounded-2xl w-full h-full object-fill"
          />
        </section>
      </section>
    </section>
  );
}

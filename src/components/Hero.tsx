import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 my-3">
      <div>
        <Image
          src="/coverphoto.jpg"
          alt="marcus-go"
          width={500}
          height={500}
          className="rounded-lg w-full h-full object-fill"
        />
      </div>
      <div className="grid grid-flow-row md:ml-3 lg:h-full text-xs sm:text-sm xl:text-2xl">
        <div className="flex flex-col justify-evenly border-[hsl(var(--border))] border-2 bg-[hsl(var(--card))] my-3 md:mt-0 p-5 xl:p-10 rounded-lg">
          <p className="mb-2 text-base md:text-2xl xl:text-4xl">Hi! 👋 I&apos;m Marcus</p>
          <p>
            A freelancer who specializes in video editing with 2-year work experience specializing in content creation,
            social media reel editing, and business advertising video editing. He has knowledge in videography since he
            is the one responsible in shooting the videos in every edit. Been using Capcut and social media built in
            editors like Instagram, Tiktok, and Facebook.
          </p>
        </div>
        <div className="flex justify-center items-center border-[hsl(var(--border))] border-2 bg-[hsl(var(--card))] py-3 rounded-lg">
          <ul className="flex flex-row justify-evenly w-full list-none">
            <li>
              <FaInstagram className="text-3xl lg:text-5xl" />
            </li>
            <li>
              <FaFacebook className="text-3xl lg:text-5xl" />
            </li>
            <li>
              <FaTiktok className="text-3xl lg:text-5xl" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

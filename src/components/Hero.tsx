import Image from "next/image";

export default function Hero() {
  return (
    <section className="grid grid-cols-2 my-10">
      <div>
        <Image
          src="/coverphoto.jpg"
          alt="marcus-go"
          width={500}
          height={500}
          className="rounded-lg object-cover w-full h-full"
        />
      </div>
      <div className="grid grid-flow-row">
        <div className="text-lg p-5 rounded-lg mx-2 bg-[hsl(var(--secondary))] flex flex-col gap-6">
          <p className="text-2xl">Hi! 👋 I&apos;m Marcus</p>
          <p>
            A freelancer who specializes in video editing with 2-year work
            experience specializing in content creation, social media reel
            editing, and business advertising video editing. He has knowledge in
            videography since he is the one responsible in shooting the videos
            in every edit. Been using Capcut and social media built in editors
            like Instagram, Tiktok, and Facebook.
          </p>
        </div>
        <div className="p-5 rounded-lg mx-2 mt-3 flex flex-row justify-between bg-[hsl(var(--secondary))]">
          <li>Facebook</li>
          <li>Facebook</li>
          <li>Facebook</li>
        </div>
      </div>
    </section>
  );
}

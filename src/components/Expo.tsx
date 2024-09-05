"use client";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { Data, data } from "./data/data";
import Autoplay from "embla-carousel-autoplay";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

export default function Expo() {
  const [orientation, setOrientation] = useState<string>("horizontal");

  const screen = (): string => {
    const screenWidth: number = window.innerWidth;
    return screenWidth <= 425 ? "vertical" : "horizontal";
  };

  useEffect(() => {
    const handleResize = () => {
      setOrientation(screen());
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section>
      <Carousel
        orientation={orientation}
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 6000,
            playOnInit: true,
            active: true,
          }),
        ]}>
        <CarouselContent className="md:w-1/3">
          {data.map((item: Data, index: number) => (
            <CarouselItem key={index}>
              <CldVideoPlayer
                src={`videos/${item.source}`}
                width="50"
                height="50"
                className="rounded-lg"
              />
              <Card className="flex flex-col h-full">
                {/* <CardContent>
                  <CardHeader className="px-0">
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CldVideoPlayer
                    src={`videos/${item.source}`}
                    width="500"
                    height="899"
                    className="rounded-lg"
                  />
                </CardContent> */}
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div>OK</div>
    </section>
  );
}

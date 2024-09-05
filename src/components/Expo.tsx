"use client";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { Data, data } from "./data/data";
import Autoplay from "embla-carousel-autoplay";

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
            delay: 5000,
            playOnInit: true,
            active: true,
          }),
        ]}>
        <CarouselContent className="md:w-1/4">
          {data.map((item: Data, index: number) => (
            <CarouselItem key={index}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>VIDEO</CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

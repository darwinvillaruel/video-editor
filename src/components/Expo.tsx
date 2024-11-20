"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { data } from "./data/data";
import CarouselComponent from "./CarouselComponent";
import Autoplay from "embla-carousel-autoplay";

const Expo = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        containScroll: "trimSnaps",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-full">
      <CarouselContent>
        {data.map((item, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="p-5 text-[hsl(var(--accent))]">
                  <CarouselComponent item={item} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="max-lg:hidden" />
      <CarouselNext className="max-lg:hidden" />
    </Carousel>
  );
};

export default Expo;

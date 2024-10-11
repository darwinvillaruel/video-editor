import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { data } from "./data/data";
import CarouselComponent from "./CarouselComponent";

const Expo = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        containScroll: "trimSnaps",
        loop: true,
      }}
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
        {/* {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex justify-center items-center p-6 aspect-square">
                  <span className="font-semibold text-3xl">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))} */}
      </CarouselContent>
    </Carousel>
  );
};

export default Expo;

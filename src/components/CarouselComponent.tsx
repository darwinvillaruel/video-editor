"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

interface CarouselComponentProps {
  item: {
    title: string;
    description: string;
    source: string;
  };
}

const CarouselComponent: React.FC<CarouselComponentProps> = ({ item }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>{item.title}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{item.title}</AlertDialogTitle>
          <AlertDialogDescription>{item.description}</AlertDialogDescription>
          <CldVideoPlayer
            width="50"
            height="50"
            src={`videos/${item.source}`}
            fontFace="Source Serif Pro"
          />
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-black hover:bg-[hsl(var(--accent))] hover:border hover:border-black text-[hsl(var(--accent))] hover:text-black">
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CarouselComponent;

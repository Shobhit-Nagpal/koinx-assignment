import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button"

interface CardProps {
  bgColor: string;
  heading: string;
  imgSrc: string;
}

export default function Card({ bgColor, heading, imgSrc }: CardProps) {
  return (
  <>
    <div className="flex items-center justify-start gap-4 px-3 py-6 rounded-lg mt-8 w-full" style={{backgroundColor: bgColor}}>
      <div>
        <img src={imgSrc} alt={"Stock card image"} className="w-40 h-40 object-cover rounded-xl" />
      </div>
      <div>
        <h2 className="text-3xl text-white font-bold">{heading}</h2>
        <Button className="bg-white text-black font-semibold text-lg rounded-lg mt-4 hover:bg-gray-300">Check Now <span className="ml-2"><ArrowRight /></span></Button>
      </div>
    </div>
  </>
  );
}

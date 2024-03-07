import { ReactNode } from "react";

type EventCardProps = {
  icon: ReactNode;
  heading: string;
  description: string;
  bgColor: string;
};

export default function EventCard({
  icon,
  heading,
  description,
  bgColor,
}: EventCardProps) {
  return (
    <div className={`${bgColor}-100 rounded-xl flex items-start justify-center px-4 py-4 w-full gap-5`}>
      <div className={`${bgColor}-600 w-32 rounded-full p-4 text-white`}>{icon}</div>
      <div className="flex flex-col items-center justify-center gap-3">
        <p className="text-lg font-semibold">{heading}</p>
        <p className="text-md font-medium">{description}</p>
      </div>
    </div>
  );
}

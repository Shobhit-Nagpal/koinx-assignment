import { Button } from "./ui/button";
import CTAIllustration from "../assets/undraw_investor_update_re_qnuu.svg";
import { ArrowRight } from "lucide-react";

export default function CallToActinWidget() {
  return (
    <div className="w-full flex flex-col gap-3 items-center justify-center px-16 py-10 bg-[#0052FE] rounded-xl">
      <h2 className="font-semibold text-3xl text-white text-center m-2">
        Get started with KoinX for FREE
      </h2>
      <p className="text-white text-lg text-center m-4">
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports
      </p>
      <img className="p-2 w-96 h-80" src={CTAIllustration} alt={"CTA illustration"} />
        <Button className="bg-white text-black font-semibold text-xl rounded-lg mt-4 hover:bg-gray-400 px-6 py-6">Get started for FREE <span className="ml-2"><ArrowRight /></span></Button>
    </div>
  );
}

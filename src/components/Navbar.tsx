import koinxLogo from "../assets/koinx_logo.svg";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-4 px-14 shadow">
      <div>
      <img src={koinxLogo} alt="KoinX Logo" className="w-32 h-auto" />
      </div>
      <div className="flex items-center justify-center gap-8">
        <p className="text-lg font-bold">Crypto Taxes</p>
        <p className="text-lg font-bold">Free Tools</p>
        <p className="text-lg font-bold">Resource Center</p>
        <Button className="bg-blue-600 px-4 py-2 rounded-lg text-white font-bold">Get started</Button>
      </div>
    </div>
  );
}

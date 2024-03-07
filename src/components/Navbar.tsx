import { useState } from "react";
import koinxLogo from "../assets/koinx_logo.svg";
import { Button } from "./ui/button";
import { Menu, XCircle } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 lg:px-14 shadow">
      <div>
        <img src={koinxLogo} alt="KoinX Logo" className="w-32 h-auto" />
      </div>
      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-8">
        <p className="text-lg font-bold">Crypto Taxes</p>
        <p className="text-lg font-bold">Free Tools</p>
        <p className="text-lg font-bold">Resource Center</p>
        <Button className="bg-blue-600 px-4 py-2 rounded-lg text-white font-bold">
          Get started
        </Button>
      </div>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden"
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      >
        {isMenuOpen ? (
          <XCircle className="w-8 h-8" />
        ) : (
          <Menu className="w-8 h-8" />
        )}
      </button>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 right-0 mt-[4rem] bg-white shadow p-4 flex flex-col items-center gap-4 z-50 lg:hidden">
          <p className="text-lg font-bold">Crypto Taxes</p>
          <p className="text-lg font-bold">Free Tools</p>
          <p className="text-lg font-bold">Resource Center</p>
          <Button className="bg-blue-600 px-4 py-2 rounded-lg text-white font-bold w-full text-center">
            Get started
          </Button>
        </div>
      )}
    </nav>
  );
}

import Image from "next/image";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { MenuIcon } from "lucide-react";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 flex items-center justify-between p-2 sm:p-4 bg-inherit lg:container z-50">
      <div className="flex items-center">
        <Image src="/logo.svg" alt="logo" width={70} height={70} />
        <h1 className="font-bold text-xl">Permitech</h1>
      </div>
      <div className="md:flex hidden items-center gap-5 text-gray-500">
        <h1 className="cursor-pointer hover:text-white">Products</h1>
        <h1 className="cursor-pointer hover:text-white">Features</h1>
        <h1 className="cursor-pointer hover:text-white">Testimonials</h1>
        <h1 className="cursor-pointer hover:text-white">Contact us</h1>
      </div>
      <div className=" md:flex hidden items-center gap-1">
        <Button>Login</Button>
        <Button className="bg-blue-600 text-white">Get Started</Button>
      </div>
      <div className="flex md:hidden items-center gap-4">
        <Sheet>
          <SheetTrigger asChild>
            <MenuIcon className="text-lg mb-1 mr-2" />
          </SheetTrigger>
          <SheetContent side="left" className="sm:max-w-xs">
            <SheetHeader>
              {" "}
              <div className="flex items-center">
                <Image src="/logo.svg" alt="logo" width={50} height={50} />
                <h1 className="text-lg">Permitech</h1>
              </div>
            </SheetHeader>
            <nav className="grid gap-4 py-6">
              <Link
                href="#"
                className="flex text-gray-400 items-center gap-2 px-4 py-2 text-lg font-medium hover:bg-muted rounded-md"
                prefetch={false}
              >
                Products
              </Link>
              <Link
                href="#"
                className="flex text-gray-400 items-center gap-2 px-4 py-2 text-lg font-medium hover:bg-muted rounded-md"
                prefetch={false}
              >
                Features
              </Link>
              <Link
                href="#"
                className="flex text-gray-400 items-center gap-2 px-4 py-2 text-lg font-medium hover:bg-muted rounded-md"
                prefetch={false}
              >
                Testimonials
              </Link>
              <Link
                href="#"
                className="flex text-gray-400 items-center gap-2 px-4 py-2 text-lg font-medium hover:bg-muted rounded-md"
                prefetch={false}
              >
                Contact Us
              </Link>
              <Button>Login</Button>
              <Button className="bg-blue-600 text-white">Get Started</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

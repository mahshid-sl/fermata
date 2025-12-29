import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LogIn, Menu } from "lucide-react";
import Navigation from "./Navigation";
import { Button } from "../ui/button";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

export default function SideNav() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="lg:hidden" />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full max-h-screen max-w-xs bg-primary-50 lg:hidden flex flex-col justify-between space-y-20 "
      >
        <SheetHeader>
          <SheetTitle className="border-b border-primary-200 pb-4 mb-4 text-lg font-bold">
            منو
          </SheetTitle>
          <Navigation isMobile={true} />
        </SheetHeader>

        <div className=" flex justify-center text-center">
          {" "}
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black  dark:text-white  gap-2  bg-primary-100 flex justify-center  items-center rounded-full text-primary-800  px-4 py-2 cursor-pointer  md:text-sm  "
            aria-label="ورود یا ثبت‌نام"
          >
            <LogIn size={18} />
            <span>ورود / ثبت نام</span>
          </HoverBorderGradient>
        </div>
      </SheetContent>
    </Sheet>
  );
}

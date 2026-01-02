import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LogIn, Menu } from "lucide-react";
import Navigation from "./Navigation";

import { HoverBorderGradient } from "../ui/hover-border-gradient";

export default function SideNav() {
  return (
    <Sheet>
      <SheetTrigger aria-label="منو">
        <Menu className="lg:hidden" />
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-full max-w-xs bg-bg flex flex-col justify-between overflow-auto "
      >
        <SheetHeader>
          <SheetTitle className="border-b border-primary-200 pb-4 mb-6 text-lg font-bold">
            منو
          </SheetTitle>
          <Navigation isMobile />
        </SheetHeader>

        <div className="pb-6 flex justify-center  ">
          <HoverBorderGradient
            containerClassName="rounded-full "
            as="button"
            className="flex items-center justify-center gap-2
          bg-primary-100 text-primary-800
            px-4 py-2 rounded-full"
          >
            <LogIn size={18} />
            <span>ورود / ثبت‌نام</span>
          </HoverBorderGradient>
        </div>
      </SheetContent>
    </Sheet>
  );
}

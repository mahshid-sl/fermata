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

export default function SideNav() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="lg:hidden" />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full max-w-xs bg-primary-50 lg:hidden flex flex-col justify-between"
      >
        <SheetHeader>
          <SheetTitle className="border-b border-primary-200 pb-4 mb-4 text-lg font-bold">
            منو
          </SheetTitle>
          <Navigation isMobile={true} />
        </SheetHeader>

        <Button
          className="mx-5 my-10 border-0
                bg-primary-400 hover:bg-primary-500 flex w-auto ms-center cursor-pointer justify-center text-primary-800"
          variant="outline"
        >
          <LogIn />
          ورود | ثبت‌نام
        </Button>
      </SheetContent>
    </Sheet>
  );
}

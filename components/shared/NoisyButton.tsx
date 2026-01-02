import { NoiseBackground } from "@/components/ui/noise-background";
import React from "react";

export default function NoisyButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-center">
      <NoiseBackground
        containerClassName="w-fit p-2 rounded-full mx-auto hover:scale-[1.03]
active:scale-[0.97] transition-transform shadow-[0_3px_20px_rgba(204,135,51,0.35)]

"
        gradientColors={[
          "rgb(213, 170, 42)",
          "rgb(204, 135, 51)",
          "rgb(163, 108, 41)",
        ]}
      >
        <button className="h-full w-full cursor-pointer rounded-full bg-linear-to-r from-neutral-100 via-neutral-100 to-white px-4 py-2 text-primary-800 shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-98 dark:from-black dark:via-black dark:to-neutral-900 dark:text-white dark:shadow-[0px_1px_0px_0px_var(--color-neutral-950)_inset,0px_1px_0px_0px_var(--color-neutral-800)]  text-sm md:text-base whitespace-nowrap ">
          &rarr; {children}
        </button>
      </NoiseBackground>
    </div>
  );
}

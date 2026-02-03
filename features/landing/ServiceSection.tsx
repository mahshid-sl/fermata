import FadeIn from "@/components/shared/FadeIn";
import { TextGenerate } from "@/components/shared/TextGenerate";

import Image from "next/image";
import Link from "next/link";

type ServiceSectionProps = {
  heading: string;
  paragraph: string;
  buttonText: string;
  imageSrc: string;
  imageAlt?: string;

  className?: string;
  onClick?: () => void;
  services?:
    | {
        label: string;
        icon: string;
      }[]
    | undefined;
  imagePosition?: "left" | "right";
  href: string;
};

export default function ServiceSection({
  heading,
  paragraph,
  buttonText,
  imageSrc,
  imageAlt = "Service Image",
  className,
  services,
  imagePosition = "left",
  href,
}: ServiceSectionProps) {
  return (
    <section
      className={`container mx-auto px-4 lg:px-8  lg:py-20  ${className}`}
    >
      <div className={"grid lg:grid-cols-2 gap-12 items-center"}>
        <div
          className={`relative ${
            imagePosition === "right" ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <FadeIn>
            {" "}
            <div className="relative w-full aspect-square max-w-md mx-auto ">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-contain rounded-full "
              />
            </div>
          </FadeIn>
        </div>

        <div
          className={`space-y-6 ${
            imagePosition === "right" ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            <TextGenerate words={heading} />
          </h2>
          <p className="text-primary-800 leading-relaxed w-full max-w-lg">
            {paragraph}
          </p>

          {services && (
            <div className="space-y-4  grid grid-cols-2 text-sm ">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="flex text-primary-700 gap-2 items-center justify-start"
                >
                  <Image src={service.icon} alt="" width={20} height={20} />
                  <span className="font-medium ">{service.label}</span>
                </div>
              ))}
            </div>
          )}
          <Link
            href={href}
            className="bg-primary-100  hover:bg-primary-200 rounded-full px-3 py-2 mt-4  border-2 border-primary-400  focus-within:border-primary-500
          focus-within:ring-2 cursor-pointer
          focus-within:ring-primary-500
            hover:scale-[1.03]
active:scale-[0.97] transition-transform shadow-[0_3px_20px_rgba(204,135,51,0.35)]"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}

import { TextGenerate } from "@/components/shared/TextGenerate";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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
  onClick,
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
          <div className="relative w-full aspect-square max-w-md mx-auto ">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-contain rounded-full "
            />
          </div>
        </div>

        <div
          className={`space-y-6 ${
            imagePosition === "right" ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            <TextGenerate words={heading} />
          </h2>
          <p className="text-primary-800 leading-relaxed">{paragraph}</p>

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
          <Button
            onClick={onClick}
            size="sm"
            className="  bg-primary-500  hover:bg-primary-600 rounded-full px-8 py-6 mt-4"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
}

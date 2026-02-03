import { HoverBorderGradient } from "../ui/hover-border-gradient";

type HoverBorderProps = {
  children: React.ReactNode;
  arialabel: string;
  onClick?: () => void;
  className?: string;
};

export default function HoverBorderBtn({
  children,
  arialabel,
  onClick,
  className,
}: HoverBorderProps) {
  return (
    <HoverBorderGradient
      className={`flex items-center gap-2 py-2 text-sm rounded-full px-4   bg-primary-200 
          text-primary-800 
            hover:bg-primary-300 transition
            cursor-pointer  ${className}`}
      as="button"
      aria-label={arialabel}
      onClick={onClick}
    >
      {children}
    </HoverBorderGradient>
  );
}

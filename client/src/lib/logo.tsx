export function PracticodeLogoSVG({ className = "h-8 w-auto", variant = "primary" }: { className?: string; variant?: "primary" | "dark" }) {
  const textColor = variant === "dark" ? "text-gray-800" : "text-white";
  
  return (
    <div className={`${className} flex items-center justify-start`}>
      <span className={`${textColor} font-normal text-lg md:text-xl`}>
        Practicode Academy
      </span>
    </div>
  );
}

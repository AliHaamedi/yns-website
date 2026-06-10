import Image, { type StaticImageData } from "next/image";
import linkedinIcon from "@/assets/icons/linkedin-icon.webp";
import mailIcon from "@/assets/icons/mail-icon.webp";
import telegramIcon from "@/assets/icons/telegram-icon.webp";
import xIcon from "@/assets/icons/x-icon.webp";

const icons: Record<string, { src: StaticImageData; alt: string }> = {
  x: { src: xIcon, alt: "X" },
  telegram: { src: telegramIcon, alt: "Telegram" },
  linkedin: { src: linkedinIcon, alt: "LinkedIn" },
  email: { src: mailIcon, alt: "Email" },
};

type SocialIconProps = {
  id: string;
  className?: string;
};

export function SocialIcon({ id, className = "h-10 w-10" }: SocialIconProps) {
  const icon = icons[id];
  if (!icon) return null;

  return (
    <Image
      src={icon.src}
      alt={icon.alt}
      width={icon.src.width}
      height={icon.src.height}
      className={`object-contain ${className}`}
    />
  );
}

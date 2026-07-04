import type { StaticImageData } from "next/image";
import solanaFoundationLogo from "@/assets/trusted-by/solanaFoundationLogo.svg";
import trustDrip from "@/assets/trusted-by/trust_drip.svg";
import trustJupiter from "@/assets/trusted-by/trust_jupiter.svg";
import trustMeteora from "@/assets/trusted-by/trust_Meteora.svg";
import trustPhoenix from "@/assets/trusted-by/trust_phoenix.svg";
import trustSns from "@/assets/trusted-by/trust_SNS.svg";
import trustSpaces from "@/assets/trusted-by/trust_Spaces.svg";

export type TrustedByLogo = {
  id: string;
  name: string;
  src: StaticImageData;
};

export const trustedByLogos: TrustedByLogo[] = [
  { id: "phoenix", name: "Phoenix", src: trustPhoenix },
  {
    id: "solana-foundation",
    name: "Solana Foundation",
    src: solanaFoundationLogo,
  },
  { id: "jupiter", name: "Jupiter", src: trustJupiter },
  { id: "meteora", name: "Meteora", src: trustMeteora },
  { id: "drip", name: "Drip", src: trustDrip },
  { id: "sns", name: "SNS", src: trustSns },
  { id: "spaces", name: "Spaces", src: trustSpaces },
];

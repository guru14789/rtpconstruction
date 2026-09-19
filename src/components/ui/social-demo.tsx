import React from "react";
import { SocialTooltip, SocialItem } from "@/components/ui/social-media";

// Data for the social media links with custom brand colors & icons
export const socialLinks: SocialItem[] = [
  {
    href: "https://instagram.com",
    ariaLabel: "Instagram",
    tooltip: "Instagram",
    color: "#E4405F",
    svgUrl: "https://cdn.21st.dev/assets/localized/003fc3e7814ddcd270e030014f120f4cb8bef38be40022ebca913cafb7617a76.svg",
  },
  {
    href: "https://linkedin.com",
    ariaLabel: "LinkedIn",
    tooltip: "LinkedIn",
    color: "#0A66C2",
    svgUrl: "https://cdn.21st.dev/assets/mirror/b2/b2cc3e0066cf332b9d421d075f125b0f99431b534184e8722c4dea7dc5474a18.svg",
  },
  {
    href: "https://twitter.com",
    ariaLabel: "Twitter / X",
    tooltip: "Twitter / X",
    color: "#ff6a00",
    svgUrl: "https://cdn.21st.dev/assets/mirror/05/05f6898c0c087f84c8bcf65e93721bde65abe34093045d4e9ecddbb8dc9f6a18.svg",
  },
  {
    href: "#contact",
    ariaLabel: "Contact Us",
    tooltip: "Contact Us",
    color: "#25D366",
    svgUrl: "https://cdn.21st.dev/assets/mirror/86/86e19afda708cead229b714d25de147ef0b920cfea807c5b2933b30d17a234db.svg",
  },
];

function SocialTooltipDemo() {
  return (
    <div className="flex items-center justify-center p-4 bg-background">
      <SocialTooltip items={socialLinks} />
    </div>
  );
}

export default SocialTooltipDemo;

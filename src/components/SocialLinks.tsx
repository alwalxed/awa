import SocialLink from "./SocialLink";

const socialLinks = [
  {
    href: "https://instagram.com/alwalexd",
    label: "Instagram",
  },
  {
    href: "https://x.com/alwalxed",
    label: "Twitter",
  },
  {
    href: "https://github.com/alwalxed",
    label: "GitHub",
  },
  {
    href: "mailto:alwalxed@proton.me",
    label: "Email",
  },
];

export default function SocialLinks() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl">
      {socialLinks.map((link) => (
        <SocialLink key={link.href} href={link.href} label={link.label} />
      ))}
    </div>
  );
}

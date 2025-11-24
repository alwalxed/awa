interface SocialLinkProps {
  href: string;
  label: string;
}

export default function SocialLink({ href, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      className="bg-slate-800 p-8 rounded-lg border border-slate-700 hover:bg-slate-700 hover:border-slate-600 transition-colors text-center aspect-square flex items-center justify-center"
    >
      <span className="text-lg font-medium">{label}</span>
    </a>
  );
}

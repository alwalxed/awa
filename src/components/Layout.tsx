import type React from "react";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full p-4">
      <main className="w-full flex justify-center">{children}</main>
    </div>
  );
}

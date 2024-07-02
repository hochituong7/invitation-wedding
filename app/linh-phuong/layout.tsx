import type { Metadata } from "next";
import { Inter, Allura } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hoài Phương & Mỹ Linh's Wedding",
  description: "Hôn lễ sẽ diễn ra vào ngày 02/08/2024. Hãy đến nâng ly chúc mừng chúng tôi.",
};

export default function ChildLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

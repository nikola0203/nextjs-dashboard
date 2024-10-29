import { inter } from "@/app/ui/fonts";
import "@/app/ui/global.css";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}

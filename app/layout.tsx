import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ConvexClientProvider } from "@/providers/convex-client-provider";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight:"400" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}

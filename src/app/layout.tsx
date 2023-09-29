import clsx from "clsx";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Majelan technical assessment",
  description: "Majelan technical assessment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.className,
          "min-h-screen mt-8 mx-auto w-full max-w-4xl"
        )}
      >
        {children}
      </body>
    </html>
  );
}

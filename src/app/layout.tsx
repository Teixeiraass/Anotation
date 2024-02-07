import { Inter as FontSans } from "next/font/google"
import "./globals.css";

import { cn } from "../lib/utils"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="pt-br">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased flex",
          fontSans.variable
        )}>
          {children}
        </body>
    </html>
  );
}
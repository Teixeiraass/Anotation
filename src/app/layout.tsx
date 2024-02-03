import { Inter as FontSans } from "next/font/google"
import "./globals.css";

import { cn } from "../lib/utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

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
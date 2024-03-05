'use client'
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from "@/components/Theme-provider";

import { cn } from "../lib/utils"
import { queryClient } from "@/lib/react-query";
import { Metadata } from "next";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})


export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="pt-br">
      <head>
        <title>Anotation</title>
        <meta name="description" content="Write your idea here!"/>
        <link rel="icon" href="" />
      </head>
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased flex",
          fontSans.variable
        )}>
          
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <QueryClientProvider client={queryClient}>
              
              {children}
            </QueryClientProvider>
          </ThemeProvider>
        </body>
    </html>
  );
}
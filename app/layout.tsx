import type { Metadata } from "next";
import { Alkatra } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"


const inter = Alkatra({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "SnapNext App",
	description: "SnapChat alternative for programmers built by Next.js",
};

// A Layout is shared ui

export default function RootLayout({ children }:{ children: React.ReactNode }) {
 return (
   <>
     <html lang="en" suppressHydrationWarning>
       <head />
       <body className={inter.className}>
         <ThemeProvider
           attribute="class"
           defaultTheme="system"
           enableSystem
           disableTransitionOnChange
         >
           {children}
         </ThemeProvider>
       </body>
     </html>
   </>
 )
}
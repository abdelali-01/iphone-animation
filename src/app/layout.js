import { Inter } from "next/font/google";
import "./globals.css";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});



export const metadata = {
  title: "IPhone 15 Pro",
  icons: {
    icon: "/assets/images/apple.svg",
    shortcut: "/assets/images/apple.svg",
  },
  description: "Created by Ali , Web developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${interFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

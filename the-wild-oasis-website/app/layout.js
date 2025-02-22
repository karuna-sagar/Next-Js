import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

import "@/app/_styles/globals.css";

import { Josefin_Sans } from "next/font/google";
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});
export const metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-900 text-primary-100 min-h-scree`}
      >
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}

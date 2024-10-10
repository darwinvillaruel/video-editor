import { Inter, Kanit, Lexend } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const kanit = Kanit({
  weight: "500",
  style: ["normal"],
  subsets: ["latin"],
});

export const lexend = Lexend({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
  subsets: ["latin"],
});

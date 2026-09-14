import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import { Metadata } from "next";
import TanStackProvider from "../components/TanStackProvider/TanStackProvider"

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rentalcar.com"),
  title: "Rental Car",
  description: "You can easily rent the best matching your car here!",
  openGraph: {
    title: `Rental Car`,
    description: `You can easily rent the best matching your car here!`,
    url: `/`,
    siteName: "RentalCar",
    images: [
      {
        url: "/maserati.jpg",
        width: 1200,
        height: 630,
        alt: `White Maserati GranTurismo under sunlight`,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable}`}>
      <body>
        <TanStackProvider>
          <Header />
          <main>{children}</main>
        </TanStackProvider>
      </body>
    </html>
  );
}

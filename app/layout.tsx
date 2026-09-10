import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import { Metadata } from "next";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
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
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body>
        <main>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}

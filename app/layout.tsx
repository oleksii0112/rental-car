import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import { Metadata } from "next";
import TanStackProvider from "../components/TanStackProvider/TanStackProvider";
import { Toaster } from "react-hot-toast";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rental-car-alpha-red.vercel.app"),
  title: "Rental Car",
  description: "You can easily rent your best matching car here!",
  openGraph: {
    title: `Rental Car`,
    description: `You can easily rent your best matching car here!`,
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
  twitter: {
    card: "summary_large_image",
    title: "Rental Car",
    description: "You can easily rent your best matching car here!",
    images: ["/maserati.jpg"],
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
        <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
      </body>
    </html>
  );
}

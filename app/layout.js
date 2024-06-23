import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer/Index";
import Newsletter from "@/components/Home/Newsletter";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Poppins } from "next/font/google";
import clsx from "clsx";
import Whastapp from "@/components/Whatsapp";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Best Marketing Agency - Boost Your Brand",
  description:
    "Description: Achieve superior growth and visibility with the best marketing agency. Tailored solutions that deliver results.",
  icons: {
    icon: "/favicon.svg",
  },
  verification: {
    google: "_ggNizyEmigSS4F1slHePl1DLxgzYivYZ-6UXSVp0R8",
  },
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={clsx(poppins.className)}>
        <Header />
        {children}
        <Newsletter />
        <Footer />
        <Whastapp />
      </body>
      <GoogleAnalytics gaId="G-RC62HM8QFL" />
    </html>
  );
}



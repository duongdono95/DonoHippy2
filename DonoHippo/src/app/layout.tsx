import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import NavBar from "@/components/NavBar";
import { ToastContainer } from "react-toastify";
import GlobalStyles from "@/components/GlobalStyles/GlobalStyles";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dono Hippy",
  description:
    "DonoHippo is an open-source marketplace for high-quality digital goods.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      publishableKey={
        process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
      }
    >
      <html lang="en" className="h-full">
        <body
          className={cn(
            "relative h-full font-sans antialiased",
            inter.className
          )}
        >
          <GlobalStyles>
            <main className="relative flex flex-col min-h-screen">
              <NavBar />
              <div className="flex-grow flex-1">
                {children}
              </div>
              <Footer />
              <ToastContainer position="top-center" />
            </main>
          </GlobalStyles>
        </body>
      </html>
    </ClerkProvider>
  );
}

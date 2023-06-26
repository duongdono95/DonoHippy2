import Navbar from "../components/Navbar/Navbar";
import Head from "next/head";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import "./layout.scss";
import Providers from "@/components/Providers";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
          />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <GlobalStyles>
          <body className="body">
            <Navbar />
            <div className="children">{children}</div>
          </body>
        </GlobalStyles>
      </Providers>
    </html>
  );
}

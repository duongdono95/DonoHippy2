import DefaultPageLayout from "@/components/DefaultPageLayout";
import { Button } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <DefaultPageLayout>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Your marketplace for high-quality{" "}
          <span style={{ color: "var(--primary)" }}>
            digital assets
          </span>
          .
        </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">
          Welcome to DonoHippo. Every asset on our platform
          is verified by our team to ensure our highest
          quality standards.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href="/products">
            <Button variant="contained">
              Browse Trending
            </Button>
          </Link>
          <Button variant="text">
            Our quality promise &rarr;
          </Button>
        </div>
      </div>
    </DefaultPageLayout>
  );
}

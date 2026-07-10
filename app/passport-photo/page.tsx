import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site-config";
import PassportPhotoClient from "./PassportPhotoClient";

const TITLE = "Passport Photo Maker — Free Photo Grid Generator";
const DESCRIPTION =
  "Upload one photo and generate a print-ready grid of 4 to 20 passport-size (35×45mm) photos on a single page. Free, fast, and runs entirely in your browser.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/passport-photo",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/passport-photo",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function PassportPhotoPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: TITLE,
          applicationCategory: "UtilitiesApplication",
          operatingSystem: "Any (Web Browser)",
          url: `${SITE_URL}/passport-photo`,
          description: DESCRIPTION,
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        }}
      />
      <PassportPhotoClient />
    </>
  );
}

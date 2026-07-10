export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://printcardify.vercel.app";

export const SITE_NAME = "Print Cardify";

export const SITE_DESCRIPTION =
  "Free browser-based tool to create print-ready CNIC/ID card front-back layouts and passport photo grids. No signup, no uploads to a server — everything runs locally and prints straight to A4.";

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SEO Decay Alerter — Alert when blog posts lose search rankings",
  description: "Monitors blog post search rankings, alerts when posts drop significantly, and suggests AI-powered content refresh strategies. Built for content creators and marketing managers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0e533c52-8162-4f05-b754-319626ca46d7"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}

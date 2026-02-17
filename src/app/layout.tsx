import "../styles/globals.css";
import "../styles/variables.css";
import "../styles/layout.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Josephan — Creative Architect",
  description:
    "Developer, Tech Lead, Creative Architect, TPM. Building scalable systems and shipping impact.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        <Navbar />

        <main>
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}

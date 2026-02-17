import "../styles/globals.css";
import "../styles/variables.css";
import "../styles/layout.css";

export const metadata = {
  title: "Josephan — Creative Architect",
  description: "Developer, Tech Lead, Creative Architect",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

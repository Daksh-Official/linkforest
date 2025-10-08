import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Link in bio tool: Everything you are, in one simple link | LinkForest",
  description: "Join 70M+ creators and sell, share & curate everything you do online. One bio link—your LinkForest—brings it all together for your audience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}

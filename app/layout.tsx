import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Webshop Admin",
  description: "CRUD App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans text-sm bg-white text-primary">
        <Header />
        {children}
      </body>
    </html>
  );
}

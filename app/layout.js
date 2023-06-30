import "@styles/globals.css";
// import { Html } from "next/document";
import Nav from "@/components/Nav";
export const metadata = {
  title: "Promptly",
  description: "Find & share AI Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;

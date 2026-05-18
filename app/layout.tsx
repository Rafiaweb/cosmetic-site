import "./globals.css";
import Image from "next/image";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>

        {/* SIMPLE LOGO ONLY */}
        <div className="logoCorner">
          <a href="/">
            <Image
              src="/images/logo.png"
              alt="Aloora Pure"
              width={80}
              height={80}
              className="logo"
            />
          </a>
        </div>

        {children}

        {/* FOOTER */}
        <footer className="footer">
          <h3>Aloora Pure</h3>
          <p>Premium Skincare for Natural Glow</p>

          <div className="links">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>

          <p className="copy">© 2026 Aloora Pure. All rights reserved.</p>
        </footer>

      </body>
    </html>
  );
}
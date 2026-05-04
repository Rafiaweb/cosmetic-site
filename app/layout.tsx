import "./globals.css";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>

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
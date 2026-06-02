"use client";

import "./globals.css";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);

  const updateCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const total = cart.reduce(
      (sum: number, item: any) => sum + item.qty,
      0
    );

    setCount(total);
  };

  useEffect(() => {
    updateCart();
    window.addEventListener("storage", updateCart);

    return () => {
      window.removeEventListener("storage", updateCart);
    };
  }, []);

  return (
    <html lang="en">
      <body>

        {/* 🛒 CART ICON */}
        <div
          style={{
            position: "fixed",
            top: "55px",
            right: "0px",
            zIndex: 9999,
            background: "rgb(255, 230, 240)",
            padding: "5px 10px",
            fontSize: "13px",
            borderRadius: "20px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <Link href="/cart" style={{ position: "relative" }}>
            🛒 Cart

            {/* 🔴 BADGE */}
            {count > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-8px",
                  right: "-10px",
                  background: "red",
                  color: "white",
                  borderRadius: "50%",
                  fontSize: "12px",
                  padding: "2px 6px",
                }}
              >
                {count}
              </span>
            )}
          </Link>
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
            <a href="/cart">Cart 🛒</a>
          </div>

          <p className="copy">© 2026 Aloora Pure. All rights reserved.</p>
        </footer>

      </body>
    </html>
  );
}
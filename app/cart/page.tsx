"use client";

import { useEffect, useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(data);
  }, []);

  const removeItem = (id: any) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>🛒 Your Cart</h1>

      {cart.length === 0 && <p>Your cart is empty</p>}

      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            gap: "15px",
            alignItems: "center",
            border: "1px solid #ddd",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <img src={item.image} width={70} height={70} />

          <div style={{ flex: 1 }}>
            <h3>{item.name}</h3>
            <p>Rs {item.price} × {item.qty}</p>
            <b>Total: Rs {item.price * item.qty}</b>

            <button
              onClick={() => removeItem(item.id)}
              style={{
                marginTop: "8px",
                background: "red",
                color: "white",
                border: "none",
                padding: "5px 10px",
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      {cart.length > 0 && (
        <h2>Grand Total: Rs {total}</h2>
      )}
    </div>
  );
}
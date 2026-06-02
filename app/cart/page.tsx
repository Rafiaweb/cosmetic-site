"use client";

import { useEffect, useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState<any[]>([]);

  // load cart from localStorage
  const loadCart = () => {
    const data = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(data);
  };

  useEffect(() => {
    loadCart();
  }, []);

  // delete item
  const removeItem = (id: number) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // total price
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    
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
            borderRadius: "8px",
          }}
        >
          {/* IMAGE */}
          <img
            src={item.image}
            width={70}
            height={70}
            style={{ objectFit: "cover", borderRadius: "8px" }}
          />

          {/* INFO */}
          <div style={{ flex: 1 }}>
            <h3 style={{ margin: 0 }}>{item.name}</h3>

            <p style={{ margin: "5px 0" }}>
              Rs {item.price} × {item.qty}
            </p>

            <b>Total: Rs {item.price * item.qty}</b>

            {/* DELETE BUTTON */}
            <div>
              <button
                onClick={() => removeItem(item.id)}
                style={{
                  marginTop: "8px",
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  cursor: "pointer",
                  borderRadius: "5px",
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* TOTAL */}
      {cart.length > 0 && (
        <h2 style={{ marginTop: "20px" }}>
          Grand Total: Rs {total}
        </h2>
        
      )}
    </div>
    
  );
}

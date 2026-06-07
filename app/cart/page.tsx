"use client";

import { useEffect, useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState<any[]>([]);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(data);
  }, []);

  const updateQty = (id: any, type: "inc" | "dec") => {
    const updated = cart.map((item) => {
      if (item.id === id) {
        let newQty = type === "inc" ? item.qty + 1 : item.qty - 1;
        if (newQty < 1) newQty = 1;
        return { ...item, qty: newQty };
      }
      return item;
    });

    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const deleteItem = (id: any) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const placeOrder = () => {
    if (!name || !phone || !address) {
      alert("Please fill required fields");
      return;
    }

    const orderItems = cart
      .map(
        (item) =>
          `${item.name} x${item.qty} = Rs ${item.price * item.qty}`
      )
      .join("\n");

    const message = `
🛒 NEW ORDER

👤 Name: ${name}
📞 Phone: ${phone}
📧 Email: ${email}
🏠 Address: ${address}

📦 Products:
${orderItems}

💰 Total: Rs ${total}
`;

    window.open(
      `https://wa.me/923023654440?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div style={{ padding: "20px", maxWidth: "700px", margin: "auto" }}>
      <h1>🛒 Cart</h1>

      {cart.length === 0 && <p>Your cart is empty</p>}

      {cart.map((item) => (
        <div key={item.id} style={cardStyle}>
          <img src={item.image} width={80} height={80} style={imgStyle} />

          <div style={{ flex: 1 }}>
            <h3>{item.name}</h3>

            <p>
              Rs {item.price} × {item.qty} ={" "}
              <b>Rs {item.price * item.qty}</b>
            </p>

            <div style={{ display: "flex", gap: "10px" }}>
              <button onClick={() => updateQty(item.id, "dec")}>➖</button>
              <button onClick={() => updateQty(item.id, "inc")}>➕</button>
            </div>

            <button onClick={() => deleteItem(item.id)} style={deleteBtn}>
              Delete
            </button>
          </div>
        </div>
      ))}

      <hr />

      <h2>💰 Total: Rs {total}</h2>

      <input
        placeholder="Full Name *"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={inputStyle}
      />

      <input
        placeholder="Phone *"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={inputStyle}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={inputStyle}
      />

      <textarea
        placeholder="Address *"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        style={inputStyle}
      />

      <button onClick={placeOrder} style={btnStyle}>
        📲 Place Order on WhatsApp
      </button>
    </div>
  );
}

/* ===== SAME UI STYLE AS CHECKOUT ===== */

const cardStyle = {
  display: "flex",
  gap: "15px",
  alignItems: "center",
  border: "1px solid #ddd",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "8px",
};

const imgStyle: React.CSSProperties = {
  objectFit: "cover",
  borderRadius: "8px",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "10px",
  border: "1px solid #ddd",
  borderRadius: "6px",
};

const btnStyle = {
  marginTop: "15px",
  width: "100%",
  background: "green",
  color: "white",
  padding: "12px",
  border: "none",
  cursor: "pointer",
  fontSize: "16px",
};

const deleteBtn = {
  marginTop: "8px",
  background: "red",
  color: "white",
  border: "none",
  padding: "5px 10px",
  borderRadius: "5px",
};
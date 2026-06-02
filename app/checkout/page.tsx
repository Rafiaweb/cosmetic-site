"use client";

import { useEffect, useState } from "react";

export default function CheckoutPage() {
  const [singleProduct, setSingleProduct] = useState<any>(null);
  const [cartItems, setCartItems] = useState<any[]>([]);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    const buyNow = localStorage.getItem("buyNowProduct");
    const cart = localStorage.getItem("buyNowCart");

    if (buyNow) setSingleProduct(JSON.parse(buyNow));
    if (cart) setCartItems(JSON.parse(cart));
  }, []);

  // ➕ quantity update
  const updateQty = (id: any, type: "inc" | "dec") => {
    const updated = cartItems.map((item) => {
      if (item.id === id) {
        let newQty = type === "inc" ? item.qty + 1 : item.qty - 1;
        if (newQty < 1) newQty = 1;
        return { ...item, qty: newQty };
      }
      return item;
    });

    setCartItems(updated);
    localStorage.setItem("buyNowCart", JSON.stringify(updated));
  };

  // 🗑 delete item
  const deleteItem = (id: any) => {
    const updated = cartItems.filter((item) => item.id !== id);
    setCartItems(updated);
    localStorage.setItem("buyNowCart", JSON.stringify(updated));
  };

  const total =
    cartItems.length > 0
      ? cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
      : singleProduct?.price || 0;

  const placeOrder = () => {
    if (!name || !phone || !address) {
      alert("Please fill all required fields");
      return;
    }

    const orderText = `
🛒 NEW ORDER

👤 Name: ${name}
📞 Phone: ${phone}
📧 Email: ${email}
🏠 Address: ${address}

💰 Total: Rs ${total}
`;

    const whatsappURL = `https://wa.me/923023654440?text=${encodeURIComponent(
      orderText
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "700px", margin: "auto" }}>
      <h1>🛒 Checkout</h1>

      {/* SINGLE PRODUCT */}
      {singleProduct && (
        <div style={cardStyle}>
          <img src={singleProduct.image} width={80} height={80} style={imgStyle} />
          <div>
            <h3>{singleProduct.name}</h3>
            <p>Rs {singleProduct.price}</p>
            <b>Qty: 1</b>
          </div>
        </div>
      )}

      {/* CART PRODUCTS */}
      {cartItems.map((item) => (
        <div key={item.id} style={cardStyle}>
          <img src={item.image} width={80} height={80} style={imgStyle} />

          <div style={{ flex: 1 }}>
            <h3>{item.name}</h3>

            <p>
              Rs {item.price} × {item.qty} ={" "}
              <b>Rs {item.price * item.qty}</b>
            </p>

            {/* QTY BUTTONS */}
            <div style={{ display: "flex", gap: "10px", marginTop: "5px" }}>
              <button onClick={() => updateQty(item.id, "dec")}>➖</button>
              <button onClick={() => updateQty(item.id, "inc")}>➕</button>
            </div>

            {/* DELETE */}
            <button
              onClick={() => deleteItem(item.id)}
              style={{
                marginTop: "8px",
                background: "red",
                color: "white",
                border: "none",
                padding: "5px 10px",
                borderRadius: "5px",
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      <hr />

      <h2>💰 Total: Rs {total}</h2>

      {/* FORM */}
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

/* STYLES */
const cardStyle = {
  display: "flex",
  gap: "15px",
  alignItems: "center",
  border: "1px solid #ddd",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "8px",
};

const imgStyle = {
  objectFit: "cover",
  borderRadius: "8px",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "10px",
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
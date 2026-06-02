"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("orders") || "[]");
    setOrders(data);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>📦 All Orders</h1>

      {orders.map((order) => (
        <div
          key={order.id}
          style={{
            border: "1px solid #ddd",
            marginBottom: 10,
            padding: 10,
          }}
        >
          <h3>{order.customer.name}</h3>
          <p>📞 {order.customer.phone}</p>
          <p>🏠 {order.customer.address}</p>
          <b>💰 Total: {order.total}</b>
        </div>
      ))}
    </div>
  );
}
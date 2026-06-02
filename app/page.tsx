
"use client";
import { addToCart } from "@/lib/cart";
import { useState } from "react";
 import Link from "next/link";
import Image from "next/image";

const products = [
      {
    id: 1,
    name: "Arisoo Hydrating Toner",
    price: 700,
    oldPrice: 1000,
    image: "/images/hydraing toner.png",
    desc: "Deep hydration for glowing skin",
    rating: 5,
  },
  {
    id: 2,
    name: "Vitamin C Gel Serum",
    oldPrice: 1500,
    price: 1050,
    image: "/images/serum.png",
    desc: "Brightens skin and tightens pores",
    rating: 4,
  },
  {
    id: 3,
    name: "Climate-Adaptive Moisturizing Cream",
    price: 490,
    oldPrice: 700,
    image: "/images/cream.png",
    desc: "Soft smooth healthy skin",
    rating: 5,
  },
  {
    id: 4,
    name: "Anti Aging Cream",
    price: 980,
    oldPrice: 1400,
    image: "/images/ANTI.png",
    desc: "Reduces wrinkles & fine lines",
    rating: 5,
  },
  {
    id: 5,
    name: "Lip and Cheek Tint",
    price: 630,
    oldPrice: 900,
    image: "/images/lip tint.png",
    desc: "Smooth tinted lips with natural ingredients",
    rating: 5,
  },
];

export default function Home() {
    const [menu, setMenu] = useState(false);

    return (
        <div style={{ background: "#ffe6f0", minHeight: "100vh" }}>

            {/* 🔥 TOP ANIMATED BAR (FIXED BLACK + PINK TEXT) */}
            <div className="topbar">
                <div className="marquee">
                    🚚 Free Delivery on orders of 2 or more products. • 💖 Aloora Pure Skincare • ✨ Glow Naturally
                </div>
            </div>
            <div className="whatsappBox">

  <p>
    Need help placing your order?
  </p>

  <a
    href="https://wa.me/923023654440"
    target="_blank"
    className="whatsappBtn"
  >
    WhatsApp Us
  </a>

</div>

            {/* NAVBAR */}
           {/* ❌ DELETE THIS BLOCK FROM HOME PAGE */}
<div className="nav">
  <div className="logoWrap">
  <Image
    src="/images/logo.png"
    alt="Aloora Pure"
    width={150}
    height={150}
    className="logo"
    priority
  />
</div>
  <div className="desktopMenu">
  <Link href="/">Home</Link>
  <Link href="/about">About Us</Link>
  <Link href="/contact">Contact Us</Link>
  </div>
  

                {/* HAMBURGER (MOBILE ONLY) */}
                <div className="hamburger" onClick={() => setMenu(!menu)}>
                    ☰
                </div>
            </div>

           {/* OVERLAY (click outside close) */}
{menu && (
  <div className="overlay" onClick={() => setMenu(false)}></div>
)}

{/* MOBILE DRAWER */}
<div className={`drawer ${menu ? "open" : ""}`}>
  <Link href="/" onClick={() => setMenu(false)}>Home</Link>
  <Link href="/about" onClick={() => setMenu(false)}>About Us</Link>
  <Link href="/contact" onClick={() => setMenu(false)}>Contact Us</Link>
</div>
          <div className="grid">
  {products.map((p) => (
    <div key={p.id} className="card">

      <div className="brand">Aloora Pure</div>

      {/* ONLY IMAGE + TITLE CLICKABLE */}
      <Link href={`/product/${p.id}`}>
        <img src={p.image} className="img" />
        <h3 className="title">{p.name}</h3>
      </Link>

      <p className="desc">{p.desc}</p>

      <div className="priceBox">
        <b className="newPrice">Rs {p.price}</b>
        <span className="oldPrice">Rs {p.oldPrice}</span>
      </div>

      {p.oldPrice > p.price && (
        <p className="save">
          You Save Rs {p.oldPrice - p.price}
        </p>
      )}

      <div className="stars">
        {"★".repeat(p.rating)}{"☆".repeat(5 - p.rating)}
      </div>

      {/* 🛒 ADD TO CART (OUTSIDE LINK) */}
      <button
        className="btn1"
        onClick={(e) => {
          e.stopPropagation(); // 🔥 IMPORTANT
          let cart = JSON.parse(localStorage.getItem("cart") || "[]");

          const existing = cart.find((item) => item.id === p.id);

          if (existing) {
            existing.qty += 1;
          } else {
            cart.push({ ...p, qty: 1 });
          }

          localStorage.setItem("cart", JSON.stringify(cart));

          alert("Added to cart");
        }}
      >
        Add to Cart
      </button>

      {/* BUY NOW */}
      <button class="btn1"
  onClick={(e) => {
    e.preventDefault();

    localStorage.setItem(
      "buyNowProduct",
      JSON.stringify(p)
    );

    window.location.href = "/checkout";
  }}
>
  Buy Now
</button>


    </div>
  ))}
</div>

            {/* STYLE */}
            <style>{`
            .btn1{background: black;
  color: white;
  padding: 10px 21px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  cursor: pointer;
  transition: transform 0.1s ease;
  }
.btn1:hover {
  transform: scale(1.08);
}



            //home page styles//
.priceBox{
  display:flex;
  justify-content:center;
  gap:10px;
  align-items:center;
  margin-top:5px;
}

.oldPrice{
  text-decoration: line-through;
  color: gray;
  font-size: 20px;
  display:block;
  margin-top:5px;
font-weight:bold;
}

.newPrice{
  color: black;
  font-weight: bold;
  font-size: 25px;
}


            .whatsappBox{
  background:white;
  padding:12px 20px;
  display:flex;
  justify-content:center;
  align-items:center;
  gap:15px;
  border-bottom:1px solid #eee;
  flex-wrap:wrap;
}

.whatsappBox p{
  margin:0;
  color:#444;
  font-size:15px;
}

.whatsappBtn{
  background:#25D366;
  color:white;
  text-decoration:none;
  padding:5px 13px;
  border-radius:30px;
  font-size:14px;
  font-weight:600;
  transition:0.3s;
}

.whatsappBtn:hover{
  transform:scale(1.05);
}

@media(max-width:768px){

  .whatsappBox{
  display:flex !important;
  flex-direction:row !important;
  flex-wrap:nowrap !important;
  align-items:center !important;
  justify-content:center !important;
  gap:8px !important;
  width:auto !important;
  position:relative !important;
  left:auto !important;
  right:auto !important;
    padding:12px;
    gap:10px;
  }

  .whatsappBox p{
    font-size:12px;
  }

  .whatsappBtn{
    padding:9px 16px;
    font-size:13px;
  }

}
            

        /* TOP BAR */
        .topbar{
          background:black;
          overflow:hidden;
          white-space:nowrap;
          padding:6px;
        }

        .marquee{
          display:inline-block;
          color:white;
          padding-left:100%;
          animation: move 12s linear infinite;
          font-weight:bold;
        }

        @keyframes move{
          0%{transform:translateX(0%)}
          100%{transform:translateX(-100%)}
        }

        /* NAVBAR */
        .nav{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:8px 15px;   
  background:white;
  min-height:55px;     
  box-sizing:border-box;
}
  .nav h2{
  margin:0;
  padding:0;
  line-height:1;
}
  @media(max-width:768px){
  .nav{
    padding:0px 12px;
    min-height:50px;
  }
}
        .desktopMenu{
          display:flex;
          gap:22px;
          width:60%;
          font-size: 20px;
        }

        .hamburger{
          font-size:28px;
          cursor:pointer;
          display:none;
        }

        /* DRAWER */
        .drawer{
          position:fixed;
          top:0;
          right:-292px;
          width:250px;
          height:100%;
          background:white;
          display:flex;
          flex-direction:column;
          padding:20px;
          gap:15px;
          transition:0.3s;
          box-shadow:0 0 10px rgba(0,0,0,0.2);
        }

        .drawer.open{
          right:0;
        }
          .overlay{
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:rgba(0,0,0,0.4);
  z-index:998;
}
  .drawer{
  z-index:999;
}

        /* PRODUCTS */
        .grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
          gap:20px;
          padding:20px;
        }

        .card{
          background:white;
          padding:15px;
          text-align:center;
        }

        /* MOBILE */
        @media (max-width:768px){
          .desktopMenu{
            display:none;
          }

          .hamburger{
            display:block;
          }
        }
.grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
  gap:20px;
  padding:20px;
}

.card{
  background:white;
  padding:15px;
  border-radius:15px;
  text-align:center;
  box-shadow:0 5px 15px rgba(0,0,0,0.1);
}

.brand{
  font-size:12px;
  color:gray;
  margin-bottom:5px;
}

.img{
  width:100%;
  height:337px;
  object-fit:cover;
  border-radius:10px;
}

.title{
  margin-top:10px;
  font-size:16px;
  font-weight:bold;
}

.desc{
  font-size:13px;
  color:#666;
}

.price{
  display:block;
  margin-top:5px;
  color:black;
}

.stars{
  color:gold;
  margin:5px 0;
}

.btn1{
  background:black;
  color:white;
  padding:10px 21px;
  border:none;
  border-radius:25px;
  cursor:pointer;
}
  
  
      `}</style>

        </div>
    );
=======
"use client";

import { useState } from "react";
 import Link from "next/link";
import Image from "next/image";
const products = [
      {
    id: 1,
    name: "Arisoo Hydrating Toner",
    price: 15050,
    image: "/images/hydraing toner.png",
    desc: "Deep hydration for glowing skin",
    rating: 5,
  },
  {
    id: 2,
    name: "Vitamin C Gel Based Serum",
    price: 1550,
    image: "/images/serum.png",
    desc: "Brightens skin and tightens pores",
    rating: 4,
  },
  {
    id: 3,
    name: "Climate-Adaptive Moisturizing Cream",
    price: 1800,
    image: "/images/cream.png",
    desc: "Soft smooth healthy skin",
    rating: 5,
  },
  {
    id: 4,
    name: "Anti Aging Serum",
    price: 2500,
    image: "/images/ANTI.png",
    desc: "Reduces wrinkles & fine lines",
    rating: 5,
  },
  {
    id: 5,
    name: "Lip and Cheek Tint",
    price: 1250,
    image: "/images/lip tint.png",
    desc: "Smooth tinted lips with natural ingredients",
    rating: 5,
  },
];

export default function Home() {
    const [menu, setMenu] = useState(false);

    return (
        <div style={{ background: "#ffe6f0", minHeight: "100vh" }}>

            {/* 🔥 TOP ANIMATED BAR (FIXED BLACK + PINK TEXT) */}
            <div className="topbar">
                <div className="marquee">
                    🚚 Free Delivery on Orders Above 5000 • 💖 Aloora Pure Skincare • ✨ Glow Naturally
                </div>
            </div>

            {/* NAVBAR */}
           
<div className="nav">
  <h2>Aloora Pure</h2>
  <div className="desktopMenu">
  <Link href="/">Home</Link>
  <Link href="/about">About Us</Link>
  <Link href="/contact">Contact Us</Link>
  </div>

                {/* HAMBURGER (MOBILE ONLY) */}
                <div className="hamburger" onClick={() => setMenu(!menu)}>
                    ☰
                </div>
            </div>

           {/* OVERLAY (click outside close) */}
{menu && (
  <div className="overlay" onClick={() => setMenu(false)}></div>
)}

{/* MOBILE DRAWER */}
<div className={`drawer ${menu ? "open" : ""}`}>
  <Link href="/" onClick={() => setMenu(false)}>Home</Link>
  <Link href="/about" onClick={() => setMenu(false)}>About Us</Link>
  <Link href="/contact" onClick={() => setMenu(false)}>Contact Us</Link>
</div>
           <div className="grid">
  {products.map((p) => (
    <Link key={p.id} href={`/product/${p.id}`}>
      <div className="card">

        <div className="brand">Aloora Pure</div>

        <img src={p.image} className="img" />

        <h3 className="title">{p.name}</h3>

        <p className="desc">{p.desc}</p>

        <b className="price">Rs {p.price}</b>

        <div className="stars">
          {"★".repeat(p.rating)}{"☆".repeat(5 - p.rating)}
        </div>

        <button className="btn">Add to Cart</button>

      </div>
    </Link>
  ))}
</div>

            {/* STYLE */}
            <style>{`

        /* TOP BAR */
        .topbar{
          background:black;
          overflow:hidden;
          white-space:nowrap;
          padding:6px;
        }

        .marquee{
          display:inline-block;
          color:white;
          padding-left:100%;
          animation: move 12s linear infinite;
          font-weight:bold;
        }

        @keyframes move{
          0%{transform:translateX(0%)}
          100%{transform:translateX(-100%)}
        }

        /* NAVBAR */
        .nav{
          display:flex;
          justify-content:space-between;
          align-items:center;
          padding:15px;
          background:white;
        }

        .desktopMenu{
          display:flex;
          gap:22px;
          width:60%;
          font-size: 20px;
        }

        .hamburger{
          font-size:28px;
          cursor:pointer;
          display:none;
        }

        /* DRAWER */
        .drawer{
          position:fixed;
          top:0;
          right:-292px;
          width:250px;
          height:100%;
          background:white;
          display:flex;
          flex-direction:column;
          padding:20px;
          gap:15px;
          transition:0.3s;
          box-shadow:0 0 10px rgba(0,0,0,0.2);
        }

        .drawer.open{
          right:0;
        }
          .overlay{
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:rgba(0,0,0,0.4);
  z-index:998;
}
  .drawer{
  z-index:999;
}

        /* PRODUCTS */
        .grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
          gap:20px;
          padding:20px;
        }

        .card{
          background:white;
          padding:15px;
          text-align:center;
        }

        /* MOBILE */
        @media (max-width:768px){
          .desktopMenu{
            display:none;
          }

          .hamburger{
            display:block;
          }
        }
.grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
  gap:20px;
  padding:20px;
}

.card{
  background:white;
  padding:15px;
  border-radius:15px;
  text-align:center;
  box-shadow:0 5px 15px rgba(0,0,0,0.1);
}

.brand{
  font-size:12px;
  color:gray;
  margin-bottom:5px;
}

.img{
  width:100%;
  height:180px;
  object-fit:cover;
  border-radius:10px;
}

.title{
  margin-top:10px;
  font-size:16px;
  font-weight:bold;
}

.desc{
  font-size:13px;
  color:#666;
}

.price{
  display:block;
  margin-top:5px;
  color:black;
}

.stars{
  color:gold;
  margin:5px 0;
}

.btn{
  background:black;
  color:white;
  padding:8px 12px;
  border:none;
  border-radius:8px;
  cursor:pointer;
}
  
      `}</style>

        </div>
    );
>>>>>>> 6759880b619e38e371c402f1b9b0f44e2051b813
}
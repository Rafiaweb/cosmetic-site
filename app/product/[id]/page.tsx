"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const products = [
  {
  id: "1",
  stock: "In Stock",
  reviews: 200,
  oldPrice:2000,
  name: "Arisoo hydrating Toner",
  price: 1550,
  image: "/images/hydraing toner.png",

  desc:
    "Refresh and revive your skin with our lightweight Hydrating Toner, designed to deliver an instant boost of moisture. This gentle formula helps to refine pores, balance the skin, and prepare it for the next steps in your skincare routine. Perfect for daily use, it leaves your skin feeling soft, plump, and naturally radiant.",

  Ingredients:
    "Aqua (Water), Glycerin, Hyaluronic Acid, Rose Water, Niacinamide, Aloe Vera Extract, Panthenol (Vitamin B5)",
    benefits:
    "Deeply hydrates and refreshes the skin. Helps to tighten pores, balance oil, and give a soft, glowing look. Prepares your skin for better absorption of serums and creams.",

  how:
    "Apply on clean face using a cotton pad or hands. Gently pat into skin. Use morning and night"
},
{
  id: "2",
  stock: "In Stock",
  reviews: 200,
  oldPrice:2000,
  name: "Vitamin C Gel Based Serum",
  price: 1550,
  image: "/images/serum.png",

  desc:
    "Reveal brighter, healthier-looking skin with our Vitamin C Gel-Based Serum. This fast-absorbing formula works to reduce dullness, even out skin tone, and enhance your natural glow. Lightweight and non-greasy, it deeply nourishes while protecting your skin from environmental stress, making it a must-have for a radiant complexion.",
Ingredients:
"Vitamin C (Ascorbic Acid), Hyaluronic Acid, Niacinamide, Aloe Vera, Green Tea Extract, Glycerin.",
  
benefits:
    "Brightens skin tone, reduces dark spots, and improves overall glow. Helps protect skin from damage and gives a fresh, radiant look.",

  how:
    "Apply 2–3 drops on clean face. Gently massage until absorbed. Use in the morning. Always apply sunscreen after use."
},
{
  id: "3",
  stock: "In Stock",
  reviews: 440,
  oldPrice:2500,
  name: "Climate-Adaptive Moisturizing Cream",
  price: 1800,
  image: "/images/cream.png",

  desc:
    "Experience all-day hydration with our Climate Adaptive Moisturizing Cream, specially crafted to adjust to your skin’s needs in every season. This rich yet breathable formula locks in moisture, strengthens the skin barrier, and protects against dryness and pollution. Your skin stays soft, smooth, and perfectly balanced—no matter the weather.",

    Ingredients:
    "Shea Butter, Ceramides, Hyaluronic Acid, Squalane, Glycerin, Vitamin E, Aloe Vera Extract",
  
    benefits:
    "Provides long-lasting hydration and protects skin from dryness and environmental damage. Keeps skin soft, smooth, and balanced in all weather conditions.",

  how:
    "Apply a small amount on face and neck after serum. Use morning and night."
},
{
  id: "4",
  stock: "In Stock",
  reviews: 300,
  oldPrice:3500,
  name: "Anti Aging Serum",
  price: 2500,
  image: "/images/ANTI.png",

  desc:
    "Turn back the clock with our powerful Anti-Aging Serum, formulated to target fine lines, wrinkles, and loss of firmness. This advanced blend supports skin renewal, improves elasticity, and enhances overall texture. With regular use, your skin appears smoother, firmer, and visibly youthful.",

    Ingredients:

"Retinol, Hyaluronic Acid, Peptides, Vitamin E, Niacinamide, Green Tea Extract",

  benefits:
    "Reduces fine lines and wrinkles. Improves skin texture and firmness. Gives a youthful and smooth appearance over time.",

  how:
    "Apply 2–3 drops at night on clean skin. Start 2–3 times a week and increase gradually. Use sunscreen during the day."
},
{
  id: "5",
  stock: "In Stock",
  reviews: 600,
  oldPrice:1500,
  name: "Lip and Cheek Tint",
  price: 1250,
  image: "/images/lip tint.png",

  desc:
    "Add a natural pop of color with our versatile Lip & Cheek Tint. This lightweight, blendable formula delivers a soft, buildable tint while keeping your skin hydrated and comfortable. Perfect for everyday wear, it enhances your natural beauty with a fresh, dewy finish.",
Ingredients:
"Beeswax, Shea Butter, Vitamin E, Natural Pigments, Jojoba Oil",

  benefits:
    "Adds a natural flush of color to lips and cheeks. Keeps skin hydrated and gives a soft, dewy finish.",

  how:
    "Apply a small amount on lips and cheeks. Blend with fingers for a natural look. Reapply as needed."
},
];

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  const [open, setOpen] = useState("");

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="page">

      {/* LEFT IMAGE */}
      <div className="left">
        <Image alt="" src={product.image} width={450} height={450} />
      </div>

      {/* RIGHT CONTENT */}
      <div className="right">

        {/* BADGE */}
        <span className="stock">{product.stock}</span>

        {/* TITLE */}
        <h1>{product.name}</h1>

        {/* REVIEWS */}
        <p className="reviews">⭐ {product.reviews} reviews</p>

        {/* PRICE */}
        <h2>
          Rs {product.price}{""}
          <del>Rs {product.oldPrice}</del>
        </h2>

        {/* SAVE TEXT */}
        <p className="save">
          You Save Rs {(product.oldPrice ?? 0) - product.price}
        </p>

        {/* VISITORS */}
        <p>👁️ Real time {product.reviews} reviews</p>

        {/* DESCRIPTION */}
        <p className="desc">{product.desc}</p>

        {/* BUY BUTTON */}
        <button className="btn">Buy It Now</button>

        {/* ACCORDION SECTION */}
        <div className="accordion">

          <div onClick={() => setOpen(open === "i" ? "" : "i")}>
            Ingredients ▼
          </div>
          {open === "i" && <p>{product.Ingredients}</p>}

          <div onClick={() => setOpen(open === "b" ? "" : "b")}>
            Benefits ▼
          </div>
          {open === "b" && <p>{product.benefits}</p>}

          <div onClick={() => setOpen(open === "h" ? "" : "h")}>
            How To Apply ▼
          </div>
          {open === "h" && <p>{product.how}</p>}

        </div>

      </div>

      {/* STYLE */}
      <style jsx>{`
        .page{
          display:flex;
          gap:60px;
          padding:60px;
          background:#fff5f8;
        }

        .left{
          flex:1;
        }

        .right{
          flex:1;
        }

        .stock{
          color:green;
          font-weight:bold;
        }

        h1{
          font-size:30px;
          margin:10px 0;
        }

        .reviews{
          color:gold;
        }

        h2{
          margin:10px 0;
        }

        del{
          color:gray;
          margin-left:10px;
        }

        .save{
          color:red;
        }

        .desc{
          color:#555;
        }

        .btn{
          background:black;
          color:white;
          padding:12px 20px;
          border:none;
          margin:15px 0;
          cursor:pointer;
        }

        .accordion div{
          background:#fff;
          padding:12px;
          margin-top:10px;
          font-weight:bold;
          cursor:pointer;
          border-radius:8px;
          box-shadow:0 2px 8px rgba(0,0,0,0.05);
        }

        .accordion p{
          padding:10px;
          background:#fafafa;
          margin:0;
        }

        @media(max-width:768px){
          .page{
            flex-direction:column;
          }
        }
      `}</style>

    </div>
  );
}
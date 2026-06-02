export default function Contact() {
  return (
    <div style={{ padding: "30px", maxWidth: "700px", margin: "auto" }}>
      <h1>Contact</h1>
      <h2>Drop Us A Line</h2>

      <p>
        Send us a message if you have any questions.
      </p>

      <form className="form">
        <label>Name</label>
        <input placeholder="Your name" />

        <label>Email</label>
        <input placeholder="Your email" />

        <label>Phone</label>
        <input placeholder="Your phone number" />

        <label>Message</label>
        <textarea placeholder="Your message"></textarea>

        <button type="submit">Send Message</button>
      </form>

      <div style={{ marginTop: "30px" }}>
        <p><b>Address:</b> Lahore</p>
        <p><b>Email:</b> aloorapure@gmail.com</p>
        <p><b>Phone:</b> +923023654440</p>
      </div>

      <style>{`
        .form {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 20px;
        }

        input, textarea {
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 6px;
        }

        button {
          background: black;
          color: white;
          padding: 10px;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
export default function Contact() {
  return (
    <div style={{ padding: "30px", maxWidth: "700px", margin: "auto" }}>

      <h1>Contact</h1>
      <h2>Drop Us A Line</h2>

      <p>
        We’re happy to answer any questions you have or provide you with an estimate.
        Just send us a message in the form below.
      </p>

      <form className="form">

        <label>NAME (required)</label>
        <input placeholder="Enter please your name" />

        <label>EMAIL (required)</label>
        <input placeholder="Enter please your email address" />

        <label>PHONE NUMBER</label>
        <input placeholder="Enter please your phone number" />

        <label>YOUR MESSAGE (required)</label>
        <textarea placeholder="Enter please your message"></textarea>

        <button type="submit">Send Message</button>
      </form>

      <div style={{ marginTop: "30px" }}>
        <p><b>Address:</b>Lahore</p>
        <p><b>Email:</b> Aloorapure@gmail.com</p>
        <p><b>Phone:</b> +923023654440</p>
      </div>

      <style>{`
        .form{
          display:flex;
          flex-direction:column;
          gap:10px;
          margin-top:20px;
        }

        input, textarea{
          padding:10px;
          border:1px solid #ccc;
          border-radius:6px;
        }

        button{
          background:black;
          color:white;
          padding:10px;
          border:none;
          cursor:pointer;
          margin-top:10px;
        }
      `}</style>

    </div>
  );
}
import { useState, useEffect, useRef } from "react";

function Contact() {
  const [name, setName] = useState(
    localStorage.getItem("name") || ""
  );
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const feedbackRef = useRef();

  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length < 3) {
      alert("Name should contain at least 3 letters");
      return;
    }

    alert("Message Sent Successfully");
  };

  const showFeedback = () => {
    alert("Feedback: " + feedbackRef.current.value);
  };

  return (
    <section id="contact">
      <h2>Contact Us</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        {/* Controlled Components */}
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Uncontrolled Component */}
        <input
          type="text"
          placeholder="Quick Feedback (useRef)"
          ref={feedbackRef}
        />

        <button type="button" onClick={showFeedback}>
          Show Feedback
        </button>

        <button type="submit">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;

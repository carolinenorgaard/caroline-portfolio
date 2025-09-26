"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import ContactLink from "./ContactLink";

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_FORM;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !userID) {
      console.log("Missing env variables");
      return;
    }
    setIsSending(true);

    emailjs
      .send(
        serviceID,
        templateID,
        {
          name,
          email,
          message,
        },
        userID
      )
      .then((response) => {
        console.log("🚀 ~ Email sent successfully:", response);
        setName("");
        setEmail("");
        setMessage("");
        alert("Email sent successfully!");
      })
      .catch((error) => {
        console.error("🚀 ~ Failed to send email:", error);
        alert("Failed to send email. Please try again later.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section>
      <div className="">
        <h2 className="">Kontakt mig</h2>
        <p>
          Jeg er altid åben for at drøfte nye muligheder, samarbejder eller bare
          tage en snak om webudvikling.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="grid gap-2">
        <h3 className="">Skriv til mig</h3>
        <input
          type="text"
          placeholder="Dit navn"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Din email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          name=""
          placeholder="Skriv en besked"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button type="submit" disabled={isSending}>
          Send besked
        </button>
      </form>
      <div className="">
        <h3>Andre måder at komme i kontakt med mmig på</h3>
        <ContactLink
          title={"Email"}
          description={"caroline.norgaard.elmer@gmail.com"}
          href={"mailto:caroline.norgaard.elmer@gmail.com"}
        />
        <ContactLink
          title={"GitHub"}
          description={"Se mit tidligere arbejde"}
          href={"https://github.com/carolinenorgaard"}
        />
      </div>
    </section>
  );
};

export default Contact;

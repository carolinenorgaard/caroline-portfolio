"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import ContactLink from "./ContactLink";
import { Button } from "./ui/button";
import {
  Send,
  Mail,
  Github,
  // Linkedin
} from "lucide-react";

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
    <section id="contact" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[hsl(265,100%,75%)]">Kontakt</span> Mig
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Jeg er altid åben for at drøfte nye muligheder, samarbejder eller
            bare tage en snak om webudvikling.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="fade-in">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-6">Skriv til mig</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-200/50 bg-muted/50 px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-[hsl(265,100%,75%)] transition-colors disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Dit navn"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-200/50 bg-muted/50 px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-[hsl(265,100%,75%)] transition-colors disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Din email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <textarea
                    className="flex min-h-[120px] w-full rounded-md border border-gray-200/50 bg-muted/50 px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-[hsl(265,100%,75%)] transition-colors resize-none disabled:cursor-not-allowed disabled:opacity-50"
                    name="message"
                    placeholder="Skriv en besked"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  disabled={isSending}
                  className="w-full btn-gradient"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send besked
                </Button>
              </form>
            </div>
          </div>

          <div className="fade-in-delay space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Andre måder at komme i kontakt med mig på
              </h3>
              <div className="space-y-4">
                <ContactLink
                  icon={<Mail className="w-6 h-6" />}
                  title="Email"
                  description="caroline.norgaard.elmer@gmail.com"
                  href="mailto:caroline.norgaard.elmer@gmail.com"
                />
                <ContactLink
                  icon={<Github className="w-6 h-6" />}
                  title="GitHub"
                  description="Se mit tidligere arbejde"
                  href="https://github.com/carolinenorgaard"
                  target="_blank"
                  rel="noopener noreferrer"
                />
                {/* <ContactLink
                  icon={<Linkedin className="w-6 h-6" />}
                  title="LinkedIn"
                  description="Lad os forbinde os professionelt"
                  href="https://linkedin.com/in/caroline-norgaard"
                  target="_blank"
                  rel="noopener noreferrer"
                /> */}
              </div>
            </div>

            <div className="glass-card p-6">
              <h4 className="font-semibold mb-4">Aktuelt tilgængelig til</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Front-end udviklings-praktikpladser</li>
                <li>• Junior udvikler-stillinger</li>
                <li>• Freelance-projekter</li>
                <li>• Open source-samarbejder</li>
                <li>• Mentorskabs-muligheder</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

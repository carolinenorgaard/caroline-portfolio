"use client";

import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative px-6"
    >
      <div className="container mx-auto text-center">
        <div className="fade-in">
          <h1 className="hero-text mb-6">
            Hej, jeg er
            <br />
            <span className="text-primary">Caroline</span>
          </h1>
          <p className="hero-subtitle mb-8 max-w-2xl mx-auto">
            Front-End Developer med passion for at skabe brugervenlige
            weboplevelser med HTML, CSS, JavaScript og React. Jeg har fokus på
            fleksible løsninger, og lyst til hele tiden at lære nyt.
          </p>
        </div>

        <div className="fade-in-delay flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            onClick={() => scrollToSection("projects")}
            className="btn-gradient"
          >
            Se Mine Projekter
          </Button>
          <Button
            onClick={() => scrollToSection("about")}
            className="btn-outline"
          >
            Læs Mere Om Mig
          </Button>
        </div>

        <div className="fade-in-delay flex items-center justify-center space-x-6 mb-16">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:hello@example.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>

        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        >
          <ArrowDown size={24} />
        </button>
      </div>

      {/* Floating elements */}
      <div
        className="floating-dot-primary float top-1/4 left-1/4"
        style={{ animationDelay: "0s" }}
      ></div>
      <div
        className="floating-dot-secondary float top-1/3 right-1/4"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="floating-dot-primary-faded float bottom-1/4 left-1/3"
        style={{ animationDelay: "4s" }}
      ></div>
    </section>
  );
};

export default Hero;

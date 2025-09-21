"use client";

import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Pipper Projekt",
      description:
        "På 3. semester udviklede vi “Pipper” som er et Twitter-inspireret projekt med en frontend udviklet i HTML, CSS og JavaScript samt en backend baseret på et PHP-API og en MySQL-database. Jeg er i øjeblikket i gang med at omskrive projektet til React med fokus på at udvikle genbrugelige komponenter. Formålet er at gøre applikationen mere overskuelig og skalerbar, så det bliver lettere at udvide funktionaliteten i fremtiden.",
      image: "/projects-img/pipper-projekt.png",
      technologies: ["MySQL", "HTML", "CSS", "JavaScript", "PHP"],
      github: "https://github.com/carolinenorgaard/pipper",
      demo: "",
      status: "Under Udvikling",
    },
    {
      title: "Surdejsguiden",
      description:
        "Som eksamensprojekt på 2. semester udviklede vi Surdejsguiden – et website, der trin for trin viser, hvordan man kan starte, passe og bage med surdej. Idéen var at skabe en lærerig oplevelse, der både fangede opmærksomheden visuelt, gav brugbar viden og inviterede til interaktion.",
      image: "/projects-img/surdejsguiden.png",
      technologies: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "Figma"],
      github: "https://github.com/carolinenorgaard/surdejsguiden",
      demo: "",
      status: "Færdig",
    },
    {
      title: "Mobil app-udvikling",
      description:
        "På 3. semester har jeg valgt mobilapp-udvikling som valgfag. Her kommer vi til at arbejde med React Native og bruge AI til at generere kode. Formålet er at udvikle et koncept, designe en brugerflade og implementere dele af den. Fokus er på, hvordan AI kan gøre udviklingen hurtigere og mere effektiv.",
      image: "/projects-img/mobilapp-udvikling.png",
      technologies: [
        "React Native",
        "CSS-lignende værktøj",
        "AI",
        "JavaScript",
      ],
      github: "",
      demo: "",
      status: "Kommende projekt",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Mine <span className="text-primary">Projekter</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Her er et udvalg af mine projekter, der viser min udviklingsrejse og
            mine færdigheder inden for front-end udvikling.
          </p>
        </div>

        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <li
              key={index}
              className="glass-card overflow-hidden fade-in-delay group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                      project.status === "Under Udvikling"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : project.status === "Færdig"
                        ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                        : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.github !== "" && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 btn-outline"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  )}
                  {project.demo !== "" && (
                    <Button
                      size="sm"
                      className="flex-1 btn-gradient"
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="text-center mt-12 fade-in-delay">
          <p className="text-muted-foreground mb-6">
            Flere spændende projekter er på vej, i takt med at jeg fortsætter
            min læringsrejse!
          </p>
          <Button
            onClick={() => window.open("https://github.com", "_blank")}
            className="btn-outline"
          >
            <Github className="w-4 h-4 mr-2" />
            Se Flere Projekter på GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

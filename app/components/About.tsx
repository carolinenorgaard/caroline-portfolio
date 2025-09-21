const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Om <span className="text-primary">Mig</span>
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Jeg hedder Caroline, er 26 år og bor på Frederiksberg. Jeg er i
                gang med at uddanne mig til multimediedesigner med fokus på
                frontend-udvikling. Selvom jeg stadig er ny i branchen, har jeg
                erfaring med HTML, CSS, JavaScript og React, og jeg synes, det
                er spændende at se, hvordan små kodebidder kan blive til
                brugbare og visuelle løsninger.
              </p>
              <p>
                Jeg lærer bedst ved at prøve ting af i praksis og er nysgerrig
                på at opleve, hvordan det er at arbejde med rigtige projekter,
                og større kodebaser med et team. Jeg går til opgaver med
                engagement og gåpåmod og ser udfordringer som en chance for at
                udvikle mig både fagligt og personligt.
              </p>
              <p>
                Når jeg ikke koder, udforsker jeg gerne nye trends inden for
                design og teknologi – og jeg er særligt interesseret i, hvordan
                AI og digitale løsninger hele tiden er med til at forme vores
                hverdag.
              </p>
            </div>
          </div>

          <div className="fade-in">
            <img
              src="/projects-img/portræt-caroline-01.JPG"
              alt="Caroline Nørgaard Elmer"
              className="rounded-lg shadow-lg aspect-square object-cover "
              style={{ objectPosition: "50% 80%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

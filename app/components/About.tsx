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
                frontend-udvikling, fordi jeg brænder for at forvandle idéer til
                levende digitale løsninger. Med erfaring i HTML, CSS, JavaScript
                og React har jeg allerede oplevet, hvordan selv små linjer kode
                kan udvikle sig til intuitive og brugbare designs – og den
                proces motiverer mig enormt.
              </p>
              <p>
                Jeg er nysgerrig af natur og lærer bedst ved at kaste mig ud i
                nye udfordringer og teste ting af i praksis. Derfor glæder jeg
                mig til at arbejde med rigtige projekter, større kodebaser og
                teamsamarbejde, hvor jeg kan bidrage aktivt og samtidig suge ny
                viden til mig. Jeg møder opgaver med energi, engagement og
                gåpåmod – og jeg ser hver udfordring som en mulighed for at
                vokse både fagligt og personligt.
              </p>
            </div>
          </div>

          <div className="fade-in">
            <img
              src="./projects-img/portræt-caroline-01.JPG"
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

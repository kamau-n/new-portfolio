import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { experience } from "@/utils/data";
import { ExternalLink, FileText, Mail, MapPin, Phone } from "lucide-react";
import FadeIn from "./transitions/FadeIn";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -z-10"></div>

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <FadeIn direction="left" className="space-y-6">
            <div className="inline-flex items-center space-x-2">
              <span className="h-px w-8 bg-primary"></span>
              <span className="py-1 px-3 rounded-full bg-secondary text-sm font-medium">
                About Me
              </span>
            </div>

            <h2 className="section-title text-4xl md:text-5xl font-bold leading-tight">
              Passionate about building{" "}
              <span className="text-primary">elegant solutions</span> to complex
              problems
            </h2>

            <div className="space-y-5 text-muted-foreground">
              <p className="text-lg">
                I'm Harrison Kamau, a software engineer based in Nairobi, Kenya
                with over 5 years of experience crafting digital solutions. My
                journey in software development began in 2018, and since then,
                I've had the privilege of working on a diverse range of projects
                across various domains.
              </p>
              <p>
                I specialize in building scalable web and mobile applications
                using modern technologies like TypeScript, JavaScript, React
                Native, and various backend frameworks. My approach to
                development focuses on creating clean, maintainable code that
                delivers exceptional user experiences.
              </p>
              <p>
                My core competencies include Web Development (HTML, CSS,
                JavaScript, TypeScript, React.js, Next.js, TailwindCSS), Mobile
                Development (React Native with Expo), Backend Development (Java
                with Spring Boot, Node.js), and working with various databases
                (MSSQL, PostgreSQL, MySQL, Firebase, MongoDB).
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <Card className="border border-border/40 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Nairobi, Kenya</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-border/40 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">+254 700262226</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-border/40 bg-card/50 backdrop-blur-sm sm:col-span-2">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">kamau629@gmail.com</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="pt-6">
              <Button
                variant="default"
                className="rounded-full group relative overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center">
                  <FileText className="mr-2 h-4 w-4" />
                  Download CV
                  <ExternalLink className="ml-2 h-3 w-3" />
                </span>
              </Button>
            </div>
          </FadeIn>

          <FadeIn direction="right" className="space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold font-display">Experience</h3>
              <div className="h-px flex-grow ml-4 bg-border/60"></div>
            </div>

            <div className="space-y-6">
              {experience.map((job, index) => (
                <FadeIn key={index} direction="up" delay={index * 0.1}>
                  <Card className="overflow-hidden border-none bg-gradient-to-br from-card/80 to-card/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col space-y-3">
                        <div className="inline-flex items-center space-x-2">
                          <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                            {job.period}
                          </span>
                        </div>
                        <h4 className="text-xl font-bold">{job.title}</h4>
                        <p className="text-muted-foreground text-sm">
                          {job.company}
                        </p>
                        <p className="text-muted-foreground">
                          {job.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiSpring,
  SiTensorflow,
  SiPandas,
  SiNumpy,
  SiSelenium,
  SiHibernate,
  SiFastapi,
  SiTailwindcss,
  SiKeycloak,
  SiKeras,
  SiExpo,
  SiScikitlearn,
  SiTypescript,
  SiPython,
  SiRust,
  SiMysql,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import DottedBackground from "@/components/dotted";

const frameworks = [
  { name: "React.js", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Spring", icon: SiSpring, color: "#6DB33F" },
  { name: "Tensorflow", icon: SiTensorflow, color: "#FF6F00" },
  { name: "Pandas", icon: SiPandas, color: "#150458" },
  { name: "Numpy", icon: SiNumpy, color: "#013243" },
  { name: "Selenium", icon: SiSelenium, color: "#43B02A" },
  { name: "Hibernate", icon: SiHibernate, color: "#59666C" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "KeyCloak", icon: SiKeycloak, color: "#4D4D4D" },
  { name: "Keras", icon: SiKeras, color: "#D00000" },
  { name: "Expo", icon: SiExpo, color: "#000020" },
  { name: "React-Native", icon: SiReact, color: "#61DAFB" },
  { name: "scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
  { name: "Java", icon: FaJava, color: "#ED8B00" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Rust", icon: SiRust, color: "#020202ff" },
  { name: "MySQL", icon: SiMysql, color: "#0f4470ff" },
];

const languages = [
  { name: "Java", icon: FaJava, color: "#ED8B00" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
];

export default function Home() {
  return (
    <DottedBackground>
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-400 to-pink-400 p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src="/Beluga.webp"
                  alt="Beluga"
                />
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            KreakxX
          </h1>
          <p className="text-2xl font-bold text-gray-300 mb-8 max-w-2xl mx-auto text-violet-500">
            Full Stack Developer | Mobile Dev | API engineer
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6">
                I'm KreakxX a 16yo Software engineer from Germany with 2+ years
                of Experience
              </p>
              <p className="text-lg text-gray-300 mb-8">
                When I'm not coding, you can find me in the Gym or in school, or
                sometimes only sometimes out with friends
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
                >
                  <Github className="w-4 h-4 mr-2" />
                  <a href="https://github.com/KreakxX">GitHub</a>
                </Button>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-6 text-center">
                  Frameworks
                </h3>
                <div className="relative overflow-hidden">
                  <div className="flex animate-scroll space-x-8">
                    {[...frameworks, ...frameworks].map((framework, index) => (
                      <div
                        key={`${framework.name}-${index}`}
                        className="flex flex-col items-center space-y-2 min-w-[80px] group"
                      >
                        <div className="p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                          <framework.icon
                            className="w-8 h-8"
                            style={{ color: framework.color }}
                          />
                        </div>
                        <span className="text-xs text-gray-300 text-center whitespace-nowrap">
                          {framework.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-6 text-center">
                  Languages
                </h3>
                <div className="flex justify-center space-x-8">
                  {languages.map((language) => (
                    <div
                      key={language.name}
                      className="flex flex-col items-center space-y-2 group"
                    >
                      <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                        <language.icon
                          className="w-10 h-10"
                          style={{ color: language.color }}
                        />
                      </div>
                      <span className="text-sm text-gray-300 text-center">
                        {language.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Quick IO",
                description:
                  "A Fullstack AI Code Reviewer built for my Teacher.",
                tech: ["React.js", "FastAPI", "MySQL"],
                image: "/QuickIO.png",
              },
              {
                title: "Job Scrapper",
                description:
                  "A Webscrapper, that scrappes Jobs from Indeed, LinkedIn, Stepstone(other version)",
                tech: ["React.js", "FastAPI", "Selenium"],
                image: "/JobScrapper.png",
              },
              {
                title: "Loop",
                description:
                  "The best Habit tracker, esspecially built and designed for Software engineers",
                tech: ["React-Native"],
                image: "/Loop.jpeg",
              },
              {
                title: "AI Agents",
                description:
                  "A Tauri desktop app, for managing and using local LLMs",
                tech: ["Rust", "React.js"],
                image: "/AIAgents.jpeg",
              },
              {
                title: "ML",
                description: "A collection of ML projects (CNN, RNN ...)",
                tech: ["Python", "Tensorflow", "Keras"],
                image: "/ML.png",
              },
              {
                title: "Lidl Shop",
                description:
                  "A Lidl Shopping Checkout/delivery Portal for my School",
                tech: ["Spring", "React.js", "MySQL"],
                image: "/Lidl.png",
              },
              {
                title: "Quick Bitly",
                description: "A Url Shortener like Bitly but quick",
                tech: ["Next.js", "MySQL"],
                image: "/QuickBitly.png",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <CardHeader className="p-0 flex items-center justify-center">
                  <div className="w-full h-48 overflow-hidden rounded-t-lg">
                    <img
                      src={
                        project.image || "/placeholder.svg?height=200&width=300"
                      }
                      alt={project.title}
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2 text-white">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 mb-4">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => {
                      const fw = frameworks.find((fw) => fw.name === tech);
                      const Icon = fw?.icon;

                      return (
                        <div key={tech} className="flex items-center space-x-2">
                          <Badge
                            variant="outline"
                            className="text-xs border-gray-600 text-gray-300"
                          >
                            {tech}
                          </Badge>
                          {Icon && (
                            <Icon
                              className="w-4 h-4"
                              style={{ color: fw.color }}
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 KreakxX. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </DottedBackground>
  );
}

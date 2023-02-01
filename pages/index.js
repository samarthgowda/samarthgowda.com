import Head from "next/head";
import Image from "next/image";
import { useTheme } from "next-themes";

import { SiLinkedin, SiTwitter, SiGithub } from "react-icons/si";

const projects = [
  {
    name: "ahta sports",
    href: "https://ahtasports.com",
    description: "Building a next-generation sports media platform.",
    tags: ["👷 building", "🤖 mvp"],
    logo: "/images/ahta-logo.png",
  },
  {
    name: "pralent",
    href: "https://pralent.com",
    tags: ["👷 building", "🌎 active users"],
    description: "Community platform for student clubs.",
    logo: "/images/pralent-logo.png",
  },
  {
    name: "skube",
    href: "https://skube-jet.vercel.app/",
    tags: ["⏳ built", "💻 project"],
    description: "A system for creating your on-chain resume.",
    logo: "/images/skube-logo.png",
  },
  {
    name: "sportcase",
    href: "https://github.com/samarthgowda/sportcase",
    tags: ["⏳ built", "💻 project"],
    description: "A website to browse sports digital collectibles.",
    logo: "/images/sportcase-logo.png",
  },
];

const links = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/gowdasamarth",
    info: "in/gowdasamarth",
    icon: SiLinkedin,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/iamsamarthgowda",
    info: "@iamsamarthgowda",
    icon: SiTwitter,
  },
  {
    name: "GitHub",
    href: "https://github.com/samarthgowda",
    info: "@samarthgowda",
    icon: SiGithub,
  },
];
export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="min-h-full text-base font-normal leading-relaxed text-zinc-800 dark:text-zinc-100">
      <Head>
        <title>Samarth Gowda</title>
        <meta name="description" content="Samarth Gowda's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-auto max-w-5xl p-6 sm:p-12 md:p-28 lg:p-36 xl:p-44">
        <div className="flex flex-col items-center justify-center gap-16 md:items-start">
          <div className="space-y-6">
            <div
              className="h-20 w-20 rounded-lg bg-lime-400 p-0.5 duration-300 ease-in-out hover:h-56 hover:w-56"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Image
                src="/images/samarth.png"
                alt="Samarth Gowda at a table"
                height="1000"
                width="1000"
                className="mx-auto rounded-lg object-cover"
              />
            </div>
            <h2 className="font-serif text-2xl font-medium italic">
              Samarth Gowda
            </h2>
            <p>
              Building{" "}
              <span className="font-serif font-semibold italic">
                full-stack apps
              </span>{" "}
              and thinking about the{" "}
              <span className="font-serif font-semibold italic">
                future of AI
              </span>
              . Always looking for the next big thing to work on. Software
              engineer & wannabe designer. Creating at{" "}
              <a
                href="https://ahtasports.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif font-semibold italic underline decoration-lime-400 decoration-1 underline-offset-4 hover:decoration-lime-200"
              >
                ahta sports
              </a>
              .
            </p>
            <p>
              Recently graduated in{" "}
              <span className="font-serif font-semibold italic">
                Stats & Machine Learning
              </span>{" "}
              at{" "}
              <span className="font-serif font-semibold italic">
                Carnegie Mellon (&apos;22)
              </span>
            </p>
          </div>
          <div className="w-full">
            <p className="text-sm text-zinc-700 dark:text-zinc-400">
              Check these out 👀
            </p>
            <div className="divide-y divide-zinc-300 dark:divide-zinc-700">
              {projects.map((project, index) => (
                <div className="flex items-center gap-4 py-4" key={index}>
                  <div className="h-10 w-10">
                    <Image
                      src={project.logo}
                      alt={project.name}
                      height="1000"
                      width="1000"
                      className="mx-auto rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <div className="flex items-center gap-2">
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mr-4 font-serif text-lg font-medium italic text-zinc-800 underline decoration-lime-400 decoration-1 underline-offset-4 hover:decoration-lime-100 dark:text-zinc-200"
                      >
                        {project.name}
                      </a>
                      {project.tags.map((tag, index) => (
                        <span
                          className="rounded-full bg-zinc-200 px-1.5 py-0.5 text-xs font-medium uppercase tracking-wide text-zinc-800 dark:bg-zinc-700 dark:text-zinc-200"
                          key={index}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Favorite tech stack */}
          {/* Gallery */}
          {/* Videos */}
          {/* Contact */}
          <div className="w-full">
            <p className="text-sm text-zinc-700 dark:text-zinc-400">
              Get in touch 📬
            </p>
            <div className="grid grid-cols-1 gap-4 py-4 sm:grid-cols-2 lg:grid-cols-3">
              {links.map((link, index) => (
                <div
                  key={index}
                  className="relative flex items-center space-x-4 rounded-lg border border-zinc-300 px-4 py-2 hover:border-zinc-400 dark:border-zinc-700 hover:dark:border-zinc-600"
                >
                  <link.icon className="h-8 w-8 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus:outline-none"
                    >
                      <span className="absolute inset-0" aria-hidden="true" />
                      <p className="font-serif text-lg font-medium italic text-zinc-800 dark:text-zinc-200">
                        {link.name}
                      </p>
                      <p className="truncate text-sm text-zinc-600 dark:text-zinc-400">
                        {link.info}
                      </p>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Head from "next/head";
import Link from "next/link";

import { SiTwitter, SiLinkedin, SiGithub, SiYoutube } from "react-icons/si";
import {
  IoPersonCircle,
  IoCube,
  IoNewspaper,
  IoPeople,
  IoRocket,
} from "react-icons/io5";
import Image from "next/image";

const links = [
  {
    href: "/profile",
    name: "My Profile",
    icon: <IoPersonCircle />,
  },
  {
    href: "/twitter",
    name: "Twitter",
    handle: "iamsamarthgowda",
    icon: <SiTwitter />,
  },
  {
    href: "/github",
    name: "GitHub",
    handle: "samarthgowda",
    icon: <SiGithub />,
  },
  {
    href: "/linkedin",
    name: "LinkedIn",
    handle: "gowdasamarth",
    icon: <SiLinkedin />,
  },
  {
    href: "/youtube",
    name: "YouTube",
    icon: <SiYoutube />,
  },
  {
    href: "/blog",
    name: "Blog",
    icon: <IoNewspaper />,
  },
  {
    href: "/skube",
    name: "skube.xyz",
    icon: <IoCube />,
  },
  {
    href: "/web4",
    name: "web4.lol",
    icon: <IoRocket />,
  },
  {
    href: "/pralent",
    name: "pralent.com",
    icon: <IoPeople />,
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Samarth Gowda</title>
        <meta name="description" content="Samarth Gowda's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 lg:py-20">
        <div className="max-w-lg mx-auto">
          <div className="flex flex-col items-center md:items-start justify-center">
            <div className="w-40 h-40 bg-gradient-to-br from-orange-400 to-pink-400 p-2 rounded-full">
              <Image
                src="/images/samarth.jpg"
                alt="Samarth Gowda at a table"
                height="1000"
                width="1000"
                className="rounded-full mx-auto object-cover"
              />
            </div>
            <h2 className="text-3xl font-mono font-bold leading-7 text-gray-900 sm:text-4xl sm:truncate mt-4 mb-2">
              Samarth Gowda
            </h2>
            <div className="text-gray-400 flex flex-col space-y-1 items-center md:items-start">
              <p>
                🏗️ Building{" "}
                <a
                  href="https://skube.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline cursor-pointer text-pink-500 hover:text-pink-400"
                >
                  skube.xyz
                </a>
              </p>
              <p>
                🚀 Figuring out what to do with{" "}
                <a
                  href="https://web4.lol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline cursor-pointer text-pink-500 hover:text-pink-400"
                >
                  web4.lol
                </a>
              </p>
              <p>
                🏛️ Studied Statistics and Machine Learning @ Carnegie Mellon
              </p>
            </div>
          </div>
          <div className="flow-root mt-6 md:mt-12">
            <ul role="list" className="-my-5 divide-y divide-gray-200">
              {links.map((link, index) => {
                return (
                  <li key={index} className="py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">{link.icon}</div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {link.name}
                        </p>
                        {link.handle && (
                          <p className="text-sm text-gray-500 truncate">
                            {"@" + link.handle}
                          </p>
                        )}
                      </div>
                      <div>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cursor-pointer inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                        >
                          View
                        </a>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

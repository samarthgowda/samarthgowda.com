import Head from "next/head";
import Link from "next/link";

import { SiTwitter, SiLinkedin, SiGithub, SiYoutube } from "react-icons/si";
import { IoPersonCircle, IoCube, IoNewspaper, IoPeople } from "react-icons/io5";

const links = [
  {
    href: "/profile",
    name: "My Profile",
    icon: <IoPersonCircle />,
  },
  {
    href: "/github",
    name: "GitHub",
    handle: "samarthgowda",
    icon: <SiGithub />,
  },
  {
    href: "/twitter",
    name: "Twitter",
    handle: "iamsamarthgowda",
    icon: <SiTwitter />,
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
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Samarth Gowda
          </h2>
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
                        <Link href={link.href} passHref>
                          <span className="cursor-pointer inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50">
                            View
                          </span>
                        </Link>
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

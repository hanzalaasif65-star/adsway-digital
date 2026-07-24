import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Social Media Management",
    "Meta Ads",
    "Content Creation",
    "Branding",
    "Website Design",
  ];

  return (
    <footer className="relative overflow-hidden bg-[#07070F] text-white">

      {/* Animated Top Border */}

      <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[140px]" />

        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px] animate-pulse" />

        <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px] animate-pulse" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 lg:grid-cols-4">

          {/* Brand */}

          <div className="lg:col-span-2">

            <h2 className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300 bg-clip-text text-4xl font-black text-transparent">
              ADSWAY DIGITAL
            </h2>

            <p className="mt-6 max-w-lg leading-8 text-gray-400">
              Helping businesses grow through social media management,
              paid advertising, branding, content creation and
              performance marketing.
            </p>

            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3 text-gray-300">

                <MapPin
                  size={18}
                  className="text-purple-400"
                />

                Karachi, Pakistan

              </div>

              <div className="flex items-center gap-3 text-gray-300">

                <Mail
                  size={18}
                  className="text-purple-400"
                />

                info.adswaydigital@gmail.com

              </div>

              <div className="flex items-center gap-3 text-gray-300">

                <Phone
                  size={18}
                  className="text-purple-400"
                />

                +92 310 7885938

              </div>

            </div>

            <div className="mt-8 flex gap-4">

              <a
                href="https://www.instagram.com/adswaydigital?igsh=bmtxdmIzNWsxNjdz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500 hover:bg-purple-500/20"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="https://www.facebook.com/share/1D38zKjLvV/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500 hover:bg-purple-500/20"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="https://www.linkedin.com/company/adsway-studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500 hover:bg-purple-500/20"
              >
                <FaLinkedinIn size={18} />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-lg font-bold">
              Quick Links
            </h3>

            <div className="mt-6 space-y-4">

              {quickLinks.map((link) => (

                <Link
                  key={link.name}
                  href={link.href}
                  className="group flex items-center text-gray-400 transition hover:text-white"
                >

                  {link.name}

                  <ArrowUpRight
                    size={15}
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />

                </Link>

              ))}

            </div>

          </div>

          {/* Paste Part 2 directly below this line */}

          <div>
                        <h3 className="text-lg font-bold">
              Services
            </h3>

            <div className="mt-6 space-y-4">

              {services.map((service) => (

                <p
                  key={service}
                  className="cursor-default text-gray-400 transition duration-300 hover:translate-x-1 hover:text-white"
                >
                  {service}
                </p>

              ))}

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 border-t border-white/10 pt-8">

          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

            <div>

              <p className="text-sm text-gray-500">
                © {year} Adsway Digital. All Rights Reserved.
              </p>

            </div>

            <div className="flex items-center gap-3">

              <div className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />

              <p className="text-sm text-gray-500">
                Designed & Developed by Adsway Digital
              </p>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}
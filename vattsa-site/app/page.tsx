"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Podcast, ExternalLink, ChevronRight, Instagram, Linkedin, ArrowRight } from "lucide-react";

const SITE = {
  name: "VM",
  tagline: "Consultant • Creator • Podcast Host",
  currentLocation: "Manhattan, New York, NY",
  lastUpdatedISO: "2025-10-02T12:00:00Z",
  email: "vattsamehta@gmail.com.com",
  socials: {
    instagram: "https://www.instagram.com/thevattsanator/?hl=en",
    linkedin: "https://www.linkedin.com/in/vattsa-mehta-676620113/",
    notionJournal: "https://www.notion.so/example-october-2025-update",
  },
  ggr: {
    site: "https://example.com/gals-getting-rich",
    spotify: "https://open.spotify.com/show/6NZO8HHBoBON5xIXZs9xMm",
    apple: "https://podcasts.apple.com/us/podcast/gals-getting-rich/id1629224294",
  },
};

function prettyAgo(iso: string) {
  const mins = Math.floor((Date.now() - new Date(iso).getTime()) / 60000);
  if (mins < 60) return `${mins} minute${mins !== 1 ? "s" : ""} ago`;
  const h = Math.floor(mins / 60);
  if (h < 24) return `${h} hour${h !== 1 ? "s" : ""} ago`;
  const d = Math.floor(h / 24);
  return `${d} day${d !== 1 ? "s" : ""} ago`;
}

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <motion.h2
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4 }}
      className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6"
    >
      {title}
    </motion.h2>
    {children}
  </section>
);

export default function Page() {
  const lastUpdatedText = useMemo(() => prettyAgo(SITE.lastUpdatedISO), []);

  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-950/60 border-b border-neutral-200/60 dark:border-neutral-800/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold text-lg">{SITE.name}</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
  <a href="/journal" className="hover:underline">Journal</a>
  <a href="/projects" className="hover:underline">Work</a>
  <a href="/about" className="hover:underline">About</a>
  <a href="/contact" className="hover:underline">Contact</a>
</nav>
        </div>
      </header>

      <main id="home" className="relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div id="journal" className="mb-8 flex justify-center">
            <Button
              asChild
              variant="outline"
              className="w-full sm:w-auto min-w-[400px] max-w-[500px] rounded-2xl px-8 py-6 bg-white text-neutral-900 border border-neutral-300 hover:bg-neutral-50 dark:bg-neutral-900 dark:text-neutral-100 dark:border-neutral-700"
            >
              <a
                href={SITE.socials.notionJournal}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center text-center w-full leading-snug"
              >
                <span className="inline-flex items-center gap-2 text-lg font-medium whitespace-normal">⭐ October 2025 Update <ArrowRight className="h-5 w-5" /></span>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">more on who I am and who I am becoming</span>
              </a>
            </Button>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-center"
          >
            Vattsa Mehta
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-lg text-neutral-600 dark:text-neutral-300 text-center"
          >
            {SITE.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 flex justify-center"
          >
            <div className="inline-flex items-start gap-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 px-3 py-2 text-xs sm:text-sm">
              <MapPin className="h-4 w-4 mt-0.5" />
              <div className="leading-tight">
                <div>
                  Currently adventuring around <span className="font-medium">{SITE.currentLocation}</span>
                </div>
                <div className="text-[10px] sm:text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                  Last updated {lastUpdatedText}.
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mt-8 flex flex-wrap items-center gap-3 justify-center">
            <Button className="rounded-2xl px-4">
              <span className="inline-flex items-center gap-2">
                See my work <ChevronRight className="h-4 w-4" />
              </span>
            </Button>
            <Button variant="outline" className="rounded-2xl px-4">
              <span className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4" /> Contact
              </span>
            </Button>
            <Button variant="ghost" className="rounded-2xl px-3">
              <span className="inline-flex items-center gap-2">
                <Instagram className="h-4 w-4" /> Instagram
              </span>
            </Button>
            <Button variant="ghost" className="rounded-2xl px-3">
              <span className="inline-flex items-center gap-2">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </span>
            </Button>
          </div>
        </div>
      </main>

      <Section id="work" title="Some of my work">
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
          >
            <Card className="rounded-2xl border-neutral-200 dark:border-neutral-800">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                  <Podcast className="h-5 w-5" />
                  <span className="uppercase tracking-wide text-xs font-medium">Podcast</span>
                </div>
                <h3 className="mt-2 text-xl font-semibold">Gals Getting Rich</h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  A personal-finance podcast with candid, upbeat conversations about money, careers, side hustles, and leveling up — served with humor and practical takeaways.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a href={SITE.ggr.site} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm underline underline-offset-4">
                    Website <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <a href={SITE.ggr.spotify} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm underline underline-offset-4">
                    Spotify <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <a href={SITE.ggr.apple} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm underline underline-offset-4">
                    Apple Podcasts <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                  <li className="px-2 py-1 rounded-full border border-neutral-200 dark:border-neutral-800">Personal finance</li>
                  <li className="px-2 py-1 rounded-full border border-neutral-200 dark:border-neutral-800">Careers</li>
                  <li className="px-2 py-1 rounded-full border border-neutral-200 dark:border-neutral-800">Side hustles</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: 0.05 }}
          >
            <Card className="rounded-2xl border-dashed border-2 border-neutral-200 dark:border-neutral-800 h-full">
              <CardContent className="p-6 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold">Add another project</h3>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                    Drop in a case study, experiment, or a favorite client project. Duplicate this card and update the content.
                  </p>
                </div>
                <div className="mt-4">
                  <Button variant="outline" className="rounded-xl">Use this slot</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Section>

      <Section id="about" title="About">
        <div className="grid md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-2 text-neutral-700 dark:text-neutral-300 leading-relaxed">
            <p>
              I’m Vattsa Mehta, a management consultant and creator who loves building clear, useful things: decks that persuade, products that ship, and content that helps people level up. I live by my top values of Exploration, Iteration, and Connection. Exploration is what I do; I do it through iteration; and I do it to create more connection. Outside of work, I am prioritizing physical health, (re)building community, and cultivating creativity through interesting weekend projects.
            </p>
            <p className="mt-4">
              Recently, I’ve been focused on banking & capital markets projects, plus growing <span className="font-medium">Gals Getting Rich</span>, a podcast and content series about money and career growth.
            </p>
          </div>
          <div className="md:col-span-1">
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4 text-sm">
              <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                <MapPin className="h-4 w-4" /> <span className="font-medium">Based in</span>
              </div>
              <div className="mt-1">{SITE.currentLocation}</div>
              <div className="mt-4 flex flex-wrap gap-2">
                <a className="text-sm underline underline-offset-4" href={`mailto:${SITE.email}`}>Email</a>
                <a className="text-sm underline underline-offset-4" href={SITE.socials.instagram} target="_blank" rel="noreferrer">Instagram</a>
                <a className="text-sm underline underline-offset-4" href={SITE.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="contact" title="Get in touch">
        <div className="max-w-3xl">
          <p className="text-neutral-700 dark:text-neutral-300">
            Want to collaborate, book me for a talk, or swap ideas? I’m a quick reply away.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Button className="rounded-2xl px-4">
              <span className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4" /> {SITE.email}
              </span>
            </Button>
          </div>
        </div>
      </Section>

      <footer className="border-t border-neutral-200 dark:border-neutral-800 py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-neutral-500 dark:text-neutral-400 space-y-6">
          <div className="flex flex-wrap gap-4">
            <a href={SITE.socials.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 underline">
              <Instagram className="h-4 w-4" /> Instagram
            </a>
            <a href={SITE.socials.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 underline">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>

          <div>© {new Date().getFullYear()} Vattsa Mehta. Built with ❤️.</div>
        </div>
      </footer>
    </div>
  );
}

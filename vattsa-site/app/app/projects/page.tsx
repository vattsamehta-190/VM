"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Podcast } from "lucide-react";

const PROJECTS = [
  {
    kind: "Podcast",
    icon: Podcast,
    title: "Gals Getting Rich",
    desc: "Candid, upbeat conversations about money, careers, side hustles, and leveling up.",
    links: [
      { label: "Website", href: "https://example.com/gals-getting-rich" },
      { label: "Spotify", href: "https://open.spotify.com/show/6NZO8HHBoBON5xIXZs9xMm" },
      { label: "Apple", href: "https://podcasts.apple.com/us/podcast/gals-getting-rich/id1629224294" },
    ],
    tags: ["Personal finance", "Careers", "Side hustles"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-3xl font-semibold tracking-tight mb-6"
      >
        Some of my work
      </motion.h1>
      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((p) => (
          <Card key={p.title} className="rounded-2xl border-neutral-200 dark:border-neutral-800">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                <p.icon className="h-5 w-5" />
                <span className="uppercase tracking-wide text-xs font-medium">{p.kind}</span>
              </div>
              <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noreferrer"
                     className="inline-flex items-center gap-1 text-sm underline underline-offset-4">
                    {l.label} <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
              <ul className="mt-4 flex flex-wrap gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                {p.tags.map((t) => (
                  <li key={t} className="px-2 py-1 rounded-full border border-neutral-200 dark:border-neutral-800">{t}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}

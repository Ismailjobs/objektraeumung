"use client";

import { motion } from "framer-motion";
import { MapPin, Tag, ShieldCheck, Users } from "lucide-react";

const PARAGRAPHS = [
  "Objekträumung ist ein lokales Räumungsunternehmen aus Wien und unterstützt Privatpersonen, Familien, Hausverwaltungen und Betriebe bei Räumungen jeder Größe. Im Mittelpunkt steht ein einfacher Ablauf: Sie senden eine Anfrage, wir prüfen den Umfang, besichtigen bei Bedarf vor Ort und erstellen ein transparentes Angebot. Danach kümmert sich unser Team um die Räumung, den Abtransport und die fachgerechte Entsorgung.",
  "Viele Kunden melden sich bei uns, wenn eine Wohnung geräumt werden muss, ein Keller über Jahre voll geworden ist oder eine Haushaltsauflösung bevorsteht. Auch bei Nachlässen, Dachböden, Büroräumen, Lagern oder einzelnen Möbelstücken helfen wir schnell und diskret weiter. Dabei geht es nicht nur darum, Dinge aus einem Objekt zu tragen. Wichtig sind eine saubere Planung, geschützte Transportwege, ein respektvoller Umgang mit persönlichen Gegenständen und eine Übergabe, bei der die Räume wieder ordentlich nutzbar sind.",
  "Als Räumungsfirma in Wien kennen wir die typischen Herausforderungen in der Stadt: enge Stiegenhäuser, Altbauwohnungen, Innenhöfe, Kurzparkzonen, kleine Aufzüge und klare Vorgaben von Hausverwaltungen. Diese Erfahrung hilft dabei, den Einsatz realistisch einzuschätzen und unnötige Verzögerungen zu vermeiden. Wenn Möbel, Hausrat oder verwertbare Gegenstände vorhanden sind, prüfen wir außerdem, ob eine Wertanrechnung möglich ist. So wird nicht alles automatisch entsorgt, sondern fair bewertet und sinnvoll behandelt.",
  "Unser Ziel ist eine Räumung und Entsorgung, die für Kunden nachvollziehbar, planbar und stressfrei bleibt. Deshalb arbeiten wir mit Fixpreis-Angeboten, direkter Kommunikation und einem Team, das vom ersten Kontakt bis zur besenreinen Übergabe Verantwortung übernimmt.",
] as const;

const FEATURES = [
  {
    icon: MapPin,
    title: "Lokal in Wien",
    desc: "Wir sind in allen Bezirken Wiens für Sie im Einsatz – schnell vor Ort, flexibel und zuverlässig.",
  },
  {
    icon: Tag,
    title: "Faire Preise",
    desc: "Transparente Fixpreis-Angebote ohne versteckte Kosten. Wertausgleich möglich.",
  },
  {
    icon: ShieldCheck,
    title: "Seriös & diskret",
    desc: "Vertrauen, Diskretion und ein respektvoller Umgang mit Ihren Räumen und Gegenständen sind für uns selbstverständlich.",
  },
  {
    icon: Users,
    title: "Erfahrenes Team",
    desc: "Geschultes Personal, moderne Fahrzeuge und die richtige Ausrüstung für jede Räumung – egal wie groß.",
  },
] as const;

export function HomeAboutSection() {
  return (
    <section
      id="ueber-objektraeumung"
      className="scroll-mt-24 bg-[#f5f4f1] py-14 md:py-20 lg:py-24 border-t border-navy/5"
      aria-labelledby="home-about-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-6xl mx-auto px-4 sm:px-6"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-16 items-start">
          <div>
            <h2
              id="home-about-heading"
              className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-navy leading-tight mb-3"
            >
              Über <span className="text-accent">Objekträumung</span>: lokal, fair und
              zuverlässig
            </h2>
            <p className="text-navy/60 text-sm md:text-base font-medium mb-6 md:mb-8 max-w-xl">
              Ihr regionaler Räumungsservice in Wien – persönlich erklärt, ohne leere
              Versprechen.
            </p>
            <div className="space-y-5 text-navy/80 text-base md:text-[1.05rem] leading-relaxed">
              {PARAGRAPHS.map((text) => (
                <p key={text.slice(0, 48)}>{text}</p>
              ))}
            </div>
          </div>

          <ul className="flex flex-col gap-5 lg:gap-6 lg:pt-2">
            {FEATURES.map(({ icon: Icon, title, desc }, index) => (
              <motion.li
                key={title}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex gap-4 sm:gap-5"
              >
                <span className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white border border-navy/10 shadow-sm flex items-center justify-center">
                  <Icon className="text-accent" size={28} strokeWidth={1.75} aria-hidden />
                </span>
                <div className="pt-0.5 min-w-0">
                  <h3 className="font-bold text-navy text-lg sm:text-xl mb-1.5">{title}</h3>
                  <p className="text-navy/70 text-sm sm:text-base leading-relaxed">{desc}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}

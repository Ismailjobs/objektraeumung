"use client";

import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  CalendarClock,
  Sparkles,
  FileText,
  Truck,
  Warehouse,
  CircleDollarSign,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ_ITEMS: {
  question: string;
  answer: string;
  icon: LucideIcon;
}[] = [
  {
    question: "Wann lohnt es sich, eine professionelle Räumung zu beauftragen?",
    answer:
      "Eine professionelle Räumung lohnt sich immer dann, wenn Umfang, Zeitdruck oder Aufwand schwer einzuschätzen sind. Das betrifft zum Beispiel eine Wohnungsräumung vor der Übergabe, eine Haushaltsauflösung nach einem Umzug, eine Verlassenschaftsräumung oder die komplette Räumung von Keller, Dachboden, Garage oder Büro. Ein erfahrenes Team kann vorab einschätzen, wie viele Personen, Fahrzeuge und Entsorgungswege notwendig sind. Das spart Zeit und reduziert das Risiko, dass am Ende noch Sperrmüll, schwere Möbel oder nicht sortierte Gegenstände übrig bleiben.",
    icon: CalendarClock,
  },
  {
    question: "Kann ich eine Wohnung besenrein räumen lassen?",
    answer:
      "Ja, eine Wohnung kann auf Wunsch besenrein geräumt werden. Das bedeutet, dass Möbel, Hausrat, Kartons, Teppiche, Elektrogeräte und Sperrmüll entfernt werden und die Räume ordentlich zur Übergabe vorbereitet sind. Besonders vor einer Rückgabe an Vermieter, Eigentümer oder Hausverwaltung ist eine besenreine Übergabe sinnvoll. Je nach Zustand der Wohnung können auch zusätzliche Arbeiten wie Demontagen, das Entfernen einzelner Einbauten oder eine weiterführende Reinigung besprochen werden.",
    icon: Sparkles,
  },
  {
    question: "Wie läuft eine Haushaltsauflösung oder Nachlassräumung ab?",
    answer:
      "Bei einer Haushaltsauflösung oder einem Nachlass ist ein ruhiger und strukturierter Ablauf besonders wichtig. Zuerst wird geklärt, welche Räume betroffen sind, ob bestimmte Gegenstände behalten werden sollen und ob verwertbare Möbel, Antiquitäten, Technik oder Sammlungen vorhanden sind. Danach wird der Aufwand eingeschätzt und ein Angebot erstellt. Bei der Räumung selbst werden Gegenstände getrennt, transportiert, verwertet oder entsorgt. Gerade wenn Angehörige einen Nachlass auflösen müssen, hilft ein zuverlässiger Ansprechpartner, der diskret arbeitet und klare Schritte vorgibt.",
    icon: FileText,
  },
  {
    question: "Was passiert mit Möbeln, Hausrat und Sperrmüll?",
    answer:
      "Möbel und Hausrat werden nicht einfach unsortiert entsorgt. Zuerst wird geprüft, welche Gegenstände noch brauchbar, verwertbar oder für eine Wertanrechnung geeignet sind. Nicht mehr nutzbare Möbel, Matratzen, Teppiche, Kartons, Elektrogeräte und anderer Sperrmüll werden getrennt und fachgerecht abgeführt. Das ist besonders wichtig, weil unterschiedliche Materialien auch unterschiedlich entsorgt werden müssen. Eine gut geplante Entsorgung sorgt dafür, dass die Räumung schneller abläuft und die Fläche am Ende wirklich frei ist.",
    icon: Truck,
  },
  {
    question: "Übernehmen Sie auch Kellerräumung und Dachbodenräumung?",
    answer:
      "Ja, auch Keller, Dachböden, Abstellräume und Nebenräume können geräumt werden. Diese Bereiche sind oft schwer zugänglich, schlecht beleuchtet oder über viele Jahre vollgestellt. Typische Gegenstände sind alte Möbel, Kisten, Werkzeuge, Reifen, Elektrogeräte, Bücher, Matratzen oder gemischter Hausrat. Bei einer Kellerräumung oder Dachbodenräumung achten wir darauf, Tragewege sauber zu halten, Stiegenhäuser zu schützen und den Raum so zu hinterlassen, dass er wieder genutzt, übergeben oder weitervermietet werden kann.",
    icon: Warehouse,
  },
  {
    question: "Gibt es bei der Räumung einen Fixpreis?",
    answer:
      "Nach einer Besichtigung oder einer ersten Einschätzung per Fotos kann ein Fixpreis vereinbart werden. Der Preis hängt unter anderem von Objektgröße, Stockwerk, Aufzug, Menge, Demontageaufwand, Entsorgung und gewünschtem Termin ab. Ein Fixpreis ist für Kunden besonders hilfreich, weil vor Beginn klar ist, welche Kosten entstehen. Wenn verwertbare Gegenstände vorhanden sind, kann außerdem geprüft werden, ob diese den Preis reduzieren. So bleibt die Räumung transparent und besser planbar.",
    icon: CircleDollarSign,
  },
];

const FAQ_INTRO =
  "Unser Ziel ist eine Räumung und Entsorgung, die für Kunden nachvollziehbar, planbar und stressfrei bleibt. Deshalb arbeiten wir mit Fixpreis-Angeboten, direkter Kommunikation und einem Team, das vom ersten Kontakt bis zur besenreinen Übergabe Verantwortung übernimmt.";

function FaqSectionDivider() {
  return (
    <div
      className="flex items-center justify-center gap-4 mt-5 md:mt-7 mb-10 md:mb-12"
      aria-hidden
    >
      <span className="h-[2px] w-16 sm:w-28 md:w-32 bg-gradient-to-r from-transparent to-accent/75 rounded-full" />
      <span className="relative flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7">
        <span className="absolute inset-0 rotate-45 border-2 border-accent/30 bg-white rounded-[2px]" />
        <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rotate-45 bg-accent rounded-[2px] shadow-sm" />
      </span>
      <span className="h-[2px] w-16 sm:w-28 md:w-32 bg-gradient-to-l from-transparent to-accent/75 rounded-full" />
    </div>
  );
}

export function HomeFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="scroll-mt-24 bg-white py-14 md:py-20 lg:py-24"
      aria-labelledby="home-faq-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto px-4"
      >
        <h2
          id="home-faq-heading"
          className="font-bold text-2xl md:text-3xl text-slate-800 tracking-tight text-center"
        >
          Häufige Fragen zur Räumung und Entsorgung
        </h2>

        <FaqSectionDivider />

        <ul className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `home-faq-panel-${index}`;
            const triggerId = `home-faq-trigger-${index}`;
            const Icon = item.icon;
            const number = index + 1;

            return (
              <li key={item.question}>
                <article
                  className={`rounded-xl bg-white border transition-all duration-300 ${
                    isOpen
                      ? "border-accent/25 shadow-md ring-1 ring-accent/10"
                      : "border-gray-100 shadow-sm hover:shadow-lg hover:border-gray-200/80"
                  }`}
                >
                  <button
                    type="button"
                    id={triggerId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(index)}
                    className="flex w-full items-start gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 text-left"
                  >
                    <div className="flex items-center gap-2.5 shrink-0 pt-0.5">
                      <span
                        className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-500 text-sm tabular-nums"
                        aria-hidden
                      >
                        {number}
                      </span>
                      <span className="flex w-10 h-10 items-center justify-center rounded-lg bg-accent/[0.08]">
                        <Icon
                          className="text-accent"
                          size={22}
                          strokeWidth={1.75}
                          aria-hidden
                        />
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-800 text-base sm:text-lg leading-snug pr-2">
                        {item.question}
                      </h3>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            id={panelId}
                            role="region"
                            aria-labelledby={triggerId}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed">
                              {item.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <ChevronDown
                      size={22}
                      strokeWidth={2}
                      className={`shrink-0 mt-1 text-accent/80 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden
                    />
                  </button>
                </article>
              </li>
            );
          })}
        </ul>

        <p className="max-w-3xl mx-auto text-center leading-relaxed text-gray-600 text-base md:text-lg mt-8 md:mt-10 border-t border-accent/15 pt-8 md:pt-10">
          {FAQ_INTRO}
        </p>
      </motion.div>
    </section>
  );
}

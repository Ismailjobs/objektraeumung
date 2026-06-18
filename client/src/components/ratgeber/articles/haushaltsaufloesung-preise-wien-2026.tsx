import { Link } from "@/i18n/navigation";
import {
  RatgeberArticleBody,
  RatgeberCallout,
  RatgeberCta,
  RatgeberH2,
  RatgeberH3,
  RatgeberLead,
  RatgeberLi,
  RatgeberP,
  RatgeberUl,
} from "@/components/ratgeber/RatgeberArticleBody";

const linkClass = "text-accent hover:underline font-medium";

export function HaushaltsaufloesungPreiseWien2026Article() {
  return (
    <RatgeberArticleBody>
      <RatgeberLead>
        Die Frage nach den genauen Kosten ist meist der erste Gedanke bei einer anstehenden
        Haushaltsauflösung. Viele Kunden suchen nach einem einfachen Quadratmeterpreis — doch die
        Realität sieht anders aus: Jedes Objekt in Wien hat seine eigenen logistischen
        Herausforderungen.
      </RatgeberLead>

      <RatgeberP>
        Damit Sie Ihr Budget verlässlich planen können, zeigt Ihnen Objekträumung Wien, wie sich die
        Preise im Jahr 2026 wirklich zusammensetzen und worauf Sie bei Angeboten achten müssen. Alle
        Angaben beziehen sich auf unsere{" "}
        <Link href="/services/haushaltsaufloesung" className={linkClass}>
          Haushaltsauflösung in Wien
        </Link>{" "}
        — transparent kalkuliert über unser{" "}
        <Link href="/prices" className={linkClass}>
          Preismodell
        </Link>
        .
      </RatgeberP>

      <RatgeberH2 id="vier-faktoren">Diese 4 Faktoren bestimmen den Endpreis</RatgeberH2>
      <RatgeberP>
        Ein seriöser Preis lässt sich erst ermitteln, wenn die Rahmenbedingungen klar sind. Wir
        kalkulieren den Aufwand anhand dieser zentralen Punkte:
      </RatgeberP>

      <RatgeberH3 id="faktor-volumen">1. Volumen &amp; Räumlichkeiten</RatgeberH3>
      <RatgeberP>
        Wie viel Inventar muss abtransportiert werden? Sind auch Nebenräume wie vollgestellte{" "}
        <Link href="/services/kellerraeumung" className={linkClass}>
          Keller
        </Link>
        ,{" "}
        <Link href="/services/garagenraeumung" className={linkClass}>
          Garagen
        </Link>{" "}
        oder{" "}
        <Link href="/services/dachbodenraeumung" className={linkClass}>
          Dachböden
        </Link>{" "}
        betroffen? Je mehr Flächen und Gegenstände, desto höher der logistische Aufwand.
      </RatgeberP>

      <RatgeberH3 id="faktor-logistik">2. Logistik &amp; Tragewege</RatgeberH3>
      <RatgeberP>
        In welchem Stockwerk befindet sich die Wohnung? Gibt es einen nutzbaren Aufzug oder müssen
        schwere Möbel durch ein enges Stiegenhaus getragen werden? Gerade bei{" "}
        <Link href="/services/wohnungsaufloesung" className={linkClass}>
          Wohnungsauflösungen
        </Link>{" "}
        in Wiener Altbauten kann der Trageweg den Preis spürbar beeinflussen.
      </RatgeberP>

      <RatgeberH3 id="faktor-parkplatz">3. Parkplatz &amp; Bezirk</RatgeberH3>
      <RatgeberP>
        Die Parksituation in Wien variiert stark zwischen den Bezirken. Manchmal müssen wir
        behördliche Halteverbotszonen einrichten, um Transportwege kurz zu halten. Regionale
        Besonderheiten finden Sie in unserem{" "}
        <Link href="/locations/wien" className={linkClass}>
          Standorte-Überblick Wien
        </Link>
        .
      </RatgeberP>

      <RatgeberH3 id="faktor-abfall">4. Abfallart &amp; Trennung</RatgeberH3>
      <RatgeberP>
        Normaler Hausrat ist in der Entsorgung deutlich günstiger als Bauschutt, Problemstoffe oder
        schwere Sondermaterialien. Fachgerechte Trennung erfolgt über unsere{" "}
        <Link href="/services/entsorgung-wien" className={linkClass}>
          Entsorgungsleistung
        </Link>
        .
      </RatgeberP>

      <RatgeberH2 id="richtwerte-2026">Richtwerte 2026: Eine erste preisliche Orientierung</RatgeberH2>
      <RatgeberP>
        Die folgenden Durchschnittswerte stammen aus unseren aktuellen Räumungsprojekten in Wien und
        Umgebung. Sie dienen als grobe Orientierung vor dem Abzug möglicher Wertgegenstände.
      </RatgeberP>
      <div className="my-8 overflow-x-auto rounded-xl border border-navy/10">
        <table className="w-full min-w-[480px] text-left text-sm md:text-base">
          <thead>
            <tr className="bg-navy text-white">
              <th className="px-4 py-3 font-semibold">Objektgröße / Art der Räumung</th>
              <th className="px-4 py-3 font-semibold">Durchschnittskosten (ohne Wertanrechnung)</th>
            </tr>
          </thead>
          <tbody className="text-navy/85">
            <tr className="border-t border-navy/10 bg-white">
              <td className="px-4 py-3 align-top font-medium text-navy">
                Keller, Dachboden oder{" "}
                <Link href="/services/zimmer-raeumung" className={linkClass}>
                  Einzelzimmer
                </Link>
              </td>
              <td className="px-4 py-3 align-top">250 € bis 600 €</td>
            </tr>
            <tr className="border-t border-navy/10 bg-slate-50/80">
              <td className="px-4 py-3 align-top font-medium text-navy">Kleine Wohnung (1 bis 2 Zimmer)</td>
              <td className="px-4 py-3 align-top">700 € bis 1.700 €</td>
            </tr>
            <tr className="border-t border-navy/10 bg-white">
              <td className="px-4 py-3 align-top font-medium text-navy">
                Mittlere Wohnung (3 bis 4 Zimmer inkl. Keller)
              </td>
              <td className="px-4 py-3 align-top">1.300 € bis 3.200 €</td>
            </tr>
            <tr className="border-t border-navy/10 bg-slate-50/80">
              <td className="px-4 py-3 align-top font-medium text-navy">Einfamilienhaus oder großes Gewerbe</td>
              <td className="px-4 py-3 align-top">ab 2.500 €</td>
            </tr>
          </tbody>
        </table>
      </div>

      <RatgeberCallout>
        <strong>Hinweis:</strong> Diese Richtwerte sind keine verbindlichen Angebote. Jede Liegenschaft
        wird individuell besichtigt. Für eine exakte Kalkulation vereinbaren Sie eine kostenlose
        Vor-Ort-Besichtigung.
      </RatgeberCallout>

      <RatgeberH2 id="wertanrechnung">Sparen durch Wertanrechnung (Wertausgleich)</RatgeberH2>
      <RatgeberP>
        Eine Haushaltsauflösung muss nicht immer teuer sein. Befinden sich im Objekt noch gut
        erhaltene Möbel, verwertbare Elektrogeräte, Antiquitäten oder Sammlungen?
      </RatgeberP>
      <RatgeberP>
        Wir begutachten diese Gegenstände bei der Vor-Ort-Besichtigung und schätzen ihren Marktwert.
        Dieser Betrag wird im Rahmen unserer{" "}
        <Link href="/services/moebel-wertanrechnung" className={linkClass}>
          Möbel-Wertanrechnung
        </Link>{" "}
        oder{" "}
        <Link href="/services/antiquitaeten-wertanrechnung" className={linkClass}>
          Antiquitäten-Wertanrechnung
        </Link>{" "}
        direkt als Gutschrift von den Räumungskosten abgezogen. Mehr dazu in unserem Leitfaden{" "}
        <Link href="/ratgeber/moebel-bewerten-objektrueumung-wien" className={linkClass}>
          Möbel bewerten bei der Objekträumung Wien
        </Link>
        . Über{" "}
        <Link href="/services/einkauf" className={linkClass}>
          Ankauf und Einkauf
        </Link>{" "}
        kann eine Räumung im besten Fall extrem günstig oder sogar kostenlos werden.
      </RatgeberP>

      <RatgeberH2 id="fixpreis">Unser Versprechen: Transparenter Fixpreis</RatgeberH2>
      <RatgeberP>
        Um Sie vor bösen Überraschungen und versteckten Nachzahlungen zu schützen, arbeiten wir mit
        einem einfachen und sicheren System:
      </RatgeberP>
      <RatgeberUl>
        <RatgeberLi>
          <strong>Kostenlose Besichtigung:</strong> Wir sehen uns das Objekt unverbindlich an.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Klare Kalkulation:</strong> Tragewege, Entsorgungskosten und Wertanrechnung werden
          genau berechnet.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Ihr Fixpreis-Angebot:</strong> Sie erhalten einen verbindlichen Endpreis für die
          besenreine Übergabe.
        </RatgeberLi>
      </RatgeberUl>
      <RatgeberP>
        Vergleichen Sie Angebote niemals nur nach der ersten Endsumme am Telefon. Achten Sie immer
        darauf, dass alle Leistungen (Transport, Deponiegebühren, besenreine Übergabe) schriftlich im
        Angebot fixiert sind! Einen Überblick über den gesamten Ablauf finden Sie auf unserer{" "}
        <Link href="/ueberblick" className={linkClass}>
          Überblick-Seite
        </Link>{" "}
        und bei der{" "}
        <Link href="/services/verlassenschaft" className={linkClass}>
          Verlassenschaftsräumung
        </Link>
        .
      </RatgeberP>

      <RatgeberCta
        title="Haushaltsauflösung Wien: Kostenlos besichtigen, Fixpreis erhalten"
        text="Unverbindliche Vor-Ort-Besichtigung, transparente Kalkulation und verbindliches Fixpreis-Angebot — inklusive Wertanrechnung für verwertbare Gegenstände."
        href="/#contact"
        label="Jetzt kostenloses Angebot anfragen"
      />
    </RatgeberArticleBody>
  );
}

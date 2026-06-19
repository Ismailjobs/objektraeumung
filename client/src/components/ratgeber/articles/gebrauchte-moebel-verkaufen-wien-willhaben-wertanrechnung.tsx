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

export function GebrauchteMoebelVerkaufenWienWillhabenWertanrechnungArticle() {
  return (
    <RatgeberArticleBody>
      <RatgeberLead>
        Wer eine Haushaltsauflösung, eine Verlassenschaftsräumung oder das Entrümpeln einer Wohnung in
        Wien plant, steht fast immer vor derselben Frage: Wohin mit den gut erhaltenen Möbeln, Küchen
        und Antiquitäten?
      </RatgeberLead>

      <RatgeberP>
        Zwei Wege sind in Wien besonders populär: Der private Einzelverkauf über Online-Marktplätze wie
        Willhaben oder Facebook Marketplace auf der einen Seite, und die unkomplizierte Sofort-Wertanrechnung
        durch eine professionelle Räumungsfirma auf der anderen Seite. In diesem Ratgeber vergleicht
        Objekträumung beide Methoden sachlich nach Aufwand, Kosten und Zeitfaktor, damit Sie die
        wirtschaftlichste Entscheidung für Ihr Projekt treffen können.
      </RatgeberP>

      <RatgeberCallout>
        <strong>Das Wichtigste im Überblick (TL;DR):</strong> Willhaben eignet sich ideal, wenn Sie viel
        Zeit haben und wertvolle Einzelstücke zum maximalen Preis an Privatpersonen verkaufen möchten. Wenn
        die Wohnungsübergabe jedoch schnell, stressfrei und besenrein erfolgen muss, ist die
        Sofort-Wertanrechnung im Zuge einer Entrümpelung die beste Wahl, da sie die Gesamtkosten der
        Räumung direkt reduziert.
      </RatgeberCallout>

      <RatgeberH2 id="willhaben">
        1. Möbel verkaufen über Willhaben &amp; Co.: Maximale Geduld für maximalen Erlös
      </RatgeberH2>
      <RatgeberP>
        Der digitale Flohmarkt ist in Österreich die erste Anlaufstelle für gebrauchte
        Einrichtungsgegenstände. Doch der private Verkauf von sperrigen Möbeln bringt spezifische Hürden
        mit sich.
      </RatgeberP>

      <RatgeberH3 id="vorteile-privatverkauf">Die Vorteile des Privatverkaufs:</RatgeberH3>
      <RatgeberUl>
        <RatgeberLi>
          <strong>Höheres Erlöspotenzial:</strong> Bei echten Designklassikern (z. B. Vitra, Thonet,
          Wittmann) oder Raritäten lässt sich im Privatverkauf oft ein höherer Preis erzielen als beim
          Händlerankauf.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Großer lokaler Marktplatz:</strong> Die Reichweite in Wien und Umgebung ist enorm,
          besonders für funktionstüchtige Elektrogeräte und Kleinmöbel.
        </RatgeberLi>
      </RatgeberUl>

      <RatgeberH3 id="nachteile-privatverkauf">Die versteckten Nachteile im Alltag:</RatgeberH3>
      <RatgeberUl>
        <RatgeberLi>
          <strong>Enormer Zeitaufwand:</strong> Professionelle Fotos erstellen, detaillierte Beschreibungen
          auf Deutsch verfassen und täglich auf teils unzuverlässige Anfragen („Was ist letzte Preis?“)
          antworten.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Das „No-Show“-Risiko:</strong> Es gehört in Wien leider zur täglichen Praxis, dass
          vereinbarte Besichtigungstermine von potenziellen Käufern kurzfristig abgesagt werden oder diese
          gar nicht erst erscheinen.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Logistische Probleme:</strong> Der Käufer muss den Abbau und den Transport aus der Wohnung
          (oft ohne Aufzug in den Wiener Altbauten) selbst organisieren. Dies verzögert den gesamten
          Räumungsprozess und blockiert die Wohnungsübergabe.
        </RatgeberLi>
      </RatgeberUl>

      <RatgeberH2 id="wertanrechnung">
        2. Die Sofort-Wertanrechnung: Zeitgewinn und direkte Kostensenkung
      </RatgeberH2>
      <RatgeberP>
        Die Wertanrechnung ist kein reiner Einzelankauf, sondern funktioniert ausschließlich als
        integrierter Service im Zuge einer gebuchten Entrümpelung oder Räumung. Hierbei bewerten wir den
        Wiederverkaufswert Ihrer Möbel und ziehen diesen Betrag direkt von den Fixkosten der Räumung ab.
      </RatgeberP>

      <RatgeberH3 id="vorteile-wertanrechnung">Die Vorteile unseres Modells:</RatgeberH3>
      <RatgeberUl>
        <RatgeberLi>
          <strong>Schnelle Ersteinschätzung via WhatsApp:</strong> Sie müssen keine Inserate schalten. Ein
          paar Fotos, Maße und Herstellerangaben per WhatsApp genügen uns für eine zeitnahe Wertermittlung.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Verbindlicher Fixpreis ohne Feilschen:</strong> Wir kalkulieren den Marktwert fair und
          transparent basierend auf Zustand, Marke, Alter und der aktuellen Nachfrage in Wien.
        </RatgeberLi>
        <RatgeberLi>
          <strong>All-Inklusive-Abwicklung:</strong> Demontage, schweres Schleppen durch das Treppenhaus
          und der fachgerechte Abtransport werden komplett von unserem Team übernommen – ideal bei
          kompletten Einbauküchen, massiven Schrankwänden oder kompletten Schlafzimmer-Garnituren.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Direkte Reduzierung der Räumungskosten:</strong> Hochwertiger Hausrat kann die Kosten für
          die Entrümpelung massiv senken, sodass das gesamte Projekt im besten Fall sogar kostenneutral
          durchgeführt werden kann.
        </RatgeberLi>
      </RatgeberUl>

      <RatgeberH3 id="nachteile-wertanrechnung">Die Nachteile:</RatgeberH3>
      <RatgeberP>Kein Einzelankauf ohne Räumungsauftrag möglich.</RatgeberP>

      <RatgeberH2 id="vergleich">3. Der direkte Vergleich: Willhaben vs. Wertanrechnung</RatgeberH2>
      <div className="my-8 overflow-x-auto rounded-xl border border-navy/10">
        <table className="w-full min-w-[560px] text-left text-sm md:text-base">
          <thead>
            <tr className="bg-navy text-white">
              <th className="px-4 py-3 font-semibold">Kriterium</th>
              <th className="px-4 py-3 font-semibold">Verkauf über Willhaben &amp; Co.</th>
              <th className="px-4 py-3 font-semibold">Sofort-Wertanrechnung (Objekträumung)</th>
            </tr>
          </thead>
          <tbody className="text-navy/85">
            <tr className="border-t border-navy/10 bg-white">
              <td className="px-4 py-3 align-top font-medium text-navy">Zeitaufwand</td>
              <td className="px-4 py-3 align-top">Sehr hoch (Inserate pflegen, Termine koordinieren)</td>
              <td className="px-4 py-3 align-top">Minimal (Digitale Bewertung + Abholung am Räumungstag)</td>
            </tr>
            <tr className="border-t border-navy/10 bg-slate-50/80">
              <td className="px-4 py-3 align-top font-medium text-navy">Preisfindung</td>
              <td className="px-4 py-3 align-top">Verhandlungsbasis mit hohem Risiko für Preisdrücker</td>
              <td className="px-4 py-3 align-top">Transparenter Festpreis, der direkt als Gutschrift dient</td>
            </tr>
            <tr className="border-t border-navy/10 bg-white">
              <td className="px-4 py-3 align-top font-medium text-navy">Logistik &amp; Demontage</td>
              <td className="px-4 py-3 align-top">Eigenleistung oder Organisation durch den Käufer</td>
              <td className="px-4 py-3 align-top">Komplett inklusive durch unsere geschulten Mitarbeiter</td>
            </tr>
            <tr className="border-t border-navy/10 bg-slate-50/80">
              <td className="px-4 py-3 align-top font-medium text-navy">Fahrzeugrisiko</td>
              <td className="px-4 py-3 align-top">Unzuverlässige Abholer können den Zeitplan gefährden</td>
              <td className="px-4 py-3 align-top">Garantierter, fixer Übergabetermin für die besenreine Wohnung</td>
            </tr>
          </tbody>
        </table>
      </div>

      <RatgeberH2 id="geeignete-objekte">
        4. Welche Objekte eignen sich besonders für eine Wertanrechnung?
      </RatgeberH2>
      <RatgeberP>
        Nicht jedes Möbelstück besitzt auf dem Sekundärmarkt noch einen messbaren Handelswert. Besonders
        gute Chancen auf eine hohe Gutschrift bei Ihrer Entrümpelung in Wien haben:
      </RatgeberP>
      <RatgeberUl>
        <RatgeberLi>
          <strong>Designermöbel &amp; Vintage-Klassiker:</strong> Marken wie Ligne Roset, USM Haller,
          Cassina oder gut erhaltene Mid-Century-Sideboards.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Echtholz- &amp; Stilmöbel:</strong> Massivholzmöbel, gut erhaltene Biedermeier- oder
          Barock-Stücke.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Moderne Einbauküchen &amp; Elektrogeräte:</strong> Intakte Küchenzeilen (inklusive
          funktionstüchtiger Geräte von Marken wie Bosch, Siemens, Miele).
        </RatgeberLi>
        <RatgeberLi>
          <strong>Komplette Büroeinrichtungen:</strong> Ergonomische Bürostühle, Konferenztische,
          Rollcontainer und System-Schreibtische aus Firmenauflösungen.
        </RatgeberLi>
      </RatgeberUl>

      <RatgeberH2 id="kombi-weg">
        Der strategische Kombi-Weg: Erst inserieren, dann räumen
      </RatgeberH2>
      <RatgeberP>
        Wenn Sie den optimalen Mix aus maximalem Erlös und absoluter Terminsicherheit suchen, empfiehlt
        Objekträumung folgende Vorgehensweise:
      </RatgeberP>
      <RatgeberUl>
        <RatgeberLi>
          <strong>Setzen Sie eine strikte Deadline:</strong> Inserieren Sie Ihre absoluten Top-Einzelstücke
          2 bis 3 Wochen vor dem geplanten Räumungstermin auf Willhaben.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Sicherheitsnetz nutzen:</strong> Alles, was bis eine Woche vor der Wohnungsauflösung keinen
          Käufer gefunden hat, übergeben Sie uns. Wir bewerten diese Restbestände flexibel und integrieren
          sie unkompliziert in die finale Wertanrechnung für die Entrümpelung.
        </RatgeberLi>
      </RatgeberUl>
      <RatgeberP>
        Möchten Sie wissen, wie viel Ihre Möbel noch wert sind? Senden Sie uns einfach Bildmaterial für
        eine schnelle Einschätzung. Unser Team garantiert Ihnen ein transparentes Fixpreis-Angebot
        inklusive fairem Wertausgleich für eine stressfreie und besenreine Übergabe in ganz Wien.
      </RatgeberP>

      <RatgeberP className="text-sm text-navy/70 border-t border-navy/10 pt-6 mt-8">
        Weiterführend:{" "}
        <Link href="/services/moebel-wertanrechnung" className={linkClass}>
          Möbel-Wertanrechnung
        </Link>
        {" · "}
        <Link href="/services/antiquitaeten-wertanrechnung" className={linkClass}>
          Antiquitäten-Wertanrechnung
        </Link>
        {" · "}
        <Link href="/services/einkauf" className={linkClass}>
          Ankauf
        </Link>
        {" · "}
        <Link href="/services/haushaltsaufloesung" className={linkClass}>
          Haushaltsauflösung
        </Link>
        {" · "}
        <Link href="/services/verlassenschaft" className={linkClass}>
          Verlassenschaft
        </Link>
        {" · "}
        <Link href="/ratgeber/moebel-bewerten-objektrueumung-wien" className={linkClass}>
          Möbel bewerten Leitfaden
        </Link>
        {" · "}
        <Link href="/ratgeber/haushaltsaufloesung-preise-wien-2026" className={linkClass}>
          Haushaltsauflösung Preise 2026
        </Link>
        {" · "}
        <Link href="/ratgeber/ma-48-mistplatz-wien-entsorgungs-guide-2026" className={linkClass}>
          MA 48 Entsorgungs-Guide
        </Link>
        {" · "}
        <Link href="/prices" className={linkClass}>
          Preise
        </Link>
      </RatgeberP>

      <RatgeberH2 id="faq">
        FAQ: Häufige Fragen zum Möbelverkauf bei Haushaltsauflösungen in Wien
      </RatgeberH2>

      <RatgeberH3 id="faq-einzelankauf">
        Verkaufen Sie alte Möbel auch einzeln oder holen diese ohne Räumung ab?
      </RatgeberH3>
      <RatgeberP>
        Nein, wir bieten keinen reinen Einzelankauf oder Möbeltransport an. Die Wertanrechnung erfolgt
        ausschließlich als kombinierter Service im Rahmen einer kompletten Wohnungsräumung,
        Haushaltsauflösung oder Betriebsauflösung.
      </RatgeberP>

      <RatgeberH3 id="faq-wertermittlung">Wie wird der Wert der Möbel ermittelt?</RatgeberH3>
      <RatgeberP>
        Unsere Experten bewerten den Zustand, das Material, die Marke sowie die aktuelle Nachfrage auf dem
        Gebrauchtmarkt in Wien. Dieser ermittelte Wert wird transparent in unserem schriftlichen
        Fixpreis-Angebot von den Entrümpelungskosten abgezogen.
      </RatgeberP>

      <RatgeberH3 id="faq-kein-wert">
        Was passiert mit Möbeln, die keinen finanziellen Wert mehr haben?
      </RatgeberH3>
      <RatgeberP>
        Möbel, die beschädigt, stark abgenutzt oder unverkäuflich sind, werden von uns fachgerecht
        demontiert, nach Materialien sortiert und umweltfreundlich gemäß den strengen Richtlinien der Stadt
        Wien (MA 48) auf offiziellen Deponien entsorgt.
      </RatgeberP>

      <RatgeberCta
        title="Jetzt kostenlose Besichtigung und Wertanrechnung anfordern!"
        text="Senden Sie uns Bildmaterial für eine schnelle Einschätzung. Transparentes Fixpreis-Angebot inklusive fairem Wertausgleich — besenreine Übergabe in ganz Wien."
        href="/#contact"
        label="Jetzt Wertanrechnung anfragen"
      />
    </RatgeberArticleBody>
  );
}

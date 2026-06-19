import { Link } from "@/i18n/navigation";
import {
  RatgeberArticleBody,
  RatgeberCallout,
  RatgeberCta,
  RatgeberH2,
  RatgeberH3,
  RatgeberLead,
  RatgeberLi,
  RatgeberOl,
  RatgeberP,
  RatgeberUl,
} from "@/components/ratgeber/RatgeberArticleBody";

const linkClass = "text-accent hover:underline font-medium";

export function HalteverbotEntruempelungWienMa46Article() {
  return (
    <RatgeberArticleBody>
      <RatgeberLead>
        Eine professionelle Haushaltsauflösung oder Objekträumung in Wien steht und fällt mit der
        richtigen Logistik. Wer schon einmal versucht hat, in den engen Gassen des 6., 7. oder 8.
        Bezirks einen großen Möbel-Lkw ohne reservierten Parkplatz abzustellen, kennt das Chaos:
        blockierte Straßen, hupende Nachbarn und saftige Strafzettel der Parkraumüberwachung.
      </RatgeberLead>

      <RatgeberP>
        Ein offiziell genehmigtes Halteverbot für die Entrümpelung in Wien sorgt dafür, dass der
        Abtransport in wenigen Stunden statt in mehreren Tagen erledigt ist. Objekträumung erklärt,
        wie Sie eine Halteverbotszone (HVZ) rechtssicher bei der Stadt Wien beantragen — und wie wir
        Ihnen diesen bürokratischen Aufwand komplett abnehmen können.
      </RatgeberP>

      <RatgeberCallout>
        <strong>Schnelle Antwort (TL;DR):</strong> Ein Halteverbot muss mindestens 7 bis 10 Werktage im
        Voraus online bei der MA 46 beantragt werden. Die genehmigten Halteverbotsschilder müssen
        zwingend 48 Stunden vor Beginn der Räumung vor Ort aufgestellt und fotodokumentiert werden. Die
        Kosten starten bei ca. 80 € Behördengebühr pro Tag.
      </RatgeberCallout>

      <RatgeberH2 id="warum-hvz">
        1. Warum eine Halteverbotszone (HVZ) für den Räumungstag unverzichtbar ist
      </RatgeberH2>
      <RatgeberP>
        Das Einrichten einer temporären Ladezone direkt vor dem Hauseingang ist kein Luxus, sondern oft
        die Grundvoraussetzung für eine wirtschaftliche und sichere Entrümpelung:
      </RatgeberP>
      <RatgeberUl>
        <RatgeberLi>
          <strong>Minimierung der Tragewege:</strong> Kürzere Wege für unsere Teams bedeuten eine
          deutlich schnellere Abwicklung — und senken Ihre Gesamtkosten bei der{" "}
          <Link href="/services/haushaltsaufloesung" className={linkClass}>
            Haushaltsauflösung
          </Link>
          .
        </RatgeberLi>
        <RatgeberLi>
          <strong>Sicherer Stellplatz:</strong> Ausreichend Platz für große Lkw, mobile Außenaufzüge
          (Möbellifte) oder Schuttcontainer.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Rechtssicherheit im Wiener Verkehr:</strong> Schutz vor Strafen wegen Falschparkens
          oder Behinderung des Fließverkehrs.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Abschlepprecht bei Blockaden:</strong> Nur eine behördlich genehmigte Zone gibt Ihnen
          das Recht, unberechtigt parkende Fahrzeuge am Räumungstag legal entfernen zu lassen.
        </RatgeberLi>
      </RatgeberUl>

      <RatgeberH2 id="behoerdenweg-ma-46">
        2. Der Behördenweg: Schritt-für-Schritt-Antrag bei der MA 46
      </RatgeberH2>
      <RatgeberP>
        Die Zuständigkeit für temporäre Verkehrsmaßnahmen liegt in Wien bei der Magistratsabteilung 46
        (Verkehrsorganisation und technische Verkehrsangelegenheiten). So läuft der Prozess ab:
      </RatgeberP>

      <RatgeberH3 id="schritt-1-landesstrasse">Schritt 1: Lokale Prüfung (Landesstraße vs. Privatgrund)</RatgeberH3>
      <RatgeberP>
        Prüfen Sie vorab, ob die Parkfläche im öffentlichen Raum liegt. Handelt es sich um eine
        Privatstraße oder den Innenhof einer Genossenschaft, benötigen Sie statt des Behördenantrags die
        schriftliche Einverständniserklärung des Eigentümers oder der Hausverwaltung.
      </RatgeberP>

      <RatgeberH3 id="schritt-2-online">Schritt 2: Online-Antragstellung</RatgeberH3>
      <RatgeberP>
        Reichen Sie das Online-Formular bei der MA 46 ein. Geben Sie das exakte Zeitfenster (Datum und
        Uhrzeit) sowie die benötigte Länge der Zone (meist 15 bis 20 Meter für einen Lkw mit Ladeklappe)
        an. Ein genauer Lageplan erhöht die Chancen auf eine schnelle Genehmigung.
      </RatgeberP>

      <RatgeberH3 id="schritt-3-gebuehren">Schritt 3: Entrichtung der ePayment-Gebühren</RatgeberH3>
      <RatgeberP>
        Nach der Prüfung erhalten Sie eine Gebührenvorschreibung. Bezahlen Sie diese sofort via ePayment,
        da der offizielle Bescheid erst nach Zahlungseingang ausgestellt und rechtskräftig wird.
      </RatgeberP>

      <RatgeberH3 id="schritt-4-48-stunden">Schritt 4: Rechtzeitiges Aufstellen der Verkehrszeichen</RatgeberH3>
      <RatgeberP>
        <strong>Die 48-Stunden-Regel:</strong> Die Halteverbotsschilder müssen mindestens 48 Stunden vor
        Gültigkeit exakt wie im Bescheid vorgeschrieben aufgestellt werden. Zudem muss ein
        Ankündigungszettel gut sichtbar angebracht werden, auf dem Datum, Uhrzeit und Grund der Zone
        vermerkt sind.
      </RatgeberP>

      <RatgeberH3 id="schritt-5-fotos">Schritt 5: Beweissicherung per Fotodokumentation</RatgeberH3>
      <RatgeberP>
        Fotografieren Sie die aufgestellten Schilder inklusive Straßenschilder und zum Aufstellzeitpunkt
        dort parkender Autos (samt Kennzeichen). Diese Fotos dienen als sicherer Beweis für die Polizei,
        falls am Räumungstag ein fremdes Fahrzeug abgeschleppt werden muss.
      </RatgeberP>

      <RatgeberH2 id="kosten-fristen">3. Kosten, Fristen und Haftung im Überblick</RatgeberH2>
      <RatgeberP>
        Um böse Überraschungen am Tag der Betriebsauflösung oder{" "}
        <Link href="/services/wohnungsaufloesung" className={linkClass}>
          Wohnungsräumung
        </Link>{" "}
        zu vermeiden, sollten Sie folgende Kennzahlen im Kopf haben:
      </RatgeberP>
      <div className="my-8 overflow-x-auto rounded-xl border border-navy/10">
        <table className="w-full min-w-[480px] text-left text-sm md:text-base">
          <thead>
            <tr className="bg-navy text-white">
              <th className="px-4 py-3 font-semibold">Logistik-Punkt</th>
              <th className="px-4 py-3 font-semibold">Gesetzliche Vorgabe &amp; Richtwerte in Wien</th>
            </tr>
          </thead>
          <tbody className="text-navy/85">
            <tr className="border-t border-navy/10 bg-white">
              <td className="px-4 py-3 align-top font-medium text-navy">Optimale Vorlaufzeit</td>
              <td className="px-4 py-3 align-top">
                7–10 Werktage vor dem geplanten Termin (bei Baustellen oder Großveranstaltungen im Bezirk
                eher 14 Tage).
              </td>
            </tr>
            <tr className="border-t border-navy/10 bg-slate-50/80">
              <td className="px-4 py-3 align-top font-medium text-navy">Geltungsdauer</td>
              <td className="px-4 py-3 align-top">
                In der Regel 1–2 Tage für normale Wohnungen; bei großen{" "}
                <Link href="/ratgeber/messie-wohnung-raeumung-wien-spezial" className={linkClass}>
                  Messie-Räumungen
                </Link>{" "}
                oder{" "}
                <Link href="/services/firmenaufloesung" className={linkClass}>
                  Firmenauflösungen
                </Link>{" "}
                bis zu einer Woche.
              </td>
            </tr>
            <tr className="border-t border-navy/10 bg-white">
              <td className="px-4 py-3 align-top font-medium text-navy">Behördengebühren</td>
              <td className="px-4 py-3 align-top">
                Ab ca. 80 € pro Tag zuzüglich Bundesgebühr und eventueller bezirksspezifischer Zuschläge.
                Gesamtkosten im{" "}
                <Link href="/ratgeber/haushaltsaufloesung-preise-wien-2026" className={linkClass}>
                  Preis-Leitfaden 2026
                </Link>
                .
              </td>
            </tr>
            <tr className="border-t border-navy/10 bg-slate-50/80">
              <td className="px-4 py-3 align-top font-medium text-navy">Haftung &amp; Pflichten</td>
              <td className="px-4 py-3 align-top">
                Der Antragsteller haftet persönlich für ordnungsgemäßes Aufstellen, Standsicherheit der
                Schilder und pünktliche Entfernung.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <RatgeberH2 id="ablauf-raeumungstag">4. Der reibungslose Ablauf am Räumungstag</RatgeberH2>
      <RatgeberP>Damit am Tag X alles wie am Schnürchen läuft, beachten wir gemeinsam folgende Punkte:</RatgeberP>
      <RatgeberUl>
        <RatgeberLi>
          <strong>Morgendliche Kontrolle:</strong> Unser Team kontrolliert bei der Ankunft die
          Beschilderung. Steht trotz 48-Stunden-Frist ein Auto in der Zone, kontaktieren wir umgehend
          die Behörden.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Freihalten der Verkehrswege:</strong> Gehwege und Rettungswege dürfen auch während des
          Ladens nicht komplett blockiert werden.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Abbau nach Projektabschluss:</strong> Sobald der Lkw voll und die Wohnung besenrein ist,
          müssen die Schilder unverzüglich entfernt werden — Abschluss über{" "}
          <Link href="/services/entrumpelung-wien" className={linkClass}>
            Entrümpelung Wien
          </Link>{" "}
          oder{" "}
          <Link href="/services/raeumung-wien" className={linkClass}>
            Räumung Wien
          </Link>
          .
        </RatgeberLi>
      </RatgeberUl>
      <RatgeberP>
        Bezirksspezifische Besonderheiten finden Sie in unserem{" "}
        <Link href="/locations/wien" className={linkClass}>
          Standorte-Überblick Wien
        </Link>{" "}
        und für die Region in{" "}
        <Link href="/ratgeber/entruempelung-wien-umgebung-korneuburg-tulln-schwechat" className={linkClass}>
          Entrümpelung Wien-Umgebung
        </Link>
        . Entsorgung koordinieren wir gemäß{" "}
        <Link href="/ratgeber/ma-48-mistplatz-wien-entsorgungs-guide-2026" className={linkClass}>
          MA-48-Richtlinien
        </Link>
        .
      </RatgeberP>

      <RatgeberH2 id="sorgenfrei-paket">
        Sorgenfrei-Paket von Objekträumung: Wir übernehmen die komplette Logistik!
      </RatgeberH2>
      <RatgeberP>
        Der Behördenweg, das Mieten der offiziellen Verkehrszeichen und das zweimalige Anfahren der Adresse
        in Wien (zum Aufstellen und Abholen) ist für Laien oft zeitaufwendig und stressig.
      </RatgeberP>
      <RatgeberP>
        <strong>Full-Service:</strong> Objekträumung übernimmt auf Wunsch die komplette Organisation. Wir
        wickeln den Antrag bei der MA 46 ab, stellen die Schilder über verlässliche Logistik-Partner
        fristgerecht auf und sichern die Fotodokumentation. Transparente Konditionen auf der{" "}
        <Link href="/prices" className={linkClass}>
          Preisseite
        </Link>
        .
      </RatgeberP>

      <RatgeberH2 id="faq">FAQ: Häufig gestellte Fragen zum Halteverbot in Wien</RatgeberH2>

      <RatgeberH3 id="faq-blockade">
        Was passiert, wenn jemand trotz Halteverbot in meiner Ladezone parkt?
      </RatgeberH3>
      <RatgeberP>
        Wenn die Schilder nachweislich 48 Stunden vorher korrekt aufgestellt wurden und Sie die
        Fotodokumentation besitzen, können Sie die Polizei oder die MA 48 verständigen. Das blockierende
        Fahrzeug wird dann kostenpflichtig für den Halter abgeschleppt.
      </RatgeberP>

      <RatgeberH3 id="faq-baumarkt">
        Kann ich mir einfach Schilder im Baumarkt kaufen und aufstellen?
      </RatgeberH3>
      <RatgeberP>
        Nein. Das eigenmächtige Aufstellen von Schildern im öffentlichen Raum ohne gültigen Bescheid der
        MA 46 ist in Österreich strengstens verboten, stellt eine Besitzstörung dar und wird mit hohen
        Geldstrafen geahndet.
      </RatgeberP>

      <RatgeberH3 id="faq-bezirke">
        Bietet Objekträumung die Halteverbotszone in ganz Wien an?
      </RatgeberH3>
      <RatgeberP>
        Ja, wir organisieren temporäre Halteverbote in allen Wiener Bezirken (von 1010 bis 1230) sowie in
        den angrenzenden Regionen in Niederösterreich — auch bei{" "}
        <Link href="/ratgeber/entruempelung-mietnomaden-wien-vermieter" className={linkClass}>
          Mietnomaden-Räumungen
        </Link>{" "}
        und{" "}
        <Link href="/ratgeber/zwangsraeumung-delogierung-wien-hausverwaltung" className={linkClass}>
          Delogierungen
        </Link>
        .
      </RatgeberP>

      <RatgeberCta
        title="Halteverbot & Entrümpelung Wien: Logistik aus einer Hand"
        text="Kostenloses Angebot inklusive optionaler MA-46-Organisation, fristgerechtem Schilderaufstellen und besenreiner Räumung — in allen Wiener Bezirken."
        href="/#contact"
        label="Jetzt Angebot inkl. Logistik anfragen"
      />
    </RatgeberArticleBody>
  );
}

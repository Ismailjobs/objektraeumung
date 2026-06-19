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

export function EntruempelungWienSteuerlichAbsetzenArticle() {
  return (
    <RatgeberArticleBody>
      <RatgeberLead>
        Wer eine Haushaltsauflösung, eine Kellerräumung oder eine komplette Verlassenschaftsräumung in
        Wien plant, steht neben der logistischen Herausforderung auch vor erheblichen Kosten. Eine der
        häufigsten Fragen an unser Team lautet daher: „Kann ich die Rechnung der Räumungsfirma steuerlich
        geltend machen?“
      </RatgeberLead>

      <RatgeberP>
        Die Antwort lautet: Ja, unter bestimmten Voraussetzungen können Sie erhebliche Teile der Kosten
        beim Finanzamt absetzen. Entscheidend hierfür gilt jedoch eine transparente Rechnungsstruktur und
        die exakte steuerliche Einordnung Ihres Falls.
      </RatgeberP>

      <RatgeberP>
        In diesem Leitfaden erklärt Ihnen Objekträumung, worauf Sie bereits bei der Angebotserstellung
        achten müssen, damit das Finanzamt Ihre Belege problemlos anerkennt.
      </RatgeberP>

      <RatgeberCallout>
        <strong>Wichtiger Hinweis vorab (TL;DR):</strong> Füllen Sie niemals Pauschalrechnungen ohne
        Struktur beim Finanzamt ein. Die reine Arbeitsleistung muss zwingend getrennt von den Transport-
        und Entsorgungskosten ausgewiesen sein. Barzahlungen werden vom Finanzamt in der Regel nicht
        anerkannt; zahlen Sie immer per Banküberweisung.
      </RatgeberCallout>

      <RatgeberH2 id="steuerliche-einordnung">
        1. Die steuerliche Einordnung: Welcher Fall trifft auf Sie zu?
      </RatgeberH2>
      <RatgeberP>
        Je nachdem, in welchem Kontext die Entrümpelung in Wien stattfindet, unterscheidet das
        österreichische Steuerrecht zwischen drei Hauptkategorien:
      </RatgeberP>

      <RatgeberH3 id="privatpersonen">
        A) Für Privatpersonen: Haushaltsnahe Dienstleistungen &amp; Handwerkerbonus
      </RatgeberH3>
      <RatgeberP>
        Wenn Sie Ihre privat genutzte Wohnung oder Ihr Haus entrümpeln lassen, fallen die Kosten für die
        reine Arbeitsleistung oft unter die haushaltsnahen Dienstleistungen oder qualifizieren sich für
        aktuelle steuerliche Förderungen (wie den Handwerkerbonus in Österreich).
      </RatgeberP>
      <RatgeberP>
        <strong>Der Knackpunkt:</strong> Es dürfen ausschließlich die reinen Arbeitskosten (inklusive
        Fahrtkosten des Teams) geltend gemacht werden. Materialkosten oder deponiespezifische
        Entsorgungsgebühren der MA 48 sind nicht absetzbar.
      </RatgeberP>

      <RatgeberH3 id="vermieter">B) Für Vermieter: Erhaltungsaufwand &amp; Werbungskosten</RatgeberH3>
      <RatgeberP>
        Sind Sie Immobilienbesitzer und lassen eine Wohnung nach dem Auszug eines Mieters (oder nach einem
        Mietnomaden-Fall) räumen, um das Objekt wieder neu zu vermieten?
      </RatgeberP>
      <RatgeberP>
        <strong>Der Vorteil:</strong> In diesem Fall sind die gesamten Kosten der Räumungsfirma
        (Arbeitszeit, Logistik, Entsorgung und Reinigung) als Werbungskosten oder Erhaltungsaufwand bei
        den Einkünften aus Vermietung und Verpachtung voll absetzbar.
      </RatgeberP>

      <RatgeberH3 id="erben">C) Für Erben: Nachlassverbindlichkeiten bei Verlassenschaften</RatgeberH3>
      <RatgeberP>
        Wird eine Wohnung im Zuge eines Todesfalls geräumt, handelt es sich um eine
        Verlassenschaftsräumung.
      </RatgeberP>
      <RatgeberP>
        <strong>Der Vorteil:</strong> Die Kosten für die Wohnungsauflösung können als
        Nachlassverbindlichkeiten direkt vom vererbbaren Vermögen abgezogen werden. Dies mindert den zu
        versteuernden Wert des Nachlasses beim Notar bzw. Bezirksgericht.
      </RatgeberP>

      <RatgeberH2 id="perfekte-rechnung">
        2. Die perfekte Rechnung: Diese Pflichtfelder verlangt das Finanzamt
      </RatgeberH2>
      <RatgeberP>
        Damit Ihre Steuererklärung absolut robust gegenüber Betriebsprüfungen ist, muss die Rechnung
        unserer Räumungsfirma eine glasklare Struktur aufweisen. Wir bei Objekträumung achten streng
        darauf, dass folgende Positionen sauber getrennt ausgewiesen werden:
      </RatgeberP>
      <RatgeberUl>
        <RatgeberLi>
          <strong>Reine Arbeitsleistung:</strong> (Tragearbeit, Demontage, Sortierung vor Ort) – elementar
          für Privatpersonen.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Transport &amp; Lkw-Logistik:</strong> Bereitstellung der Fahrzeuge und Anfahrtswege.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Entsorgungsgebühren:</strong> Die tatsächlichen Kosten für die Mülltrennung auf den
          Deponien der Stadt Wien.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Wertanrechnung (Gegenposition):</strong> Wenn wir verwertbare Möbel oder Antiquitäten
          ankaufen, muss dieser Betrag transparent als Gutschrift vom Bruttobetrag abgezogen werden.
        </RatgeberLi>
      </RatgeberUl>

      <RatgeberH3 id="formale-kriterien">Formale Kriterien für die Unterlagenmappe:</RatgeberH3>
      <RatgeberUl>
        <RatgeberLi>Vollständiger Name und Anschrift des Leistungserbringers sowie des Auftraggebers.</RatgeberLi>
        <RatgeberLi>Fortlaufende Rechnungsnummer und exaktes Leistungsdatum (bzw. Leistungszeitraum).</RatgeberLi>
        <RatgeberLi>
          Nachweis der bargeldlosen Zahlung (z. B. Kontoauszug der Überweisung). Vorsicht vor Barzahlungen
          ohne offiziellen Bankbeleg!
        </RatgeberLi>
      </RatgeberUl>

      <RatgeberH2 id="praxis-checkliste">
        3. Praxis-Checkliste: So bereiten Sie die Steuerseite optimal vor
      </RatgeberH2>
      <RatgeberP>
        Vermeiden Sie es, steuerrelevante Belege erst am Jahresende zusammenzusuchen. Gehen Sie stattdessen
        systematisch in 4 Phasen vor:
      </RatgeberP>
      <div className="my-8 overflow-x-auto rounded-xl border border-navy/10">
        <table className="w-full min-w-[520px] text-left text-sm md:text-base">
          <thead>
            <tr className="bg-navy text-white">
              <th className="px-4 py-3 font-semibold">Phase</th>
              <th className="px-4 py-3 font-semibold">Aufgaben &amp; To-Dos für den Vermieter / Mieter</th>
            </tr>
          </thead>
          <tbody className="text-navy/85">
            <tr className="border-t border-navy/10 bg-white">
              <td className="px-4 py-3 align-top font-medium text-navy">1. Vorab-Definition</td>
              <td className="px-4 py-3 align-top">
                Klären Sie ab, ob es sich um ein privates, geschäftliches (B2B) oder ein Erbe-Projekt
                handelt.
              </td>
            </tr>
            <tr className="border-t border-navy/10 bg-slate-50/80">
              <td className="px-4 py-3 align-top font-medium text-navy">2. Angebotserstellung</td>
              <td className="px-4 py-3 align-top">
                Verlangen Sie bereits im unverbindlichen Angebot eine transparente Aufsplittung der
                Kostenarten.
              </td>
            </tr>
            <tr className="border-t border-navy/10 bg-white">
              <td className="px-4 py-3 align-top font-medium text-navy">3. Projektabschluss</td>
              <td className="px-4 py-3 align-top">
                Lassen Sie sich nach der besenreinen Übergabe das Übergabeprotokoll schriftlich aushändigen.
              </td>
            </tr>
            <tr className="border-t border-navy/10 bg-slate-50/80">
              <td className="px-4 py-3 align-top font-medium text-navy">4. Archivierung</td>
              <td className="px-4 py-3 align-top">
                Legen Sie Angebot, Endrechnung, Zahlungsbeleg und Protokoll gemeinsam in einer Mappe ab.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <RatgeberH2 id="haeufige-fehler">4. Häufige Fehler bei der steuerlichen Einreichung</RatgeberH2>
      <RatgeberUl>
        <RatgeberLi>
          <strong>Verwendung von Pauschalrechnungen:</strong> Eine Ein-Zeilen-Rechnung mit dem Text
          „Pauschalabrechnung für Entrümpelung Wien“ wird vom Finanzamt bei Privatpersonen fast immer
          abgelehnt, da die Arbeitskosten nicht separat geprüft werden können.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Fehlende Dokumentation der Wertanrechnung:</strong> Wenn alte Möbel gegengerechnet
          wurden, ohne dass der ursprüngliche Wert sichtbar ist, wirkt die Endsumme für Prüfer
          unvollständig.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Mündliche Absprachen bei Nachträgen:</strong> Jede Zusatzleistung (wie eine nachträgliche
          Desinfektion oder Ozonbehandlung) muss schriftlich auf der Rechnung dokumentiert sein.
        </RatgeberLi>
      </RatgeberUl>

      <RatgeberH2 id="wiener-hinweis">Lokaler Hinweis für die Wiener Praxis</RatgeberH2>
      <RatgeberP>
        In Wien sind administrative Zusatzkosten wie die Genehmigung eines Halteverbots bei der MA 46 ein
        normaler Bestandteil größerer Räumungsprojekte. Ein professioneller Betrieb macht diese Kosten von
        Anfang an transparent, damit sie später sauber verbucht werden können.
      </RatgeberP>
      <RatgeberP>
        <strong>Hinweis:</strong> Dieser Beitrag dient der allgemeinen Orientierung und Strukturierung Ihrer
        Unterlagen. Er ersetzt keine individuelle Steuerberatung durch einen zertifizierten Steuerberater
        in Österreich.
      </RatgeberP>

      <RatgeberP className="text-sm text-navy/70 border-t border-navy/10 pt-6 mt-8">
        Weiterführend:{" "}
        <Link href="/services/haushaltsaufloesung" className={linkClass}>
          Haushaltsauflösung
        </Link>
        {" · "}
        <Link href="/services/verlassenschaft" className={linkClass}>
          Verlassenschaft
        </Link>
        {" · "}
        <Link href="/services/kellerraeumung" className={linkClass}>
          Kellerräumung
        </Link>
        {" · "}
        <Link href="/services/moebel-wertanrechnung" className={linkClass}>
          Möbel-Wertanrechnung
        </Link>
        {" · "}
        <Link href="/ratgeber/haushaltsaufloesung-preise-wien-2026" className={linkClass}>
          Haushaltsauflösung Preise 2026
        </Link>
        {" · "}
        <Link href="/ratgeber/gebrauchte-moebel-verkaufen-wien-willhaben-wertanrechnung" className={linkClass}>
          Willhaben vs. Wertanrechnung
        </Link>
        {" · "}
        <Link href="/ratgeber/entruempelung-mietnomaden-wien-vermieter" className={linkClass}>
          Mietnomaden-Räumung für Vermieter
        </Link>
        {" · "}
        <Link href="/ratgeber/halteverbot-entruempelung-wien-ma-46" className={linkClass}>
          Halteverbot MA 46
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
        FAQ: Häufig gestellte Fragen zur steuerlichen Absetzbarkeit
      </RatgeberH2>

      <RatgeberH3 id="faq-barzahlung">Kann ich Barzahlungen beim Finanzamt einreichen?</RatgeberH3>
      <RatgeberP>
        Nein. Das österreichische Finanzamt verlangt zur Anerkennung von haushaltsnahen Dienstleistungen
        oder Handwerkerleistungen fast immer einen elektronischen Zahlungsnachweis (Banküberweisung).
      </RatgeberP>

      <RatgeberH3 id="faq-sperrmuell">
        Kann ich die Kosten für die Entsorgung von Sperrmüll absetzen?
      </RatgeberH3>
      <RatgeberP>
        Als Privatperson können Sie in der Regel nur die reine Arbeitsleistung des Teams absetzen. Wenn Sie
        jedoch Vermieter sind, können Sie die gesamten Entsorgungs- und Deponiegebühren als Werbungskosten
        geltend machen.
      </RatgeberP>

      <RatgeberH3 id="faq-wertanrechnung">
        Was passiert, wenn auf der Rechnung die Wertanrechnung fehlt?
      </RatgeberH3>
      <RatgeberP>
        Wenn Gegenstände unprotokolliert einbehalten werden, ist die Rechnung steuerlich nicht transparent.
        Wir weisen den Wertausgleich immer als eigenen, transparenten Posten aus.
      </RatgeberP>

      <RatgeberCta
        title="Holen Sie sich jetzt ein steuerlich transparentes Fixpreis-Angebot von Objekträumung ein!"
        text="Transparente Rechnungsstruktur mit getrennten Positionen für Arbeitsleistung, Transport, Entsorgung und Wertanrechnung — besenreine Übergabe in ganz Wien."
        href="/#contact"
        label="Jetzt Fixpreis-Angebot anfragen"
      />
    </RatgeberArticleBody>
  );
}

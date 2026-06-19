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

export function BauschuttSperrmuellWienEntsorgungArticle() {
  return (
    <RatgeberArticleBody>
      <RatgeberLead>
        Bei der Planung einer umfassenden Wohnungsrenovierung, einer Haushaltsauflösung oder einer
        Kellerräumung in Wien stößt man unweigerlich auf zwei Begriffe der Abfallwirtschaft, die in der
        Praxis häufig verwechselt werden: Bauschutt und Sperrmüll.
      </RatgeberLead>

      <RatgeberP>
        Für Laien mag der Unterschied unbedeutend erscheinen, doch für die Stadt Wien (insbesondere die
        Richtlinien der MA 48) und für die Kalkulation einer professionellen Räumungsfirma spielt diese
        Taktik eine entscheidende Rolle. Wer die Abfallarten falsch sortiert, riskiert nicht nur
        empfindliche Strafen wegen illegaler Müllentsorgung, sondern treibt auch die Entsorgungsverfahren
        und Deponiekosten unnötig in die Höhe.
      </RatgeberP>

      <RatgeberP>
        In diesem Ratgeber erklärt Ihnen Objekträumung die exakten Unterschiede, die jeweiligen
        Trennregeln und wie wir Ihnen bei der fachgerechten Entsorgung in ganz Wien helfen.
      </RatgeberP>

      <RatgeberCallout>
        <strong>Auf einen Blick (TL;DR):</strong> Sperrmüll umfasst sperrige Haushaltsgegenstände, die nicht
        in die normale Restmülltonne passen (z. B. alte Möbel, Matratzen, Teppiche). Bauschutt hingegen
        besteht rein aus mineralischen Materialien, die bei Bau-, Abbruch- oder Renovierungsarbeiten
        anfallen (z. B. Beton, Ziegel, Fliesen, Putz). Beide Abfallarten müssen auf den Wiener Mistplätzen
        streng getrennt abgegeben werden.
      </RatgeberCallout>

      <RatgeberH2 id="sperrmuell">1. Was gilt als Sperrmüll? (Der klassische Hausrat)</RatgeberH2>
      <RatgeberP>
        Zum Sperrmüll gehört im Wesentlichen alles, was man bei einem Umzug aus der Wohnung mitnehmen
        könnte, aber aufgrund seiner Größe oder Sperrigkeit nicht über die normale Hausmülltonne entsorgt
        werden kann.
      </RatgeberP>
      <RatgeberP>
        <strong>Typische Beispiele für Sperrmüll:</strong>
      </RatgeberP>
      <RatgeberUl>
        <RatgeberLi>Alte Möbel (Schränke, Tische, Stühle, Betten aus Holz oder Kunststoff)</RatgeberLi>
        <RatgeberLi>Polstermöbel und Sofas</RatgeberLi>
        <RatgeberLi>Matratzen und große Teppiche</RatgeberLi>
        <RatgeberLi>Große Koffer, Sportgeräte (z. B. alte Ski, Fahrräder ohne Reifen)</RatgeberLi>
        <RatgeberLi>Große Kunststoffteile (z. B. Gartenmöbel)</RatgeberLi>
      </RatgeberUl>
      <RatgeberP>
        <strong>Hinweis zu Elektroaltgeräten:</strong> Große Haushaltsgeräte wie Waschmaschinen, Kühlschränke
        oder Fernseher zählen offiziell als Elektroaltgeräte (EAG) und müssen gesondert gesammelt werden –
        sie dürfen nicht einfach in den allgemeinen Sperrmüllcontainer geworfen werden.
      </RatgeberP>

      <RatgeberH2 id="bauschutt">2. Was gilt als Bauschutt? (Die mineralischen Abfälle)</RatgeberH2>
      <RatgeberP>
        Bauschutt umfasst ausschließlich feste, mineralische Baumaterialien, die im Zuge von Sanierungen,
        Wanddurchbrüchen oder Demontagen anfallen. Diese Stoffe sind im Gegensatz zu Sperrmüll schwer,
        nicht brennbar und können in speziellen Recyclinganlagen der Stadt Wien wiederaufbereitet werden.
      </RatgeberP>
      <RatgeberP>
        <strong>Typische Beispiele für reinen Bauschutt:</strong>
      </RatgeberP>
      <RatgeberUl>
        <RatgeberLi>Betonbrocken und Ziegelsteine</RatgeberLi>
        <RatgeberLi>Mauerwerk und Verputzreste</RatgeberLi>
        <RatgeberLi>Dachziegel und Tonscherben</RatgeberLi>
        <RatgeberLi>Fliesen, Kacheln und Sanitärkeramik (z. B. alte Waschbecken, WCs)</RatgeberLi>
        <RatgeberLi>Mörtel- und Zementreste</RatgeberLi>
      </RatgeberUl>

      <RatgeberCallout>
        <strong>⚠️ Wichtiger Hinweis: Was ist KEIN Bauschutt? (Baustellenabfälle)</strong>
        <br />
        Häufig wird Bauschutt mit allgemeinem Baustellenabfall verwechselt. Materialien wie Gipsplatten
        (Rigips), Isoliermaterialien (Styropor, Glaswolle), Fensterrahmen mit Glas oder Kabelkanäle dürfen
        niemals im reinen Bauschuttcontainer landen. Diese Stoffe gelten als Baumischabfall und unterliegen
        extrem teuren Deponiegebühren.
      </RatgeberCallout>

      <RatgeberH2 id="vergleich">3. Der direkte Vergleich: Sperrmüll vs. Bauschutt</RatgeberH2>
      <div className="my-8 overflow-x-auto rounded-xl border border-navy/10">
        <table className="w-full min-w-[560px] text-left text-sm md:text-base">
          <thead>
            <tr className="bg-navy text-white">
              <th className="px-4 py-3 font-semibold">Kriterium</th>
              <th className="px-4 py-3 font-semibold">Sperrmüll</th>
              <th className="px-4 py-3 font-semibold">Bauschutt</th>
            </tr>
          </thead>
          <tbody className="text-navy/85">
            <tr className="border-t border-navy/10 bg-white">
              <td className="px-4 py-3 align-top font-medium text-navy">Materialbasis</td>
              <td className="px-4 py-3 align-top">Überwiegend Holz, Kunststoffe, Textilien</td>
              <td className="px-4 py-3 align-top">Rein mineralische Stoffe (Stein, Beton, Keramik)</td>
            </tr>
            <tr className="border-t border-navy/10 bg-slate-50/80">
              <td className="px-4 py-3 align-top font-medium text-navy">Herkunft</td>
              <td className="px-4 py-3 align-top">Alltäglicher Hausrat, Möbel, Wohnungseinrichtung</td>
              <td className="px-4 py-3 align-top">Renovierung, Abbruch, Sanierungsarbeiten</td>
            </tr>
            <tr className="border-t border-navy/10 bg-white">
              <td className="px-4 py-3 align-top font-medium text-navy">Gewicht &amp; Logistik</td>
              <td className="px-4 py-3 align-top">Voluminös, aber relativ leicht pro Kubikmeter</td>
              <td className="px-4 py-3 align-top">Extrem schwer, erfordert hohe Traglasten beim Lkw</td>
            </tr>
            <tr className="border-t border-navy/10 bg-slate-50/80">
              <td className="px-4 py-3 align-top font-medium text-navy">Recyclingweg</td>
              <td className="px-4 py-3 align-top">Oft thermische Verwertung (Verbrennung)</td>
              <td className="px-4 py-3 align-top">Zerkleinerung und Wiederaufbereitung im Straßenbau</td>
            </tr>
            <tr className="border-t border-navy/10 bg-white">
              <td className="px-4 py-3 align-top font-medium text-navy">Kalkulation</td>
              <td className="px-4 py-3 align-top">Wird meist nach Volumen (m³) berechnet</td>
              <td className="px-4 py-3 align-top">Wird auf den Wiener Deponien nach Gewicht (Tonnen) abgerechnet</td>
            </tr>
          </tbody>
        </table>
      </div>

      <RatgeberH2 id="richtige-entsorgung">4. Richtige Entsorgung in Wien: So gehen Sie vor</RatgeberH2>
      <RatgeberP>
        Die Stadt Wien bietet über die Mistplätze der MA 48 Möglichkeiten zur Entsorgung für Privatpersonen
        an. Bei größeren Projekten stoßen diese Kapazitäten jedoch schnell an ihre Grenzen.
      </RatgeberP>
      <RatgeberUl>
        <RatgeberLi>
          <strong>Strenge Mülltrennung vor Ort:</strong> Beginnen Sie bereits in der Wohnung damit, Holzteile
          von Fliesen und Schutt sauber zu trennen. Wenn ein Container mit Bauschutt durch Holz oder Plastik
          „verunreinigt“ ist, stuft die Deponie den gesamten Container als teuren Mischabfall ein.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Gewichtsgrenzen beachten:</strong> Da Bauschutt extrem schwer ist, müssen beim Transport
          mit Lkw die gesetzlichen Gesamtgewichtsgrenzen strikt eingehalten werden. Überladene Fahrzeuge
          führen im Wiener Stadtverkehr zu massiven Geldstrafen.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Halteverbote einplanen:</strong> Da der Abtransport von schwerem Bauschutt oder großen
          Sperrmüllmengen Zeit in Anspruch nimmt, ist eine behördlich genehmigte Halteverbotszone (MA 46)
          direkt vor dem Wiener Objekt meist unerlässlich.
        </RatgeberLi>
      </RatgeberUl>

      <RatgeberH2 id="full-service">
        Full-Service-Entsorgung mit Objekträumung: Effizient, getrennt &amp; zum Fixpreis
      </RatgeberH2>
      <RatgeberP>
        Das Schleppen von schweren Betonbrocken oder sperrigen Schränken aus dem 4. Stock eines Wiener
        Altbaus ist eine enorme körperliche und logistische Belastung. Zudem ist die korrekte Deklaration
        auf den Deponien für Laien oft unübersichtlich.
      </RatgeberP>
      <RatgeberP>
        <strong>Verlassen Sie sich auf unsere Kompetenz:</strong> Objekträumung übernimmt die komplette
        Arbeit für Sie. Wir trennen den Abfall direkt vor Ort fachgerecht nach den strengen Richtlinien der
        MA 48. Dank unserer transparenten Fixpreis-Garantie wissen Sie bereits vor dem ersten Handschlag
        exakt, wie hoch die Entsorgungs- und Transportkosten ausfallen – ohne versteckte Nachzahlungen oder
        böse Überraschungen bei der Gewichtsabrechnung.
      </RatgeberP>
      <RatgeberP>
        Möchten Sie Ihr Objekt stressfrei besenrein übergeben? Kontaktieren Sie uns für eine kostenlose und
        unverbindliche Erstbesichtigung in allen Wiener Bezirken sowie in Niederösterreich.
      </RatgeberP>

      <RatgeberP className="text-sm text-navy/70 border-t border-navy/10 pt-6 mt-8">
        Weiterführend:{" "}
        <Link href="/ratgeber/ma-48-mistplatz-wien-entsorgungs-guide-2026" className={linkClass}>
          MA 48 Entsorgungs-Guide
        </Link>
        {" · "}
        <Link href="/ratgeber/halteverbot-entruempelung-wien-ma-46" className={linkClass}>
          Halteverbot MA 46
        </Link>
        {" · "}
        <Link href="/ratgeber/raeumung-vor-sanierung-altbau-wien-2026" className={linkClass}>
          Räumung vor Sanierung
        </Link>
        {" · "}
        <Link href="/services/entsorgung-wien" className={linkClass}>
          Entsorgung Wien
        </Link>
        {" · "}
        <Link href="/services/kellerraeumung" className={linkClass}>
          Kellerräumung
        </Link>
        {" · "}
        <Link href="/services/haushaltsaufloesung" className={linkClass}>
          Haushaltsauflösung
        </Link>
        {" · "}
        <Link href="/ratgeber/gebrauchte-moebel-verkaufen-wien-willhaben-wertanrechnung" className={linkClass}>
          Wertanrechnung
        </Link>
        {" · "}
        <Link href="/prices" className={linkClass}>
          Preise
        </Link>
      </RatgeberP>

      <RatgeberH2 id="faq">FAQ: Häufige Fragen zu Bauschutt und Sperrmüll in Wien</RatgeberH2>

      <RatgeberH3 id="faq-rigips">Darf ich Rigipsplatten (Gipskarton) zum Bauschutt werfen?</RatgeberH3>
      <RatgeberP>
        Nein! Rigipsplatten enthalten Gips und verunreinigen den mineralischen Bauschutt, was das Recycling
        unmöglich macht. Rigips muss auf den Wiener Mistplätzen zwingend in den dafür vorgesehenen
        separaten Containern für Baustellenabfälle entsorgt werden.
      </RatgeberP>

      <RatgeberH3 id="faq-einbaukueche">Wie werden alte Einbauküchen abgerechnet?</RatgeberH3>
      <RatgeberP>
        Eine Einbauküche besteht meist aus einem Mix: Die Holzkästen und die Arbeitsplatte zählen als
        Sperrmüll. Die eingebauten Geräte (Herd, Geschirrspüler) gelten als Elektroaltgeräte. Wenn wir Ihre
        Küche demontieren, trennen wir diese Stoffe sauber, um Ihre Entsorgungskosten so gering wie möglich
        zu halten.
      </RatgeberP>

      <RatgeberH3 id="faq-wertanrechnung">
        Bieten Sie auch eine Wertanrechnung für Sperrmüll an?
      </RatgeberH3>
      <RatgeberP>
        Sperrmüll, der beschädigt oder unbrauchbar ist, besitzt keinen Marktwert mehr. Sollten sich unter
        den alten Möbeln jedoch gut erhaltene Designklassiker, Antiquitäten oder intakte moderne Möbelstücke
        befinden, bieten wir Ihnen gerne eine direkte Wertanrechnung an, die die Gesamtkosten Ihrer
        Entrümpelung reduziert.
      </RatgeberP>

      <RatgeberCta
        title="Jetzt kostenloses & transparentes Angebot für Ihre Entrümpelung anfordern!"
        text="Fachgerechte Trennung von Bauschutt und Sperrmüll nach MA-48-Richtlinien — Fixpreis ohne versteckte Nachzahlungen, besenreine Übergabe in ganz Wien."
        href="/#contact"
        label="Jetzt Angebot anfragen"
      />
    </RatgeberArticleBody>
  );
}

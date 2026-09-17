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

export function KellerentruempelungGemeindebauWienArticle() {
  return (
    <RatgeberArticleBody>
      <RatgeberLead>
        Ein nummeriertes Kellerabteil im Wiener Gemeindebau ist oft jahrzehntelang unangetastet geblieben —
        bis der Umzug, die Wohnungsübergabe an Wiener Wohnen oder die Frist der Hausverwaltung plötzlich
        alles verändert. Was zunächst wie ein kleiner Nebenraum wirkt, entpuppt sich schnell als
        logistische Herausforderung mit klaren Regeln und harten Deadlines.
      </RatgeberLead>

      <RatgeberP>
        Ob Sie in einem typischen Gemeindebau in{" "}
        <Link href="/locations/wien-1100" className={linkClass}>
          1100 Favoriten
        </Link>{" "}
        oder{" "}
        <Link href="/locations/wien-1200" className={linkClass}>
          1200 Brigittenau
        </Link>{" "}
        wohnen, ob Sie als Mieter ausziehen oder als Erbengemeinschaft eine{" "}
        <Link href="/services/wohnungsaufloesung" className={linkClass}>
          Wohnungsauflösung
        </Link>{" "}
        durchführen: Die Kellerentrümpelung im Wiener Sozialwohnungsbestand folgt anderen Spielregeln als
        eine private{" "}
        <Link href="/services/haushaltsaufloesung" className={linkClass}>
          Haushaltsauflösung
        </Link>
        . Objekträumung Wien kennt diese Abläufe aus der täglichen Praxis — von der Besichtigung im feuchten
        Kellergang bis zur besenreinen Übergabe vor dem Abgabetermin der Hausverwaltung.
      </RatgeberP>

      <RatgeberCallout>
        <strong>Das Wichtigste im Überblick (TL;DR):</strong> Im Gemeindebau gehört das Kellerabteil
        vertraglich zur Wohnung und muss bei Auszug leer und besenrein übergeben werden. Die
        Hausverwaltung oder Wiener Wohnen setzen dafür meist eine feste Frist — verspätete Übergabe kann
        Kosten nach sich ziehen. Sperrmüll entsorgen Sie in Wien über die{" "}
        <Link href="/ratgeber/ma-48-mistplatz-wien-entsorgungs-guide-2026" className={linkClass}>
          MA 48
        </Link>
        ; brauchbare Gegenstände können Sie an den{" "}
        <strong>48er-Tandler</strong> abgeben. Für den kompletten Abtransport, die Demontage und die
        fristgerechte Übergabe bietet Objekträumung Wien ein verbindliches Fixpreis-Angebot inklusive
        Wertanrechnung.
      </RatgeberCallout>

      <RatgeberH2 id="gemeindebau-wiener-wohnen">
        Kellerabteile im Gemeindebau: Was Wiener Wohnen und die Hausverwaltung erwarten
      </RatgeberH2>

      <RatgeberP>
        Rund ein Viertel aller Wiener Haushalte lebt in Gemeindewohnungen — der Großteil verwaltet durch{" "}
        <strong>Wiener Wohnen</strong>. In diesen Wohnanlagen ist das Kellerabteil kein optionaler
        Stauraum, sondern ein fester Bestandteil des Mietvertrags. Jede Wohnung ist einem nummerierten
        Abteil zugeordnet; die Nummer steht im Mietvertrag, am Kellergang oder direkt am Gitter bzw. an
        der Abteiltür.
      </RatgeberP>

      <RatgeberP>
        Bei Auszug, Wohnungstausch oder Tod des Hauptmieters prüft die Hausverwaltung nicht nur die
        Wohnung selbst, sondern auch das zugehörige Kellerabteil. Liegen dort noch alte Möbel, Reifen,
        Farbeimer, Fahrräder oder umgestürzte Kartons, gilt die Übergabe als unvollständig. In der Praxis
        bedeutet das: Nachforderungen, Verzögerungen bei der Kaution oder — im schlimmsten Fall —
        zusätzliche Räumungskosten, die dem ausziehenden Mieter oder den Erben in Rechnung gestellt werden.
      </RatgeberP>

      <RatgeberH3 id="nummerierte-abteile">Nummerierte Kellerabteile: Zuordnung und Zugang</RatgeberH3>

      <RatgeberP>
        Typisch für den Wiener Gemeindebau sind lange, oft feuchte Kellergänge mit einzelnen, nummerierten
        Abteilen. Manche sind offene Gitterzellen, andere verschließbare Räume mit Holz- oder Metalltüren.
        Der Zugang erfolgt über einen zentralen Kellereingang; in älteren Anlagen fehlt ein Aufzug
        vollständig, sodass jeder Gegenstand über Treppen und enge Gänge transportiert werden muss.
      </RatgeberP>

      <RatgeberUl>
        <RatgeberLi>
          <strong>Vertragliche Zuordnung:</strong> Nur das Ihnen zugewiesene Abteil darf genutzt werden.
          Fremde Abteile oder Gemeinschaftsbereiche dürfen nicht mit Ihrem Hausrat beladen werden.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Schlüssel und Zugang:</strong> Klären Sie rechtzeitig, ob ein separater Kellerschlüssel
          existiert oder ob der Hauptschlüssel den Zugang öffnet. Fehlende Schlüssel verzögern die
          Besichtigung und Räumung.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Feuchtigkeit und Schimmel:</strong> Viele Kellerabteile in älteren Gemeindebauten sind
          feucht. Pappen und Textilien verderben schneller — das erhöht das Entsorgungsvolumen und
          erschwert das Sortieren.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Enge Tragewege:</strong> Breite Schränke, alte Waschmaschinen oder Reifensätze passen
          oft nicht durch die Kellertür. Professionelle Demontage spart Zeit und verhindert Schäden an
          Türrahmen und Wänden.
        </RatgeberLi>
      </RatgeberUl>

      <RatgeberH2 id="favoriten-brigittenau">
        1100 Favoriten und 1200 Brigittenau: Typische Gemeindebau-Situationen
      </RatgeberH2>

      <RatgeberP>
        In{" "}
        <Link href="/locations/wien-1100" className={linkClass}>
          1100 Wien-Favoriten
        </Link>{" "}
        und{" "}
        <Link href="/locations/wien-1200" className={linkClass}>
          1200 Wien-Brigittenau
        </Link>{" "}
        finden sich einige der größten und ältesten Gemeindebau-Siedlungen der Stadt. Die Siedlung{" "}
        <strong>Per-Albin-Hansson-Siedlung</strong> in Favoriten oder die weitläufigen Wohnhausanlagen
        entlang der Gürteltrasse in Brigittenau sind prägende Beispiele: mehrstöckige Blocks, innere Höfe,
        Tiefgaragen und lange Kellergänge mit Dutzenden nummerierter Abteile.
      </RatgeberP>

      <RatgeberH3 id="favoriten-1100">1100 Favoriten: Große Anlagen, enge Logistik</RatgeberH3>

      <RatgeberP>
        In Favoriten sind Kellerabteile oft seit den 1950er- und 1960er-Jahren befüllt. Familien lagern
        hier Kinderwagen, Werkzeuge, Weihnachtsdekoration, alte Möbel aus der Wohnung und manchmal auch
        ganze Haushaltsreste aus früheren Generationen. Die Zufahrt für Transporter ist in vielen
        Anlagen nur über Innenhöfe oder Seitenstraßen möglich —{" "}
        <Link href="/ratgeber/halteverbot-entruempelung-wien-ma-46" className={linkClass}>
          Halteverbotszonen
        </Link>{" "}
        bei der MA 46 sind bei größeren Räumungen oft unverzichtbar.
      </RatgeberP>

      <RatgeberH3 id="brigittenau-1200">1200 Brigittenau: Lange Kellergänge und hoher Durchsatz</RatgeberH3>

      <RatgeberP>
        Brigittenau zeichnet sich durch dicht bebaute Gemeindebau-Cluster aus, in denen gleichzeitig
        mehrere Wohnungsübergaben anstehen können — besonders zum Quartalsende oder nach
        Wohnungszuteilungen durch Wiener Wohnen. Hausverwaltungen in diesem Bezirk arbeiten oft mit
        straffen Übergabeterminen: Wer das Kellerabteil nicht rechtzeitig leert, blockiert die
        Weitervergabe der Wohnung.
      </RatgeberP>

      <RatgeberP>
        Objekträumung Wien ist in beiden Bezirken regelmäßig im Einsatz. Wir kennen die typischen
        Zugangswege, die Parksituation und die Erwartungen der lokalen Hausverwaltungen. Eine{" "}
        <Link href="/services/kellerraeumung" className={linkClass}>
          professionelle Kellerräumung
        </Link>{" "}
        vermeidet, dass Sie am Übergabetag noch Kartons durch feuchte Gänge schleppen müssen.
      </RatgeberP>

      <RatgeberH2 id="hausverwaltung-deadline">
        Hausverwaltung, Deadline und besenreine Übergabe
      </RatgeberH2>

      <RatgeberP>
        Die Frist für die Kellerübergabe wird in der Regel von der Hausverwaltung, dem Abwickler oder
        direkt von Wiener Wohnen kommuniziert — schriftlich per E-Mail, Aushang oder Übergabeprotokoll.
        Typische Formulierungen lauten: „Kellerabteil bis zum [Datum] leer und besenrein zu übergeben" oder
        „Gemeinschaftsflächen und zugeordnetes Abteil dürfen keine Gegenstände des ausziehenden Mieters
        enthalten".
      </RatgeberP>

      <RatgeberP>
        <strong>Besenrein</strong> bedeutet in der Praxis: keine Gegenstände, kein Müll, kein lose
        liegender Schmutz — der Boden ist gefegt und der Raum kann sofort vom nächsten Mieter oder von
        der Verwaltung übernommen werden. Staub, Spinnweben und leichte Verschmutzungen sollten
        ebenfalls entfernt sein. Ein einfaches Fegen reicht; Malerarbeiten oder Grundreinigung sind
        normalerweise nicht gefordert, es sei denn, die Hausverwaltung hat dies ausdrücklich verlangt.
      </RatgeberP>

      <RatgeberCallout>
        <strong>Wichtig:</strong> Planen Sie die Kellerentrümpelung mindestens eine Woche vor dem
        offiziellen Übergabetermin ein. So bleibt Puffer für Sondermüll, fehlende Schlüssel oder
        kurzfristige Terminverschiebungen. Objekträumung Wien bietet auf Wunsch ein Fotoprotokoll der
        geräumten Abteile — ideal als Nachweis gegenüber der Hausverwaltung.
      </RatgeberCallout>

      <RatgeberH3 id="kaution-uebergabe">Kaution, Übergabeprotokoll und typische Streitpunkte</RatgeberH3>

      <RatgeberP>
        Häufige Konflikte entstehen, wenn Mieter glauben, das Kellerabteil sei „nicht so wichtig" wie die
        Wohnung selbst. Die Verwaltung sieht das anders: Ein voller Keller ist ein Mangel an der
        Gesamtübergabe. Dokumentieren Sie den Zustand vor und nach der Räumung mit Fotos. Bei einer{" "}
        <Link href="/services/wohnungsaufloesung" className={linkClass}>
          Wohnungsauflösung
        </Link>{" "}
        im Gemeindebau empfiehlt sich, Wohnung und Keller am selben Tag oder in unmittelbarer Folge
        abzuschließen — getrennte Termine erhöhen das Risiko von Missverständnissen.
      </RatgeberP>

      <RatgeberH2 id="ma-48-48er-tandler">
        MA 48, Mistplatz und 48er-Tandler: Entsorgung in Wien richtig planen
      </RatgeberH2>

      <RatgeberP>
        Die <strong>MA 48</strong> (Magistratsabteilung 48 — Wiener Kommunalbetriebe) ist für die
        Abfallwirtschaft in Wien zuständig. Für Mieter im Gemeindebau gelten dieselben Regeln wie für
        alle Wiener: Sperrmüll wird getrennt, Problemstoffe gesondert und brauchbare Gegenstände können
        oft sinnvoller weitergegeben als weggeworfen werden.
      </RatgeberP>

      <RatgeberUl>
        <RatgeberLi>
          <strong>Mistplatz (Eigenanlieferung):</strong> Sie transportieren sortierten Sperrmüll selbst
          zum nächsten Mistplatz — z. B. Simmering, Floridsdorf oder Hernals. Die MA 48 übernimmt
          keinen Trageservice aus dem Keller. Für Mieter ohne Auto und bei großen Mengen ist das
          praktisch kaum machbar.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Sperrmüll-Sammlung (Abholung):</strong> Die MA 48 holt Sperrmüll nach Online-Anmeldung
          von der Gehsteigkante ab — nicht aus dem Kellergang. Alles muss vorher nach oben transportiert
          und am Straßenrand bereitgestellt werden.
        </RatgeberLi>
        <RatgeberLi>
          <strong>48er-Tandler:</strong> Die Second-Hand-Shops der MA 48 (48er-Tandler) nehmen gut
          erhaltene Möbel, Geschirr, Bücher und Haushaltsgeräte an. Das ist die offizielle Alternative
          zum Wegwerfen — allerdings gelten Annahmebedingungen, Öffnungszeiten und oft Warteschlangen.
          Nicht alles wird angenommen.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Problemstoffe:</strong> Farben, Lacke, Chemikalien, Altöl und bestimmte Elektrogeräte
          gehören nicht in den Sperrmüll. Details finden Sie in unserem{" "}
          <Link href="/ratgeber/bauschutt-sperrmuell-wien-entsorgung" className={linkClass}>
            Guide zu Bauschutt und Sperrmüll
          </Link>
          .
        </RatgeberLi>
      </RatgeberUl>

      <RatgeberP>
        Wer Keller, Wohnung und Sondermüll in einem Zug erledigen möchte, spart sich mehrere Fahrten zum
        Mistplatz und das mühsame Schleppen durchs Stiegenhaus. Objekträumung Wien trennt den Abfall
        fachgerecht, entsorgt über zertifizierte Kanäle und rechnet verwertbare Stücke über unsere{" "}
        <Link href="/services/moebel-wertanrechnung" className={linkClass}>
          Möbel-Wertanrechnung
        </Link>{" "}
        direkt gegen die Räumungskosten — oft günstiger als Eigenentsorgung plus Zeitaufwand.
      </RatgeberP>

      <RatgeberH2 id="checkliste">
        Checkliste: Kellerabteil im Gemeindebau fristgerecht entrümpeln
      </RatgeberH2>

      <RatgeberOl>
        <RatgeberLi>
          <strong>Mietvertrag und Abteilnummer prüfen:</strong> Welches Kellerabteil ist Ihnen
          zugeordnet? Steht die Nummer am Gitter und stimmt sie mit dem Vertrag überein?
        </RatgeberLi>
        <RatgeberLi>
          <strong>Deadline der Hausverwaltung notieren:</strong> Bis wann muss das Abteil leer sein?
          Gibt es einen gemeinsamen Übergabetermin für Wohnung und Keller?
        </RatgeberLi>
        <RatgeberLi>
          <strong>Bestandsaufnahme per Foto:</strong> Dokumentieren Sie den Ausgangszustand — besonders
          bei Feuchtigkeitsschäden oder fremden Gegenständen, die nicht Ihnen gehören.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Sortieren in drei Kategorien:</strong> Mitnehmen, verkaufen/weitergeben, entsorgen.
          Wertvolles frühzeitig herausnehmen.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Tragewege und Zufahrt klären:</strong> Wo kann ein Transporter parken? Braucht es ein
          Halteverbot? Wie breit sind Kellertür und Gang?
        </RatgeberLi>
        <RatgeberLi>
          <strong>Problemstoffe separieren:</strong> Farbeimer, Spraydosen, Batterien und defekte
          Elektrogeräte gesondert lagern — nicht in den normalen Sperrmüll mischen.
        </RatgeberLi>
        <RatgeberLi>
          <strong>48er-Tandler oder Wertanrechnung prüfen:</strong> Brauchbare Möbel nicht vorschnell
          wegwerfen. Alternativ: Wertanrechnung durch Objekträumung Wien nutzen.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Räumungstermin einplanen:</strong> Mindestens 2–3 Tage vor der Hausverwaltungs-Frist
          durchführen — nicht am letzten Tag.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Besenreine Endreinigung:</strong> Boden fegen, Spinnweben entfernen, leere Regale und
          Haken prüfen. Keine persönlichen Gegenstände zurücklassen.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Übergabe dokumentieren:</strong> Abschlussfotos aufbewahren und auf Wunsch der
          Verwaltung das Protokoll unterschreiben lassen.
        </RatgeberLi>
      </RatgeberOl>

      <RatgeberH2 id="professionelle-hilfe">
        Professionelle Kellerentrümpelung: Fixpreis statt Stress vor der Deadline
      </RatgeberH2>

      <RatgeberP>
        Eine Kellerentrümpelung im Gemeindebau klingt nach wenig Aufwand — bis man vor einem vollgestellten
        Abteil steht, die Kellertreppe hinunter muss und die MA 48 keine Abholung aus dem Keller anbietet.
        Dazu kommen Zeitdruck, körperliche Belastung und die Sorge, etwas Wertvolles zu übersehen oder
        die Frist der Hausverwaltung zu verpassen.
      </RatgeberP>

      <RatgeberP>
        Objekträumung Wien bietet für Kellerabteile in allen Wiener Gemeindebau-Bezirken — einschließlich
        1100 Favoriten und 1200 Brigittenau — einen strukturierten Ablauf:
      </RatgeberP>

      <RatgeberUl>
        <RatgeberLi>
          <strong>Kostenlose Besichtigung</strong> vor Ort oder per WhatsApp-Fotos
        </RatgeberLi>
        <RatgeberLi>
          <strong>Verbindliches Fixpreis-Angebot</strong> ohne versteckte Nachforderungen
        </RatgeberLi>
        <RatgeberLi>
          <strong>Demontage, Tragewege, Entsorgung</strong> und besenreine Übergabe aus einer Hand
        </RatgeberLi>
        <RatgeberLi>
          <strong>Wertanrechnung</strong> für gut erhaltene Möbel, Werkzeuge und Sammlungen
        </RatgeberLi>
        <RatgeberLi>
          <strong>MA-48-konforme Entsorgung</strong> inklusive Problemstoffe und Elektroschrott
        </RatgeberLi>
        <RatgeberLi>
          <strong>Fotoprotokoll</strong> für die Hausverwaltung auf Wunsch
        </RatgeberLi>
      </RatgeberUl>

      <RatgeberP>
        Bei größeren{" "}
        <Link href="/services/haushaltsaufloesung" className={linkClass}>
          Haushaltsauflösungen
        </Link>{" "}
        kombinieren wir Wohnung, Keller und optional{" "}
        <Link href="/services/dachbodenraeumung" className={linkClass}>
          Dachboden
        </Link>{" "}
        in einem Termin. Das spart Zeit und garantiert, dass alle vertraglich zugeordneten Räume
        fristgerecht übergeben werden.
      </RatgeberP>

      <RatgeberH2 id="kosten-richtwerte">Richtwerte für Kellerentrümpelungen im Gemeindebau</RatgeberH2>

      <RatgeberP>
        Die Kosten hängen vom Volumen, der Zugänglichkeit und dem Anteil an Sondermüll ab. Zur
        Orientierung — verbindliche Preise erstellen wir nach Besichtigung:
      </RatgeberP>

      <RatgeberUl>
        <RatgeberLi>
          <strong>Kleines Kellerabteil (bis ca. 5 m², wenig Inhalt):</strong> ab ca. 150 € bis 280 €
        </RatgeberLi>
        <RatgeberLi>
          <strong>Mittleres Abteil (5–12 m², Möbel und Kartons):</strong> ca. 280 € bis 550 €
        </RatgeberLi>
        <RatgeberLi>
          <strong>Großes oder stark befülltes Abteil (12 m²+, Reifen, Regale, Altmetall):</strong> ab
          ca. 550 € — individuelle Kalkulation
        </RatgeberLi>
      </RatgeberUl>

      <RatgeberP>
        Durch{" "}
        <Link href="/ratgeber/gebrauchte-moebel-verkaufen-wien-willhaben-wertanrechnung" className={linkClass}>
          Wertanrechnung
        </Link>{" "}
        kann der Endpreis deutlich sinken. Transparente{" "}
        <Link href="/prices" className={linkClass}>
          Preisübersicht
        </Link>{" "}
        und{" "}
        <Link href="/ratgeber/haushaltsaufloesung-preise-wien-2026" className={linkClass}>
          Richtwerte 2026
        </Link>{" "}
        helfen bei der Planung.
      </RatgeberP>

      <RatgeberP className="text-sm text-navy/70 border-t border-navy/10 pt-6 mt-8">
        Weiterführend:{" "}
        <Link href="/services/kellerraeumung" className={linkClass}>
          Kellerräumung
        </Link>
        {" · "}
        <Link href="/services/wohnungsaufloesung" className={linkClass}>
          Wohnungsauflösung
        </Link>
        {" · "}
        <Link href="/services/haushaltsaufloesung" className={linkClass}>
          Haushaltsauflösung
        </Link>
        {" · "}
        <Link href="/services/entrumpelung-wien" className={linkClass}>
          Entrümpelung Wien
        </Link>
        {" · "}
        <Link href="/services/raeumung-wien" className={linkClass}>
          Räumung Wien
        </Link>
        {" · "}
        <Link href="/services/entsorgung-wien" className={linkClass}>
          Entsorgung Wien
        </Link>
        {" · "}
        <Link href="/services/dachbodenraeumung" className={linkClass}>
          Dachbodenräumung
        </Link>
        {" · "}
        <Link href="/locations/wien-1100" className={linkClass}>
          1100 Favoriten
        </Link>
        {" · "}
        <Link href="/locations/wien-1200" className={linkClass}>
          1200 Brigittenau
        </Link>
        {" · "}
        <Link href="/ratgeber/dachbodenraeumung-wien-ma-48-checkliste" className={linkClass}>
          Dachboden-Checkliste
        </Link>
        {" · "}
        <Link href="/ratgeber/entruempelung-wien-5-fatale-fehler" className={linkClass}>
          5 fatale Fehler
        </Link>
        {" · "}
        <Link href="/ratgeber/zimmer-raeumung-wien-wg-uebergabe" className={linkClass}>
          WG-Zimmer Räumung
        </Link>
        {" · "}
        <Link href="/ratgeber/ma-48-mistplatz-wien-entsorgungs-guide-2026" className={linkClass}>
          MA 48 Entsorgungs-Guide
        </Link>
        {" · "}
        <Link href="/ratgeber/bauschutt-sperrmuell-wien-entsorgung" className={linkClass}>
          Bauschutt vs. Sperrmüll
        </Link>
        {" · "}
        <Link href="/ratgeber/halteverbot-entruempelung-wien-ma-46" className={linkClass}>
          Halteverbot MA 46
        </Link>
        {" · "}
        <Link href="/services/moebel-wertanrechnung" className={linkClass}>
          Möbel-Wertanrechnung
        </Link>
        {" · "}
        <Link href="/prices" className={linkClass}>
          Preise
        </Link>
      </RatgeberP>

      <RatgeberH2 id="faq">FAQ: Kellerentrümpelung Gemeindebau Wien</RatgeberH2>

      <RatgeberH3 id="faq-pflicht">
        Muss ich das Kellerabteil wirklich leerräumen, wenn ich aus dem Gemeindebau ausziehe?
      </RatgeberH3>
      <RatgeberP>
        Ja. Das Kellerabteil ist vertraglich Teil Ihrer Wohnung. Bei Auszug erwarten Wiener Wohnen bzw.
        die Hausverwaltung, dass das zugeordnete Abteil leer und besenrein übergeben wird. Bleiben
        Gegenstände zurück, kann das die Kaution belasten oder zu Nachforderungen führen.
      </RatgeberP>

      <RatgeberH3 id="faq-deadline">
        Was passiert, wenn ich die Deadline der Hausverwaltung verpasse?
      </RatgeberH3>
      <RatgeberP>
        In der Praxis wird die Übergabe als mangelhaft gewertet. Die Verwaltung kann eine Nachfrist
        setzen, die Räumung auf Ihre Kosten beauftragen oder die Kaution zurückhalten. Je früher Sie
        planen, desto geringer das Risiko — Express-Termine sind bei Objekträumung Wien oft innerhalb
        weniger Tage möglich.
      </RatgeberP>

      <RatgeberH3 id="faq-ma-48-keller">
        Holt die MA 48 Sperrmüll direkt aus dem Kellerabteil ab?
      </RatgeberH3>
      <RatgeberP>
        Nein. Die Sperrmüll-Sammlung erfolgt von der Gehsteigkante nach vorheriger Anmeldung. Sie müssen
        alles selbst aus dem Keller nach oben transportieren. Alternativ beauftragen Sie eine
        Räumungsfirma, die Transport und Entsorgung übernimmt.
      </RatgeberP>

      <RatgeberH3 id="faq-48er-tandler">
        Lohnt sich der 48er-Tandler vor der Kellerentrümpelung?
      </RatgeberH3>
      <RatgeberP>
        Für gut erhaltene, saubere Möbel und Haushaltsgegenstände ja — Sie sparen Entsorgungskosten und
        tun etwas für die Umwelt. Allerdings gelten strenge Annahmekriterien und begrenzte Kapazitäten.
        Bei großen Mengen oder sperrigen Stücken ist die Wertanrechnung durch Objekträumung Wien oft
        praktischer: Wir bewerten vor Ort und rechnen den Wert direkt gegen Ihr Fixpreis-Angebot.
      </RatgeberP>

      <RatgeberH3 id="faq-fremdes-abteil">
        Was tun, wenn im Kellerabteil Gegenstände vom Vormieter liegen?
      </RatgeberH3>
      <RatgeberP>
        Dokumentieren Sie den Befund sofort mit Fotos und melden Sie ihn der Hausverwaltung. Räumen Sie
        fremdes Eigentum nicht einfach weg, ohne eine schriftliche Freigabe — das kann rechtliche
        Konsequenzen haben. Die Verwaltung klärt in der Regel die Zuordnung und gibt Anweisung zur
        Entsorgung.
      </RatgeberP>

      <RatgeberH3 id="faq-favoriten-brigittenau">
        Arbeiten Sie regelmäßig in 1100 Favoriten und 1200 Brigittenau?
      </RatgeberH3>
      <RatgeberP>
        Ja. Beide Bezirke gehören zu unseren häufigsten Einsatzgebieten im Gemeindebau. Wir kennen die
        typischen Wohnhausanlagen, Kellergänge und Anforderungen der lokalen Hausverwaltungen — von der
        Per-Albin-Hansson-Siedlung bis zu den Gürtelnahen Blocks in Brigittenau.
      </RatgeberP>

      <RatgeberH3 id="faq-besenrein">
        Was genau bedeutet „besenrein" bei der Kellerübergabe?
      </RatgeberH3>
      <RatgeberP>
        Das Abteil ist vollständig leer, der Boden gefegt, keine Müllreste oder losen Gegenstände
        vorhanden. Schimmel an Wänden oder kaputte Türen sind separate Instandhaltungsthemen — für die
        Räumung zählt: kein Hausrat des ausziehenden Mieters bleibt zurück.
      </RatgeberP>

      <RatgeberP>
        Sie stehen vor der Kellerentrümpelung im Wiener Gemeindebau und die Deadline der Hausverwaltung
        rückt näher? Objekträumung Wien erstellt Ihnen nach kostenloser Besichtigung ein verbindliches
        Fixpreis-Angebot — inklusive MA-48-konformer Entsorgung, Wertanrechnung und besenreiner
        Übergabe. Senden Sie uns Fotos Ihres Kellerabteils per WhatsApp für eine schnelle
        Ersteinschätzung.
      </RatgeberP>

      <RatgeberCta
        title="Kellerabteil im Gemeindebau fristgerecht entrümpeln — Fixpreis anfragen!"
        text="Kellerentrümpelung in Wiener Wohnen-Gemeindebauten: MA-48-Entsorgung, 48er-Tandler-Alternative via Wertanrechnung, besenreine Übergabe vor Hausverwaltungs-Deadline — 1100 Favoriten, 1200 Brigittenau und alle Bezirke."
        href="/#contact"
        label="Jetzt Angebot anfragen"
      />
    </RatgeberArticleBody>
  );
}

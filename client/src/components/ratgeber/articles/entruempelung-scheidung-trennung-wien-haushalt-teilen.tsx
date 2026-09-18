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

export function EntruempelungScheidungTrennungWienHaushaltTeilenArticle() {
  return (
    <RatgeberArticleBody>
      <RatgeberLead>
        Eine Scheidung oder Trennung in Wien bedeutet nicht nur rechtliche und emotionale Umbrüche — sie
        erfordert auch die praktische Aufteilung eines gemeinsamen Haushalts. Wer bleibt in der Wohnung,
        wer zieht aus, welche Möbel gehören wem? Und wie gelingt die besenreine Übergabe an den Vermieter,
        wenn die Fristen knapp werden? Objekträumung unterstützt Sie diskret, termingerecht und zum
        verbindlichen Fixpreis.
      </RatgeberLead>

      <RatgeberP>
        In Wiener Altbauten, Genossenschaftswohnungen und Gemeindebauten ist die Wohnungsübergabe oft an
        feste Termine gebunden. Gleichzeitig müssen Sie persönliche Gegenstände sortieren, Streitpunkte
        vermeiden und sicherstellen, dass wertvolle Möbel nicht versehentlich entsorgt werden. Eine
        professionelle{" "}
        <Link href="/services/haushaltsaufloesung" className={linkClass}>
          Haushaltsauflösung in Wien
        </Link>{" "}
        entlastet beide Seiten — unabhängig davon, ob Sie die gemeinsame Wohnung komplett auflösen oder nur
        den Auszug einer Person organisieren. Rechtliche Grundlagen zur Scheidung finden Sie beim{" "}
        <a
          href="https://www.oesterreich.gv.at/themen/familie_und_partnerschaft/scheidung"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          Bundesministerium für Familie und Jugend
        </a>
        .
      </RatgeberP>

      <RatgeberCallout>
        <strong>Das Wichtigste im Überblick:</strong> Erstellen Sie vor der Räumung eine schriftliche
        Inventarliste und markieren Sie Gegenstände farblich (bleibt / geht / unklar). Klären Sie die
        Kostenverteilung schriftlich, bevor Sie einen Räumungstermin buchen. Durch unsere Wertanrechnung
        für gut erhaltene Möbel sinken die Entsorgungskosten — der Fixpreis schützt vor Nachforderungen.
        Wir arbeiten diskret, termingerecht und liefern eine besenreine Übergabe für Vermieter und
        Hausverwaltungen in allen Wiener Bezirken.
      </RatgeberCallout>

      <RatgeberH2 id="haushalt-teilen">Haushalt teilen: Wer bleibt, wer geht?</RatgeberH2>
      <RatgeberP>
        Bei einer Trennung oder Scheidung in Wien gibt es typischerweise drei Szenarien: Eine Person bleibt
        in der gemeinsamen Wohnung, beide ziehen aus und geben die Wohnung zurück, oder die Wohnung wird
        verkauft und beide Parteien müssen ausziehen. Jedes Szenario erfordert eine andere
        Entrümpelungsstrategie. Bleibt eine Person, geht es meist um die Entfernung des persönlichen
        Inventars des Ausziehenden — Kleiderschränke, Bücher, Elektronik, persönliche Erinnerungsstücke.
        Ziehen beide aus, steht eine vollständige{" "}
        <Link href="/services/wohnungsaufloesung" className={linkClass}>
          Wohnungsauflösung
        </Link>{" "}
        an, inklusive Keller, Dachboden und aller Nebenräume.
      </RatgeberP>
      <RatgeberP>
        In der Praxis entstehen Konflikte oft dann, wenn unklar ist, welche Gegenstände gemeinsam angeschafft
        wurden und wer Anspruch auf welche Möbel hat. Hochwertige Einrichtungsgegenstände — Designer-Sofas,
        Einbauküchen, Antiquitäten — sollten vor der Räumung einvernehmlich verteilt oder verkauft werden.
        Alles, was niemand mitnehmen möchte, kann über unsere{" "}
        <Link href="/services/moebel-wertanrechnung" className={linkClass}>
          Möbel-Wertanrechnung
        </Link>{" "}
        direkt vom Räumungspreis abgezogen werden, statt auf Willhaben monatelang zu warten.
      </RatgeberP>

      <RatgeberH3 id="drei-modelle">Die drei häufigsten Aufteilungsmodelle</RatgeberH3>
      <RatgeberUl>
        <RatgeberLi>
          <strong>Modell A — Eine Person bleibt:</strong> Der Ausziehende nimmt persönliche Gegenstände mit;
          gemeinsame Möbel werden aufgeteilt oder verkauft. Wir räumen nur den Teil, der tatsächlich
          abtransportiert werden soll.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Modell B — Beide ziehen aus:</strong> Die gesamte Wohnung wird entrümpelt. Besenreine
          Übergabe an Vermieter, Genossenschaft oder Wiener Wohnen innerhalb der vertraglichen Frist.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Modell C — Verkauf der Immobilie:</strong> Analog zur{" "}
          <Link href="/ratgeber/haushaltsaufloesung-vor-immobilienverkauf-wien" className={linkClass}>
            Haushaltsauflösung vor Immobilienverkauf
          </Link>
          : Leer räumen, besenrein übergeben, damit Makler und Käufer die Räume ungestört begutachten
          können.
        </RatgeberLi>
      </RatgeberUl>

      <RatgeberH2 id="inventarliste">Inventarliste: Konflikte vermeiden, Klarheit schaffen</RatgeberH2>
      <RatgeberP>
        Eine schriftliche Inventarliste ist bei Trennungen und Scheidungen unverzichtbar — nicht nur aus
        rechtlichen Gründen, sondern auch, um Missverständnisse am Räumungstag zu verhindern. Gehen Sie
        Raum für Raum durch die Wohnung und notieren Sie jeden Gegenstand mit der Zuordnung: Person A,
        Person B, gemeinsam (Aufteilung offen) oder Entsorgung. Fotografieren Sie wertvolle Stücke und
        markieren Sie Möbel mit farbigen Klebeband-Streifen: Grün = bleibt, Rot = geht, Gelb = unklar /
        Wertanrechnung.
      </RatgeberP>
      <RatgeberP>
        Besonders sensibel sind gemeinsame Anschaffungen: Waschmaschine, Küchengeräte, Wohnzimmermöbel,
        Fernseher. Klären Sie diese Punkte vor dem Räumungstermin — nicht am Tag selbst, wenn Emotionen
        hochkochen können. Wenn eine Einigung nicht möglich ist, kann ein neutraler Dritter (Anwalt,
        Mediator) die Liste bestätigen. Unser Team arbeitet ausschließlich nach der von Ihnen freigegebenen
        Liste und transportiert nur explizit markierte Gegenstände ab.
      </RatgeberP>

      <RatgeberH3 id="inventar-vorlage">Praktische Inventar-Vorlage</RatgeberH3>
      <RatgeberOl>
        <RatgeberLi>
          <strong>Raum erfassen:</strong> Wohnzimmer, Schlafzimmer, Küche, Bad, Abstellräume, Keller,
          Dachboden — nichts auslassen.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Gegenstand notieren:</strong> Bezeichnung, ungefähres Alter, Zustand, geschätzter Wert,
          Zuordnung (A / B / gemeinsam / Entsorgung).
        </RatgeberLi>
        <RatgeberLi>
          <strong>Fotos anfertigen:</strong> Mindestens ein Foto pro größerem Gegenstand; bei Streitwerten
          mehrere Perspektiven.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Freigabe einholen:</strong> Beide Parteien unterschreiben die Liste oder bestätigen sie
          per E-Mail, bevor der Räumungstermin fixiert wird.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Restbestand definieren:</strong> Alles ohne Zuordnung wird als Entsorgungsgut behandelt —
          mit Wertanrechnung, wo sinnvoll.
        </RatgeberLi>
      </RatgeberOl>

      <RatgeberH2 id="diskret">Diskrete Entrümpelung: Privatsphäre in einer sensiblen Phase</RatgeberH2>
      <RatgeberP>
        Eine Trennung oder Scheidung ist eine private Angelegenheit. Nachbarn, Hausverwaltungen und
        Vermieter müssen nicht wissen, warum die Wohnung geräumt wird — und Sie sollten sich nicht
        rechtfertigen müssen. Objekträumung arbeitet diskret: neutrale Fahrzeuge, unauffällige
        Kleidung, keine auffälligen Beschriftungen. Unser Team betritt die Wohnung nur mit Ihrer
        ausdrücklichen Freigabe und hält sich strikt an die vereinbarte Inventarliste.
      </RatgeberP>
      <RatgeberP>
        Wenn eine Person bereits ausgezogen ist und die Räumung im Namen des Verbleibenden oder
        Ausziehenden erfolgt, können wir die Schlüsselübergabe und die besenreine Dokumentation per Foto
        übernehmen — ähnlich wie bei unserer{" "}
        <Link href="/services/verlassenschaft" className={linkClass}>
          Verlassenschafts-Räumung
        </Link>
        , bei der wir ebenfalls selbstständig und zuverlässig arbeiten. So müssen Sie am Räumungstag nicht
        persönlich anwesend sein, wenn das emotional zu belastend wäre.
      </RatgeberP>

      <RatgeberH2 id="fixpreis-wertanrechnung">Fixpreis und Wertanrechnung: Kosten fair aufteilen</RatgeberH2>
      <RatgeberP>
        Bei Trennungen wird oft auch über Geld gestritten. Deshalb ist ein verbindlicher Fixpreis
        entscheidend: Sie wissen vorab exakt, was die Räumung kostet — ohne Nachberechnungen für
        Deponiegebühren, Fahrzeiten oder Mehraufwand. Wir besichtigen die Wohnung kostenlos vor Ort oder
        per Foto und erstellen ein transparentes Angebot. Details zu typischen Preisspannen finden Sie in
        unserem Ratgeber{" "}
        <Link href="/ratgeber/haushaltsaufloesung-preise-wien-2026" className={linkClass}>
          Haushaltsauflösung Preise Wien 2026
        </Link>{" "}
        sowie auf unserer{" "}
        <Link href="/prices" className={linkClass}>
          Preisseite
        </Link>
        .
      </RatgeberP>
      <RatgeberP>
        Die Wertanrechnung senkt die Endrechnung spürbar: Gut erhaltene Möbel, funktionstüchtige
        Elektrogeräte, Designklassiker oder hochwertige Küchengeräte kaufen wir direkt an und ziehen den
        Ankaufswert vom Fixpreis ab. Das ist oft schneller und stressfreier als ein privater Verkauf über
        Willhaben — besonders wenn die Trennung ohnehin schon genug Zeit und Nerven beansprucht. Mehr dazu
        in unserem Vergleich{" "}
        <Link href="/ratgeber/gebrauchte-moebel-verkaufen-wien-willhaben-wertanrechnung" className={linkClass}>
          Willhaben vs. Wertanrechnung
        </Link>
        .
      </RatgeberP>
      <RatgeberP>
        Wer die Räumungskosten trägt, sollte vorab schriftlich geklärt werden — ob 50/50, nach
        Nutzungsdauer oder nach dem, wer auszieht. Bei gemeinsamen Anschaffungen kann die Wertanrechnung
        als neutraler Ausgleich dienen: Der Erlös wird transparent dokumentiert und fair aufgeteilt. In
        Einzelfällen sind Räumungskosten steuerlich absetzbar — siehe{" "}
        <Link href="/ratgeber/entruempelung-wien-steuerlich-absetzen" className={linkClass}>
          Entrümpelung steuerlich absetzen
        </Link>
        .
      </RatgeberP>

      <RatgeberH2 id="vermieter-uebergabe">Schnelle Übergabe an Vermieter und Hausverwaltung</RatgeberH2>
      <RatgeberP>
        Wiener Mietverträge sehen oft kurze Kündigungsfristen vor — drei Monate sind üblich, bei
        befristeten Verträgen kann es noch knapper werden. Wenn beide Partner ausziehen, muss die Wohnung
        besenrein, leer und ohne Schäden übergeben werden. Hausverwaltungen und Vermieter prüfen Keller,
        Dachboden und Stiegenhaus genauso wie die Wohnräume selbst. Unser Team in{" "}
        <Link href="/locations/wien" className={linkClass}>
          Wien und Umgebung
        </Link>{" "}
        kennt die Anforderungen von privaten Vermietern, Genossenschaften und Wiener Wohnen.
      </RatgeberP>
      <RatgeberP>
        Wir demontieren Einbauküchen, entfernen Wandregale und Lampen, transportieren Sperrmüll fachgerecht
        und entsorgen sortenrein gemäß den Vorgaben der{" "}
        <a
          href="https://www.wien.gv.at/umwelt/ma48/"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          MA 48 — Wiener Stadtreinigung
        </a>
        . Am Ende erhalten Sie eine besenreine Wohnung, die den Übergabeprotokoll-Standards entspricht —
        und damit die beste Voraussetzung für die Rückzahlung der Kaution ohne Abzüge.
      </RatgeberP>

      <RatgeberH3 id="zeitplan">Typischer Zeitplan bei Trennung und Auszug</RatgeberH3>
      <RatgeberOl>
        <RatgeberLi>
          <strong>Woche 1–2:</strong> Inventarliste erstellen, Zuordnung klären, Kostenverteilung
          vereinbaren.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Woche 2–3:</strong> Kostenlose Besichtigung durch Objekträumung, Fixpreis-Angebot mit
          Wertanrechnung erhalten.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Woche 3–4:</strong> Persönliche Gegenstände auspacken und abtransportieren; Rest für
          professionelle Räumung vorbereiten.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Räumungstag:</strong> Demontage, Abtransport, Mülltrennung, besenreine Endreinigung.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Übergabetag:</strong> Schlüssel an Vermieter, Protokoll unterzeichnen, Kaution
          zurückerhalten.
        </RatgeberLi>
      </RatgeberOl>

      <RatgeberH2 id="teil-vs-voll">Teilräumung oder Vollauflösung?</RatgeberH2>
      <RatgeberP>
        Nicht jede Trennung erfordert eine komplette Wohnungsauflösung. Bleibt ein Partner in der Wohnung,
        reicht oft eine gezielte Teilräumung — vergleichbar mit unserer{" "}
        <Link href="/ratgeber/zimmer-raeumung-wien-wg-uebergabe" className={linkClass}>
          Zimmer Räumung bei WG-Übergabe
        </Link>
        , nur dass hier ein ganzes Zimmer oder der Anteil eines Partners geleert wird. Wir transportieren
        nur die markierten Gegenstände ab und hinterlassen den Rest unangetastet.
      </RatgeberP>
      <RatgeberP>
        Ziehen beide aus oder wird die Wohnung verkauft, ist eine vollständige{" "}
        <Link href="/services/entrumpelung-wien" className={linkClass}>
          Entrümpelung in Wien
        </Link>{" "}
        sinnvoll — inklusive Keller, Dachboden, Balkon und Garagenabteil. So vermeiden Sie
        Nachforderungen der Hausverwaltung wegen zurückgelassener Gegenstände in Nebenräumen. Express-Termine
        sind bei kurzfristigen Kündigungen oder gerichtlich gesetzten Fristen möglich.
      </RatgeberP>

      <RatgeberH2 id="checkliste">Checkliste für die Trennungs-Entrümpelung</RatgeberH2>
      <RatgeberUl>
        <RatgeberLi>
          <strong>Inventarliste schriftlich fixieren</strong> — mit Fotos und farblicher Markierung.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Kostenverteilung klären</strong> — wer trägt Fixpreis, wer profitiert von Wertanrechnung?
        </RatgeberLi>
        <RatgeberLi>
          <strong>Kündigungsfrist prüfen</strong> — Mietvertrag, Übergabetermin, Kaution.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Nebenräume nicht vergessen</strong> — Keller, Dachboden, Garagenplatz, Abstellraum.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Schlüssel und Zugang koordinieren</strong> — wer übergibt, wer ist am Räumungstag anwesend?
        </RatgeberLi>
        <RatgeberLi>
          <strong>Diskretion vereinbaren</strong> — neutrale Fahrzeuge, keine unnötigen Informationen an
          Dritte.
        </RatgeberLi>
      </RatgeberUl>

      <RatgeberP className="text-sm text-navy/70 border-t border-navy/10 pt-6 mt-8">
        Weiterführend:{" "}
        <Link href="/services/wohnungsaufloesung" className={linkClass}>
          Wohnungsauflösung
        </Link>
        {" · "}
        <Link href="/services/haushaltsaufloesung" className={linkClass}>
          Haushaltsauflösung
        </Link>
        {" · "}
        <Link href="/services/moebel-wertanrechnung" className={linkClass}>
          Möbel-Wertanrechnung
        </Link>
        {" · "}
        <Link href="/services/verlassenschaft" className={linkClass}>
          Verlassenschaft
        </Link>
        {" · "}
        <Link href="/services/entrumpelung-wien" className={linkClass}>
          Entrümpelung Wien
        </Link>
        {" · "}
        <Link href="/ratgeber/haushaltsaufloesung-vor-immobilienverkauf-wien" className={linkClass}>
          Haushaltsauflösung vor Verkauf
        </Link>
        {" · "}
        <Link href="/ratgeber/zimmer-raeumung-wien-wg-uebergabe" className={linkClass}>
          Zimmer Räumung WG
        </Link>
        {" · "}
        <Link href="/ratgeber/gebrauchte-moebel-verkaufen-wien-willhaben-wertanrechnung" className={linkClass}>
          Willhaben vs. Wertanrechnung
        </Link>
        {" · "}
        <Link href="/ratgeber/entruempelung-wien-steuerlich-absetzen" className={linkClass}>
          Steuerlich absetzen
        </Link>
        {" · "}
        <Link href="/ratgeber/haushaltsaufloesung-preise-wien-2026" className={linkClass}>
          Preise 2026
        </Link>
        {" · "}
        <Link href="/locations/wien" className={linkClass}>
          Wien
        </Link>
        {" · "}
        <Link href="/prices" className={linkClass}>
          Preise
        </Link>
      </RatgeberP>

      <RatgeberH2 id="faq">FAQ: Häufige Fragen zur Entrümpelung bei Scheidung und Trennung</RatgeberH2>

      <RatgeberH3 id="faq-beide-anwesend">
        Müssen beide Partner am Räumungstag anwesend sein?
      </RatgeberH3>
      <RatgeberP>
        Nein. Wenn die Inventarliste vorab von beiden freigegeben wurde, kann die Räumung auch durch
        eine Person oder einen Bevollmächtigten begleitet werden. Wir dokumentieren den Ablauf mit Fotos
        und übergeben die besenreine Wohnung gemäß Ihrer Vorgaben — diskret und ohne unnötige
        Konfrontation.
      </RatgeberP>

      <RatgeberH3 id="faq-kosten">
        Wie werden die Räumungskosten bei einer Trennung aufgeteilt?
      </RatgeberH3>
      <RatgeberP>
        Das regeln Sie untereinander — üblich sind 50/50, anteilig nach Einkommen oder nach dem Prinzip
        „wer auszieht, trägt die Räumung des eigenen Inventars". Unser Fixpreis-Angebot ist transparent
        und kann als Grundlage für die Aufteilung dienen. Erlöse aus der Wertanrechnung werden separat
        ausgewiesen und können fair geteilt werden.
      </RatgeberP>

      <RatgeberH3 id="faq-kurzfristig">
        Wie kurzfristig ist eine Entrümpelung bei Scheidung in Wien möglich?
      </RatgeberH3>
      <RatgeberP>
        Bei dringenden Fällen — etwa wenn eine Kündigungsfrist abläuft oder ein gerichtlicher Termin
        ansteht — bieten wir Express-Räumungen innerhalb weniger Tage an. Kontaktieren Sie uns am besten
        direkt per WhatsApp oder Telefon mit Fotos der Wohnung, damit wir schnell ein Fixpreis-Angebot
        erstellen können.
      </RatgeberP>

      <RatgeberH3 id="faq-kinder">
        Was passiert mit Kinderzimmern und gemeinsamen Erinnerungsstücken?
      </RatgeberH3>
      <RatgeberP>
        Kinderzimmer und persönliche Erinnerungsstücke sollten vorab von den Eltern gemeinsam sortiert
        werden — unser Team packt nur explizit markierte Gegenstände ein. Spielsachen, Bücher und
        Kleidung, die ein Kind mitnimmt, werden separat transportiert. Alles ohne Markierung bleibt
        unangetastet, bis Sie eine klare Zuordnung treffen.
      </RatgeberP>

      <RatgeberCta
        title="Jetzt kostenloses Fixpreis-Angebot für Ihre Trennungs-Entrümpelung anfordern!"
        text="Diskret, termingerecht und zum verbindlichen Fixpreis — Haushaltsauflösung bei Scheidung und Trennung in allen Wiener Bezirken. Faire Wertanrechnung und besenreine Übergabe an Vermieter."
        href="/#contact"
        label="Jetzt Angebot anfragen"
      />
    </RatgeberArticleBody>
  );
}

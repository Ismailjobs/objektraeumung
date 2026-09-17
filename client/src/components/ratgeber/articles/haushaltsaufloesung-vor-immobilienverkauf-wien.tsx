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

export function HaushaltsaufloesungVorImmobilienverkaufWienArticle() {
  return (
    <RatgeberArticleBody>
      <RatgeberLead>
        Wer in Wien eine Wohnung oder ein Haus verkaufen möchte, unterschätzt oft den Zeitfaktor der
        Haushaltsauflösung. Zwischen Maklertermin, Besichtigung und Notarstermin bleiben selten mehr als
        7 bis 14 Tage — und genau in diesem Fenster entscheidet sich, ob Käufer einen fairen Eindruck
        gewinnen oder ob überladene Räume den Verkaufspreis drücken.
      </RatgeberLead>

      <RatgeberP>
        Ob Erbengemeinschaft, Alleineigentümer oder Ehepaar vor dem Verkauf: Eine professionelle{" "}
        <Link href="/services/haushaltsaufloesung" className={linkClass}>
          Haushaltsauflösung in Wien
        </Link>{" "}
        ist kein Nebenprojekt, sondern ein zentraler Baustein im Immobilienverkauf. Dieser Leitfaden von
        Objekträumung Wien zeigt Ihnen, wie Sie den Ablauf rechtssicher planen, Besichtigungen optimal
        vorbereiten und mit Fixpreis sowie Wertanrechnung Ihre Kosten kontrollieren — inklusive{" "}
        <Link href="/ratgeber/kellerentruempelung-gemeindebau-wien" className={linkClass}>
          Keller
        </Link>
        ,{" "}
        <Link href="/ratgeber/dachbodenraeumung-wien-ma-48-checkliste" className={linkClass}>
          Dachboden
        </Link>{" "}
        und aller Nebenflächen. In Altbauten ohne Lift siehe{" "}
        <Link href="/ratgeber/entruempelung-altbau-ohne-lift-wien-fixpreis" className={linkClass}>
          Tragekonzept & Fixpreis
        </Link>
        ; bei Pflegeheim-Übergaben{" "}
        <Link href="/ratgeber/senioren-entruempelung-downsizing-wien-pflegeheim" className={linkClass}>
          Senioren-Downsizing
        </Link>
        .
      </RatgeberP>

      <RatgeberCallout>
        <strong>Das Wichtigste im Überblick:</strong> Planen Sie die Räumung mindestens zwei Wochen vor
        dem ersten Maklertermin ein. Besichtigungen funktionieren nur, wenn die Wohnung besenrein und
        frei zugänglich ist. Bei Erbengemeinschaften klären Sie die Freigabe schriftlich, bevor Gegenstände
        entfernt werden. Ein verbindlicher Fixpreis schützt Sie vor Nachforderungen — Wertanrechnung kann
        die Räumung deutlich günstiger machen.
      </RatgeberCallout>

      <RatgeberH2 id="warum-vor-verkauf">Warum die Haushaltsauflösung vor dem Verkauf entscheidend ist</RatgeberH2>
      <RatgeberP>
        Immobilienkäufer in Wien urteilen in den ersten Sekunden. Volle Schränke, überladene Kellerabteile
        und ein zugestellter Dachboden signalisieren Aufwand, Unsicherheit und versteckte Kosten. Makler
        berichten regelmäßig, dass übermöbelte Objekte länger am Markt bleiben und mit Abschlägen
        verkauft werden — nicht weil die Liegenschaft schlecht wäre, sondern weil der visuelle Eindruck
        die Vorstellungskraft der Interessenten blockiert.
      </RatgeberP>
      <RatgeberP>
        Eine besenreine, entrümpelte Wohnung wirkt größer, heller und gepflegter. Käufer können
        Raumgrößen realistisch einschätzen, Böden und Wände begutachten und sich vorstellen, wie sie
        einziehen würden. Für Verkäufer bedeutet das: weniger Verhandlungsdruck, kürzere
        Vermarktungsdauer und oft ein höherer erzielbarer Preis — selbst wenn die Räumung selbst Geld
        kostet.
      </RatgeberP>
      <RatgeberP>
        Gleichzeitig schafft die Haushaltsauflösung Klarheit über den tatsächlichen Zustand der Immobilie.
        Versteckte Feuchtigkeitsschäden, veraltete Elektroinstallationen oder Schimmel hinter Möbeln
        werden sichtbar, bevor der Notar den Kaufvertrag beurkundet. So vermeiden Sie spätere
        Reklamationen und Verzögerungen im Verkaufsprozess.
      </RatgeberP>

      <RatgeberH2 id="makler-timeline">Die Makler-Timeline: 7 bis 14 Tage bis zur ersten Besichtigung</RatgeberH2>
      <RatgeberP>
        In Wien ist der Immobilienmarkt oft schnelllebig. Sobald Sie sich für den Verkauf entschieden
        haben, vereinbaren Makler in der Regel innerhalb von 7 bis 14 Tagen einen Ersttermin zur
        Wertermittlung und Besichtigung. Ab diesem Moment läuft die Uhr: Exposé-Erstellung, Fotoshooting
        und die ersten Interessententermine folgen oft innerhalb weniger Wochen.
      </RatgeberP>
      <RatgeberP>
        Das bedeutet konkret: Wenn der Makler kommt, muss die Wohnung bereits präsentationsfähig sein.
        Nicht „irgendwann nächsten Monat“, sondern spätestens am Tag der Wertermittlung. Makler
        fotografieren für das Exposé — überladene Räume landen genauso auf den Bildern wie leere,
        aufgeräumte Flächen. Schlechte Fotos kosten Klicks, Besichtigungen und damit potenzielle Gebote.
      </RatgeberP>

      <RatgeberH3 id="timeline-uebersicht">Typischer Zeitplan beim Immobilienverkauf in Wien</RatgeberH3>
      <div className="my-8 overflow-x-auto rounded-xl border border-navy/10">
        <table className="w-full min-w-[520px] text-left text-sm md:text-base">
          <thead>
            <tr className="bg-navy text-white">
              <th className="px-4 py-3 font-semibold">Phase</th>
              <th className="px-4 py-3 font-semibold">Zeitrahmen</th>
              <th className="px-4 py-3 font-semibold">Was zu tun ist</th>
            </tr>
          </thead>
          <tbody className="text-navy/85">
            <tr className="border-t border-navy/10 bg-white">
              <td className="px-4 py-3 align-top font-medium text-navy">Entscheidung &amp; Planung</td>
              <td className="px-4 py-3 align-top">Tag 1–3</td>
              <td className="px-4 py-3 align-top">
                Verkaufsentscheidung treffen, Erbengemeinschaft abstimmen, Räumungsfirma kontaktieren
              </td>
            </tr>
            <tr className="border-t border-navy/10 bg-slate-50/80">
              <td className="px-4 py-3 align-top font-medium text-navy">Besichtigung &amp; Fixpreis</td>
              <td className="px-4 py-3 align-top">Tag 3–7</td>
              <td className="px-4 py-3 align-top">
                Kostenlose Vor-Ort-Besichtigung, Wertanrechnung prüfen, verbindliches Angebot erhalten
              </td>
            </tr>
            <tr className="border-t border-navy/10 bg-white">
              <td className="px-4 py-3 align-top font-medium text-navy">Räumung &amp; besenreine Übergabe</td>
              <td className="px-4 py-3 align-top">Tag 7–12</td>
              <td className="px-4 py-3 align-top">
                Haushaltsauflösung inkl. Keller und Dachboden, Entsorgung über MA 48, besenreine Reinigung
              </td>
            </tr>
            <tr className="border-t border-navy/10 bg-slate-50/80">
              <td className="px-4 py-3 align-top font-medium text-navy">Makler &amp; Exposé</td>
              <td className="px-4 py-3 align-top">Tag 12–14</td>
              <td className="px-4 py-3 align-top">
                Wertermittlung, professionelle Fotos, Veröffentlichung — Wohnung muss besenrein sein
              </td>
            </tr>
            <tr className="border-t border-navy/10 bg-white">
              <td className="px-4 py-3 align-top font-medium text-navy">Besichtigungen &amp; Verkauf</td>
              <td className="px-4 py-3 align-top">Ab Tag 14</td>
              <td className="px-4 py-3 align-top">
                Interessententermine, Verhandlungen, Kaufvertrag beim Notar
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <RatgeberP>
        Unser Tipp aus der Praxis: Kontaktieren Sie Objekträumung Wien so früh wie möglich — idealerweise
        sobald der Verkauf feststeht, noch bevor der Maklertermin fixiert ist. So sichern Sie sich
        Kapazitäten und vermeiden Stress in der heißen Phase vor dem Exposé.
      </RatgeberP>

      <RatgeberH2 id="besenrein-besichtigung">Besenrein für Besichtigungen: Was Makler und Käufer erwarten</RatgeberH2>
      <RatgeberP>
        Der Begriff „besenrein“ ist im österreichischen Immobilienmarkt fest verankert. Er bedeutet: Die
        Wohnung ist vollständig geräumt, persönliche Gegenstände sind entfernt, Böden gefegt und alle
        Nebenflächen zugänglich. Nicht gemeint ist eine Renovierung — aber auch kein halb geleertes
        Objekt mit Kartons in der Ecke und Möbelresten im Schlafzimmer.
      </RatgeberP>
      <RatgeberP>
        Für Maklerbesichtigungen und spätere Käufertermine gilt: Jeder Raum muss betretbar sein. Keller-
        und Dachbodenabteile dürfen nicht verschlossen oder zugestellt bleiben — Interessenten wollen
        den Gesamtzustand der Liegenschaft sehen. Eine professionelle{" "}
        <Link href="/services/wohnungsaufloesung" className={linkClass}>
          Wohnungsauflösung
        </Link>{" "}
        schließt deshalb standardmäßig alle mitverkauften Flächen ein.
      </RatgeberP>
      <RatgeberUl>
        <RatgeberLi>
          <strong>Alle Wohnräume:</strong> Wohnzimmer, Schlafzimmer, Küche, Bad — ohne Möbel, ohne
          persönliche Gegenstände, Böden sauber.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Nebenflächen:</strong>{" "}
          <Link href="/services/kellerraeumung" className={linkClass}>
            Keller
          </Link>
          ,{" "}
          <Link href="/services/dachbodenraeumung" className={linkClass}>
            Dachboden
          </Link>
          , Abstellräume, ggf. Garage — ebenfalls besenrein und zugänglich.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Entsorgung:</strong> Sperrmüll und Hausrat fachgerecht über die{" "}
          <Link href="/services/entsorgung-wien" className={linkClass}>
            Entsorgung Wien
          </Link>{" "}
          bzw. die Wiener MA 48 — nicht einfach vor der Haustür abstellen.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Übergabeprotokoll:</strong> Schriftlicher Nachweis, dass die Räumung vollständig
          abgeschlossen wurde — relevant für Makler, Notar und Erbengemeinschaft.
        </RatgeberLi>
      </RatgeberUl>

      <RatgeberH2 id="erbengemeinschaft">Haushaltsauflösung bei Erbengemeinschaft: Rechtssicher vorgehen</RatgeberH2>
      <RatgeberP>
        Verkaufen Erben gemeinsam eine Immobilie in Wien, ist die Haushaltsauflösung oft der erste
        praktische Schritt — und gleichzeitig die häufigste Konfliktquelle. Wer darf entscheiden, was
        weggeworfen wird? Wer erhält Erinnerungsstücke? Wann darf überhaupt geräumt werden?
      </RatgeberP>
      <RatgeberP>
        Grundsätzlich gilt: Solange die Erbengemeinschaft nicht einstimmig handelt oder ein
        Gerichtskommissär die Verfügungsrechte klärt, sollten keine Gegenstände endgültig entfernt werden,
        die möglicherweise erbrechtlich relevant sind. Anders als bei einer{" "}
        <Link href="/services/verlassenschaft" className={linkClass}>
          Verlassenschaftsräumung
        </Link>{" "}
        nach Todesfall kann bei einem Verkauf aus der Erbengemeinschaft oft schneller gehandelt werden —
        vorausgesetzt, alle Miterben stimmen schriftlich zu.
      </RatgeberP>
      <RatgeberOl>
        <RatgeberLi>
          <strong>Abstimmung:</strong> Alle Erben informieren und die Räumung schriftlich freigeben — per
          E-Mail oder Protokoll mit Unterschriften.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Inventarliste:</strong> Gemeinsam festlegen, welche Gegenstände an wen gehen, was verkauft
          wird und was entsorgt werden darf.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Notar einbinden:</strong> Bei größeren Nachlässen oder Unstimmigkeiten den zuständigen
          Notar oder Gerichtskommissär vorab informieren.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Transparente Dokumentation:</strong> Fotoprotokoll vor und nach der Räumung, detailliertes
          Übergabeprotokoll und Rechnung zum Fixpreis — für alle Erben nachvollziehbar.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Kostenteilung:</strong> Räumungskosten werden üblicherweise aus dem Verkaufserlös
          gedeckt — im Vorfeld klären, wer die Rechnung begleicht.
        </RatgeberLi>
      </RatgeberOl>
      <RatgeberP>
        Objekträumung Wien hat langjährige Erfahrung mit sensiblen Erbengemeinschaftsprojekten. Wir
        arbeiten diskret, dokumentieren jeden Schritt und liefern Unterlagen, die auch für Notar und
        Steuerberater verwertbar sind. Mehr zum Ablauf finden Sie in unserem Ratgeber{" "}
        <Link href="/ratgeber/wohnungsaufloesung-todesfall-wien-ablauf" className={linkClass}>
          Wohnungsauflösung nach Todesfall
        </Link>
        .
      </RatgeberP>

      <RatgeberH2 id="notar">Notar, Kaufvertrag und Haushaltsauflösung: Was zusammenhängt</RatgeberH2>
      <RatgeberP>
        Der Notar beurkundet den Immobilienkaufvertrag — die Haushaltsauflösung selbst ist keine
        notarielle Pflichtleistung. Dennoch hängen beide Prozesse eng zusammen. Käufer erwarten bei
        Übergabe eine leere, besenreine Liegenschaft, sofern nichts anderes vereinbart wurde. Verkäufer,
        die noch während der Verhandlungsphase räumen, signalisieren Verkaufsbereitschaft und reduzieren
        das Risiko von Mängelrügen.
      </RatgeberP>
      <RatgeberP>
        Bei Erbengemeinschaften kann der Notar oder Gerichtskommissär vor der endgültigen Verteilung des
        Kaufpreises prüfen, ob der Nachlass ordnungsgemäß abgewickelt wurde. Eine transparente Rechnung
        der Räumungsfirma, Entsorgungsbelege und ein Übergabeprotokoll erleichtern diese Abwicklung
        erheblich. Auch für die Einkommensteuererklärung — Veräußerungskosten können unter Umständen
        steuerlich relevant sein — lohnt sich lückenlose Dokumentation. Details dazu in unserem Artikel{" "}
        <Link href="/ratgeber/entruempelung-wien-steuerlich-absetzen" className={linkClass}>
          Entrümpelung steuerlich absetzen
        </Link>
        .
      </RatgeberP>
      <RatgeberP>
        Unser Rat: Klären Sie mit Ihrem Makler und Notar, bis wann die Wohnung besenrein sein muss.
        Manche Verkäufer räumen vor dem Exposé, andere erst nach einem vorläufigen Kaufvertrag. Beides
        ist möglich — entscheidend ist, dass der Zeitplan realistisch ist und die Räumung nicht erst am
        Tag vor der Übergabe beginnt.
      </RatgeberP>

      <RatgeberH2 id="dachboden-keller">Dachboden und Keller: Die unterschätzten Verkaufsbremsen</RatgeberH2>
      <RatgeberP>
        In Wiener Gemeindebauten und Altbauten gehören Kellerabteile und Dachbodenflächen fast immer zum
        Verkaufspaket. Makler listen sie im Exposé — und Käufer besichtigen sie genauso kritisch wie
        Wohnzimmer und Küche. Ein zugestellter Keller mit Jahrzehnten an Hausrat oder ein Dachboden voller
        alter Möbel und Sperrgut erzeugt sofort die Frage: „Was steckt da noch dahinter?“
      </RatgeberP>
      <RatgeberP>
        Viele Verkäufer konzentrieren sich auf die Wohnräume und vergessen Nebenflächen. Das ist ein
        teurer Fehler. Eine vollständige Haushaltsauflösung vor dem Immobilienverkauf muss deshalb
        zwingend alle zugehörigen Flächen einschließen:
      </RatgeberP>
      <RatgeberUl>
        <RatgeberLi>
          <strong>Kellerabteile:</strong> Oft jahrzehntelang befüllt mit Werkzeug, alten Möbeln, Reifen,
          Kinderspielzeug und Sperrmüll. Tragewege in engen Kellergängen erfordern Erfahrung — wir kennen
          die Logistik in Wiener Hausanlagen.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Dachböden:</strong> Häufig nur über enge Luken oder steile Stiegen erreichbar. Alte
          Möbel, Koffer und Kartons blockieren nicht nur Besichtigungen, sondern bergen auch
          Schimmelrisiken, die erst nach dem Räumen sichtbar werden.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Garagen und Stellplätze:</strong> Wer eine{" "}
          <Link href="/services/garagenraeumung" className={linkClass}>
            Garage
          </Link>{" "}
          mitverkauft, sollte auch diese Fläche entrümpeln — Käufer erwarten freie Zufahrt.
        </RatgeberLi>
      </RatgeberUl>
      <RatgeberP>
        Bei der kostenlosen Besichtigung durch Objekträumung Wien erfassen wir alle Nebenflächen und
        kalkulieren sie in den Fixpreis ein. Keine versteckten Nachzahlungen, weil „der Keller doch auch
        noch voll war“. Unser Checklisten-Artikel{" "}
        <Link href="/ratgeber/dachbodenraeumung-wien-ma-48-checkliste" className={linkClass}>
          Dachbodenräumung Wien
        </Link>{" "}
        zeigt, worauf es bei Entsorgung und MA-48-Anbindung ankommt.
      </RatgeberP>

      <RatgeberH2 id="wertanrechnung">Wertanrechnung: Räumungskosten senken statt alles entsorgen</RatgeberH2>
      <RatgeberP>
        Nicht alles im Haushalt ist Müll. Gut erhaltene Möbel, funktionstüchtige Elektrogeräte,
        Antiquitäten, Bücher oder Designklassiker haben einen realen Marktwert. Statt alles auf den
        Sperrmüll zu geben, prüfen wir bei der Vor-Ort-Besichtigung, welche Gegenstände verwertbar sind.
      </RatgeberP>
      <RatgeberP>
        Im Rahmen unserer{" "}
        <Link href="/services/moebel-wertanrechnung" className={linkClass}>
          Möbel-Wertanrechnung
        </Link>{" "}
        und{" "}
        <Link href="/services/antiquitaeten-wertanrechnung" className={linkClass}>
          Antiquitäten-Wertanrechnung
        </Link>{" "}
        wird der geschätzte Wert direkt als Gutschrift von den Räumungskosten abgezogen. Für
        Erbengemeinschaften bedeutet das: weniger Streit über Einzelverkäufe auf Willhaben, weniger
        Zeitaufwand und ein schnellerer Weg zur besenreinen Übergabe. Im besten Fall kann die Räumung
        durch Wertanrechnung deutlich günstiger oder sogar kostenlos werden — über unseren{" "}
        <Link href="/services/einkauf" className={linkClass}>
          Ankauf und Einkauf
        </Link>
        .
      </RatgeberP>
      <RatgeberP>
        Wann lohnt sich privater Verkauf und wann die Sofort-Wertanrechnung? Unser Vergleichsartikel{" "}
        <Link href="/ratgeber/gebrauchte-moebel-verkaufen-wien-willhaben-wertanrechnung" className={linkClass}>
          Gebrauchte Möbel verkaufen vs. Wertanrechnung
        </Link>{" "}
        hilft bei der Entscheidung. Für den Immobilienverkauf mit engem Zeitfenster empfehlen wir in den
        meisten Fällen die Wertanrechnung: schneller, planbarer und ohne No-Show-Risiko bei
        Privatbesichtigungen.
      </RatgeberP>

      <RatgeberH2 id="fixpreis">Fixpreis-Garantie: Planungssicherheit für Verkäufer</RatgeberH2>
      <RatgeberP>
        Beim Immobilienverkauf haben Sie genug Unwägbarkeiten — der Räumungspreis sollte nicht eine davon
        sein. Objekträumung Wien arbeitet deshalb mit einem verbindlichen Fixpreis, der nach der
        kostenlosen Vor-Ort-Besichtigung schriftlich fixiert wird.
      </RatgeberP>
      <RatgeberUl>
        <RatgeberLi>
          <strong>Alles inklusive:</strong> Personal, Transport, Entsorgungsgebühren (MA 48), besenreine
          Übergabe — keine versteckten Zusatzkosten.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Wertanrechnung transparent:</strong> Verwertbare Gegenstände werden vorab bewertet und
          im Angebot als Gutschrift ausgewiesen.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Logistik inklusive:</strong> Bei Bedarf organisieren wir Halteverbotszonen bei der MA 46
          — wichtig in dicht bebauten Wiener Bezirken. Mehr dazu:{" "}
          <Link href="/ratgeber/halteverbot-entruempelung-wien-ma-46" className={linkClass}>
            Halteverbot MA 46
          </Link>
          .
        </RatgeberLi>
        <RatgeberLi>
          <strong>Dokumentation:</strong> Rechnung, Übergabeprotokoll und Entsorgungsnachweise für Notar,
          Makler und Erbengemeinschaft.
        </RatgeberLi>
      </RatgeberUl>
      <RatgeberP>
        Orientierung zu typischen Kosten finden Sie in unserem Preis-Ratgeber{" "}
        <Link href="/ratgeber/haushaltsaufloesung-preise-wien-2026" className={linkClass}>
          Haushaltsauflösung Preise Wien 2026
        </Link>{" "}
        und auf unserer{" "}
        <Link href="/prices" className={linkClass}>
          Preisseite
        </Link>
        . Ein telefonisches Schnellangebot ohne Besichtigung ist bei uns nicht üblich — zu unterschiedlich
        sind Volumen, Tragewege und Nebenflächen in Wien.
      </RatgeberP>

      <RatgeberH2 id="ablauf">Unser Ablauf: Von der Anfrage zur besenreinen Verkaufsimmobilie</RatgeberH2>
      <RatgeberOl>
        <RatgeberLi>
          <strong>Kontakt &amp; Erstgespräch:</strong> Sie schildern Objekt, Zeitplan und ob eine
          Erbengemeinschaft beteiligt ist. Wir geben eine erste Einschätzung zum Zeitfenster.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Kostenlose Besichtigung:</strong> Vor Ort in Wien, Niederösterreich oder dem Burgenland
          — alle Räume, Keller, Dachboden und Nebenflächen werden erfasst.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Fixpreis-Angebot mit Wertanrechnung:</strong> Schriftlich, verbindlich, ohne
          Nachforderungen bei gleichem Leistungsumfang.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Räumungstermin:</strong> Flexibel nach Ihrem Makler- und Notarplan — oft innerhalb von 3
          bis 5 Werktagen nach Auftragserteilung.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Besenreine Übergabe:</strong> Alle Flächen geräumt, gereinigt, dokumentiert — bereit für
          Exposé-Fotos und Käuferbesichtigungen.
        </RatgeberLi>
      </RatgeberOl>

      <RatgeberP className="text-sm text-navy/70 border-t border-navy/10 pt-6 mt-8">
        Weiterführend:{" "}
        <Link href="/services/haushaltsaufloesung" className={linkClass}>
          Haushaltsauflösung
        </Link>
        {" · "}
        <Link href="/services/wohnungsaufloesung" className={linkClass}>
          Wohnungsauflösung
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
        <Link href="/services/dachbodenraeumung" className={linkClass}>
          Dachbodenräumung
        </Link>
        {" · "}
        <Link href="/services/moebel-wertanrechnung" className={linkClass}>
          Wertanrechnung
        </Link>
        {" · "}
        <Link href="/ratgeber/haushaltsaufloesung-preise-wien-2026" className={linkClass}>
          Preise 2026
        </Link>
        {" · "}
        <Link href="/ratgeber/wohnungsaufloesung-todesfall-wien-ablauf" className={linkClass}>
          Todesfall-Ablauf
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
        <Link href="/ratgeber/kellerentruempelung-gemeindebau-wien" className={linkClass}>
          Keller Gemeindebau
        </Link>
        {" · "}
        <Link href="/ratgeber/entruempelung-altbau-ohne-lift-wien-fixpreis" className={linkClass}>
          Altbau ohne Lift
        </Link>
        {" · "}
        <Link href="/ratgeber/airbnb-ferienwohnung-express-entruempelung-wien" className={linkClass}>
          Airbnb Turnaround
        </Link>
        {" · "}
        <Link href="/locations/wien" className={linkClass}>
          Standorte Wien
        </Link>
        {" · "}
        <Link href="/prices" className={linkClass}>
          Preise
        </Link>
      </RatgeberP>

      <RatgeberH2 id="faq">Häufig gestellte Fragen (FAQ)</RatgeberH2>

      <RatgeberH3 id="faq-wann-raeumen">
        Wann sollte ich die Haushaltsauflösung vor dem Immobilienverkauf starten?
      </RatgeberH3>
      <RatgeberP>
        Idealerweise 2 bis 3 Wochen vor dem ersten Maklertermin. Makler in Wien planen Wertermittlung und
        Exposé oft innerhalb von 7 bis 14 Tagen nach Ihrer Anfrage. Die Wohnung sollte spätestens am Tag
        der Maklerbesichtigung besenrein sein — inklusive Keller und Dachboden.
      </RatgeberP>

      <RatgeberH3 id="faq-erbengemeinschaft">
        Müssen alle Erben der Haushaltsauflösung zustimmen?
      </RatgeberH3>
      <RatgeberP>
        Ja, bei einer Erbengemeinschaft sollte die Räumung schriftlich von allen Miterben freigegeben
        werden, bevor Gegenstände endgültig entfernt werden. Bei Unstimmigkeiten den Notar oder
        Gerichtskommissär einbinden. Objekträumung liefert transparente Protokolle für alle Beteiligten.
      </RatgeberP>

      <RatgeberH3 id="faq-besenrein">
        Was bedeutet „besenrein“ konkret für Käuferbesichtigungen?
      </RatgeberH3>
      <RatgeberP>
        Alle Räume und Nebenflächen sind vollständig geräumt, persönliche Gegenstände entfernt und Böden
        gefegt. Keine Möbelreste, keine Kartons, kein Sperrmüll. Die Wohnung muss frei zugänglich und
        besichtigbar sein — das ist der Standard, den Makler und Käufer in Wien erwarten.
      </RatgeberP>

      <RatgeberH3 id="faq-keller-dachboden">
        Muss auch Keller und Dachboden vor dem Verkauf geräumt werden?
      </RatgeberH3>
      <RatgeberP>
        In der Regel ja. Kellerabteile und Dachböden gehören in Wien fast immer zum Verkaufspaket und
        werden bei Besichtigungen mitgeprüft. Ein zugestellter Keller oder Dachboden wirkt sich negativ
        auf den Verkaufspreis aus und löst bei Käufern Misstrauen aus.
      </RatgeberP>

      <RatgeberH3 id="faq-wertanrechnung">
        Wie funktioniert die Wertanrechnung bei einer Verkaufsräumung?
      </RatgeberH3>
      <RatgeberP>
        Bei der kostenlosen Besichtigung bewerten wir verwertbare Möbel, Elektrogeräte und Antiquitäten.
        Der geschätzte Marktwert wird als Gutschrift direkt von den Räumungskosten abgezogen. So sinken
        Ihre Ausgaben — bei Erbengemeinschaften entfällt oft der Streit um Einzelverkäufe.
      </RatgeberP>

      <RatgeberH3 id="faq-fixpreis">
        Ist der Fixpreis wirklich verbindlich?
      </RatgeberH3>
      <RatgeberP>
        Ja. Nach der Vor-Ort-Besichtigung erhalten Sie ein schriftliches Angebot mit Fixpreis — inklusive
        Transport, Personal, Entsorgung und besenreiner Übergabe. Keine Nachzahlungen, solange der
        vereinbarte Leistungsumfang unverändert bleibt.
      </RatgeberP>

      <RatgeberH3 id="faq-notar">
        Brauche ich den Notar für die Haushaltsauflösung?
      </RatgeberH3>
      <RatgeberP>
        Die Räumung selbst ist nicht notariell vorgeschrieben. Bei Erbengemeinschaften oder
        Verlassenschaften kann der Notar jedoch Freigaben erteilen oder prüfen. Rechnung, Übergabeprotokoll
        und Entsorgungsnachweise liefern wir für die Nachlass- bzw. Verkaufsabwicklung.
      </RatgeberP>

      <RatgeberH3 id="faq-dauer">
        Wie lange dauert eine Haushaltsauflösung vor dem Verkauf in Wien?
      </RatgeberH3>
      <RatgeberP>
        Je nach Größe und Volumen meist 1 bis 3 Tage reine Räumungszeit. Vom Erstkontakt bis zur besenreinen
        Übergabe planen Sie realistisch 7 bis 12 Werktage ein — Besichtigung, Angebot, Terminvereinbarung
        und Durchführung. In Eilfällen sprechen Sie uns an: Wir richten uns nach Ihrem Makler-Zeitplan.
      </RatgeberP>

      <RatgeberP>
        Sie planen den Verkauf einer Immobilie in Wien und benötigen eine schnelle, besenreine
        Haushaltsauflösung zum Fixpreis? Objekträumung Wien berät Sie unverbindlich — telefonisch, per
        WhatsApp oder über unser Kontaktformular. Vereinbaren Sie jetzt Ihre kostenlose Besichtigung und
        sichern Sie sich Kapazitäten, bevor der Maklertermin ansteht.
      </RatgeberP>

      <RatgeberCta
        title="Haushaltsauflösung vor Immobilienverkauf: Jetzt Fixpreis sichern"
        text="Kostenlose Besichtigung in Wien, verbindlicher Fixpreis, Wertanrechnung und besenreine Übergabe — rechtzeitig vor Makler und Käuferbesichtigung. Auch für Erbengemeinschaften."
        href="/#contact"
        label="Jetzt Besichtigung anfragen"
      />
    </RatgeberArticleBody>
  );
}

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

export function EntruempelungMietnomadenWienVermieterArticle() {
  return (
    <RatgeberArticleBody>
      <RatgeberLead>
        Die Hinterlassenschaften von Mietnomaden sind für Immobilienbesitzer und Vermieter in Wien ein
        absoluter Albtraum: Zerstörte Möbel, Müllberge, Schimmel und blockierte Mieteinnahmen. Wenn die
        Wohnung endlich legal übergeben wurde, stehen Vermieter vor einer gewaltigen logistischen
        Herausforderung.
      </RatgeberLead>

      <RatgeberP>
        Als spezialisierte Räumungsfirma in Wien bietet Objekträumung Ihnen einen strukturierten Leitfaden
        und eine schnelle, diskrete Abwicklung — von der{" "}
        <Link href="/services/wohnungsaufloesung" className={linkClass}>
          Wohnungsauflösung
        </Link>{" "}
        bis zur besenreinen Übergabe, damit Ihre Immobilie so schnell wie möglich wieder Rendite abwirft.
      </RatgeberP>

      <RatgeberCallout>
        <strong>TL;DR (Kurzantwort):</strong> Räumen Sie eine Wohnung niemals eigenmächtig, sondern erst
        nach einer rechtskräftigen gerichtlichen Delogierung. Dokumentieren Sie alle Schäden lückenlos als
        Beweismittel. Beauftragen Sie anschließend einen professionellen Entrümpelungsbetrieb für die
        fachgerechte Entsorgung nach MA-48-Richtlinien. Die Kosten können Sie steuerlich als Werbungskosten
        absetzen.
      </RatgeberCallout>

      <RatgeberH2 id="rechtliche-voraussetzungen">
        1. Die rechtlichen Voraussetzungen in Österreich: Keine Räumung ohne Delogierung!
      </RatgeberH2>
      <RatgeberP>
        Bevor Sie den ersten Müllsack anfassen, müssen die rechtlichen Rahmenbedingungen in Wien absolut
        wasserdicht sein. Wer voreilig handelt und die Wohnung eigenmächtig betritt oder Sachen entsorgt,
        riskiert in Österreich teure Gegenklagen wegen Besitzstörung oder Diebstahl.
      </RatgeberP>
      <RatgeberUl>
        <RatgeberLi>
          <strong>Die Räumungsklage:</strong> Der rechtssichere Weg beginnt immer mit einer Räumungsklage
          beim zuständigen Bezirksgericht in Wien (z. B. für den 19. Bezirk beim Bezirksgericht Döbling).
        </RatgeberLi>
        <RatgeberLi>
          <strong>Gerichtliche Delogierung:</strong> Die finale Türöffnung und Übergabe der Schlüssel darf
          ausschließlich im Beisein eines Gerichtsvollziehers stattfinden. Erst danach besitzen Sie wieder
          das legale Verfügungsrecht über Ihre Räumlichkeiten.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Das Vermieterpfandrecht:</strong> Sie haben das gesetzliche Recht, wertvolle Gegenstände
          des geflüchteten Mieters als Sicherheit für offene Mietzahlungen oder entstandene
          Vandalismusschäden einzubehalten.
        </RatgeberLi>
      </RatgeberUl>
      <RatgeberP>
        Ausführlicher Leitfaden für Hausverwaltungen:{" "}
        <Link href="/ratgeber/zwangsraeumung-delogierung-wien-hausverwaltung" className={linkClass}>
          Zwangsräumung &amp; Delogierung Wien
        </Link>
        .
      </RatgeberP>

      <RatgeberH2 id="beweissicherung">2. Lückenlose Beweissicherung: Schritt-für-Schritt-Anleitung</RatgeberH2>
      <RatgeberP>
        Sobald der Gerichtsvollzieher Ihnen die Wohnung offiziell übergeben hat, zählt jeder Beweis für
        spätere Schadensersatzforderungen oder die Steuererklärung.
      </RatgeberP>
      <RatgeberOl>
        <RatgeberLi>
          <strong>Den Urzustand belassen:</strong> Fangen Sie nicht sofort mit dem Aufräumen an. Der Zustand
          muss exakt so dokumentiert werden, wie der Mietnomade ihn hinterlassen hat.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Umfassende Fotodokumentation:</strong> Fotografieren und filmen Sie jeden einzelnen Raum
          aus verschiedenen Perspektiven. Dokumentieren Sie versteckte Schäden wie Schimmel hinter
          Schränken, kaputte Türen oder Vandalismus an den Sanitäranlagen im Detail.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Zeugen aktivieren:</strong> Führen Sie die erste Begehung idealerweise mit einem
          neutralen Zeugen (z. B. Vertretern der Hausverwaltung) oder einem unparteiischen Sachverständigen
          durch.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Bestandsverzeichnis protokollieren:</strong> Trennen Sie den wertlosen Unrat systematisch
          von eventuell verwertbarem Hausrat oder persönlichen Dokumenten des Ex-Mieters.
        </RatgeberLi>
      </RatgeberOl>

      <RatgeberH2 id="ablauf-mietnomaden">
        3. Der Ablauf einer professionellen Mietnomaden-Räumung mit Objekträumung
      </RatgeberH2>
      <RatgeberP>
        Mietnomaden-Wohnungen weisen oft extreme hygienische Zustände auf, die stark an Messie-Wohnungen
        erinnern. Unser eingespieltes Team geht daher nach einem strengen, vierschrittigen System vor — mehr
        dazu in unserem Artikel zur{" "}
        <Link href="/ratgeber/messie-wohnung-raeumung-wien-spezial" className={linkClass}>
          Spezialräumung für Messie-Wohnungen
        </Link>
        :
      </RatgeberP>
      <div className="my-8 overflow-x-auto rounded-xl border border-navy/10">
        <table className="w-full min-w-[520px] text-left text-sm md:text-base">
          <thead>
            <tr className="bg-navy text-white">
              <th className="px-4 py-3 font-semibold">Phase</th>
              <th className="px-4 py-3 font-semibold">Maßnahmen &amp; Logistik</th>
              <th className="px-4 py-3 font-semibold">Voraussichtliche Dauer</th>
            </tr>
          </thead>
          <tbody className="text-navy/85">
            <tr className="border-t border-navy/10 bg-white">
              <td className="px-4 py-3 align-top font-medium text-navy">1. Gefahrenevaluierung</td>
              <td className="px-4 py-3 align-top">
                Analyse auf Schädlinge, Schimmelbildung, Geruchsbelastung oder biologische Gefahrenstoffe
                (wie Fäkalien).
              </td>
              <td className="px-4 py-3 align-top">1 Werktag</td>
            </tr>
            <tr className="border-t border-navy/10 bg-slate-50/80">
              <td className="px-4 py-3 align-top font-medium text-navy">2. Sortierung &amp; Wertsicherung</td>
              <td className="px-4 py-3 align-top">
                Akribische Trennung von purem Müll, aufbewahrungspflichtigen Dokumenten und verwertbaren
                Objekten für die Wertanrechnung.
              </td>
              <td className="px-4 py-3 align-top">1–2 Werktage</td>
            </tr>
            <tr className="border-t border-navy/10 bg-white">
              <td className="px-4 py-3 align-top font-medium text-navy">3. Räumung &amp; Abtransport</td>
              <td className="px-4 py-3 align-top">
                Fachgerechte Demontage und umweltfreundlicher Abtransport gemäß MA-48-Richtlinien (
                <Link href="/ratgeber/ma-48-mistplatz-wien-entsorgungs-guide-2026" className={linkClass}>
                  Entsorgungs-Guide
                </Link>
                ).
              </td>
              <td className="px-4 py-3 align-top">1–3 Werktage</td>
            </tr>
            <tr className="border-t border-navy/10 bg-slate-50/80">
              <td className="px-4 py-3 align-top font-medium text-navy">4. Grundreinigung &amp; Ozonbehandlung</td>
              <td className="px-4 py-3 align-top">
                Tiefenreinigung, Desinfektion, professionelle Geruchsbeseitigung und ggf.
                Schädlingsbekämpfung für eine bezugsfertige Übergabe.
              </td>
              <td className="px-4 py-3 align-top">1–2 Werktage</td>
            </tr>
          </tbody>
        </table>
      </div>

      <RatgeberH2 id="aufzeichnungspflichten">
        4. Wohin mit dem Eigentum des Mieters? (Aufbewahrungspflichten)
      </RatgeberH2>
      <RatgeberP>
        Auch wenn der Frust tief sitzt: Vermieter dürfen in Wien nicht einfach den gesamten Hausrat auf
        die Straße werfen. Das österreichische Gesetz unterscheidet hier sehr genau:
      </RatgeberP>
      <RatgeberH3 id="dokumente">Persönliche Dokumente, Urkunden &amp; Fotos</RatgeberH3>
      <RatgeberP>
        Diese Gegenstände unterliegen einer strengen Aufbewahrungspflicht (in der Regel mindestens 6
        Monate). Sie müssen sicher und trocken gelagert werden.
      </RatgeberP>
      <RatgeberH3 id="unrat">Offensichtlicher Unrat &amp; Müll</RatgeberH3>
      <RatgeberP>
        Verdorbene Lebensmittel, Ungezieferherde oder stinkender Sperrmüll dürfen (und sollten aus
        gesundheitlichen Gründen) sofort professionell entsorgt werden — über unsere{" "}
        <Link href="/services/entsorgung-wien" className={linkClass}>
          Entsorgungsleistung
        </Link>{" "}
        und{" "}
        <Link href="/services/entrumpelung-wien" className={linkClass}>
          Entrümpelung Wien
        </Link>
        .
      </RatgeberP>
      <RatgeberH3 id="verwertbarer-hausrat">Verwertbarer Hausrat (Möbel, Elektronik)</RatgeberH3>
      <RatgeberP>
        Diese fallen unter das Vermieterpfandrecht. Nach Ablauf der gesetzlichen Fristen können diese
        Gegenstände verwertet werden. Unser Vorteil für Sie: Wir bieten eine direkte{" "}
        <Link href="/services/moebel-wertanrechnung" className={linkClass}>
          Wertanrechnung
        </Link>
        . Brauchbare Möbel oder Elektronik werden angerechnet und der Wert direkt von Ihrer
        Entrümpelungsrechnung abgezogen — Details im Leitfaden{" "}
        <Link href="/ratgeber/moebel-bewerten-objektrueumung-wien" className={linkClass}>
          Möbel bewerten
        </Link>
        .
      </RatgeberP>

      <RatgeberH2 id="kosten-finanzierung">
        5. Kosten und finanzielle Schadensbegrenzung für Wiener Vermieter
      </RatgeberH2>
      <RatgeberP>
        Wer zahlt das Ganze? Rechtlich gesehen der Mietnomade. In der Realität bleiben Vermieter jedoch oft
        auf den Kosten sitzen, da bei den Verursachern nichts zu holen ist. So minimieren Sie Ihren
        finanziellen Schaden:
      </RatgeberP>
      <RatgeberUl>
        <RatgeberLi>
          <strong>Steuerliche Absetzbarkeit:</strong> Alle Kosten für Entrümpelung, Reinigung und
          anschließende Sanierung können als Erhaltungsaufwand (Werbungskosten) bei den Einkünften aus
          Vermietung und Verpachtung geltend gemacht werden.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Schutz vor Kostenfallen durch Fixpreis-Garantie:</strong> Bei Extremfällen drohen oft
          versteckte Kosten. Objekträumung garantiert nach kostenloser Erstbesichtigung ein verbindliches
          Fixpreis-Angebot — Orientierung in unserem Artikel{" "}
          <Link href="/ratgeber/haushaltsaufloesung-preise-wien-2026" className={linkClass}>
            Haushaltsauflösung Preise Wien 2026
          </Link>{" "}
          und auf der{" "}
          <Link href="/prices" className={linkClass}>
            Preisseite
          </Link>
          .
        </RatgeberLi>
      </RatgeberUl>

      <RatgeberH2 id="faq">FAQ: Häufig gestellte Fragen zur Mietnomaden-Räumung</RatgeberH2>

      <RatgeberH3 id="faq-kosten">
        Wie hoch sind die Kosten für eine Mietnomaden-Entrümpelung in Wien?
      </RatgeberH3>
      <RatgeberP>
        Die Kosten hängen stark vom Grad der Verschmutzung und der Menge des Sperrmülls ab. Bei extremen
        Messie-Zuständen inklusive Sonderabfallentsorgung und Desinfektion liegen die Kosten meist zwischen
        2.000 und 5.000 Euro. Ein verbindliches Angebot erhalten Sie nach unserer kostenlosen Besichtigung.
      </RatgeberP>

      <RatgeberH3 id="faq-wann-raeumen">Wie schnell darf ich die Wohnung räumen lassen?</RatgeberH3>
      <RatgeberP>
        Erst wenn das gerichtliche Räumungsurteil rechtskräftig ist und die offizielle Delogierung durch den
        Gerichtsvollzieher stattgefunden hat. Jede frühere, eigenmächtige Räumung ist in Österreich
        illegal.
      </RatgeberP>

      <RatgeberH3 id="faq-wertgegenstaende">
        Was passiert mit wertvollen Gegenständen, die der Mieter zurückgelassen hat?
      </RatgeberH3>
      <RatgeberP>
        Diese können über das Vermieterpfandrecht einbehalten und zur Deckung Ihrer Mietausfälle verwertet
        werden. Wir bieten Ihnen hierzu eine unkomplizierte Wertanrechnung direkt bei der Räumung an —
        ergänzend zur{" "}
        <Link href="/services/verlassenschaft" className={linkClass}>
          Verlassenschaftsräumung
        </Link>{" "}
        und{" "}
        <Link href="/services/haushaltsaufloesung" className={linkClass}>
          Haushaltsauflösung
        </Link>
        . Einsatz auch in der{" "}
        <Link href="/ratgeber/entruempelung-wien-umgebung-korneuburg-tulln-schwechat" className={linkClass}>
          Wien-Umgebung
        </Link>{" "}
        und allen{" "}
        <Link href="/locations/wien" className={linkClass}>
          Wiener Bezirken
        </Link>
        .
      </RatgeberP>

      <RatgeberCta
        title="Mietnomaden-Entrümpelung Wien: Schnell, diskret & Fixpreis"
        text="Kostenloses und unverbindliches Fixpreis-Angebot nach Delogierung — besenreine Übergabe für die schnelle Neuvermietung Ihrer Immobilie."
        href="/#contact"
        label="Jetzt Fixpreis-Angebot anfragen"
      />
    </RatgeberArticleBody>
  );
}

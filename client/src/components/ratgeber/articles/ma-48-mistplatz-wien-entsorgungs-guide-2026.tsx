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

export function Ma48MistplatzWienEntsorgungsGuide2026Article() {
  return (
    <RatgeberArticleBody>
      <RatgeberLead>
        Die MA 48 leistet einen herausragenden Beitrag für unsere Stadt und bietet mit ihren modernen
        Mistplätzen eine erstklassige, geordnete Option für die Abfallentsorgung in Wien. Für viele
        Bürger ist die eigene Anlieferung daher die erste Wahl.
      </RatgeberLead>

      <RatgeberP>
        Dennoch stoßen private Räumungsprojekte in der Praxis oft an ihre Grenzen: Eine fehlerhafte
        Mülltrennung, akuter Zeitmangel oder schlichtweg zu kleine private Fahrzeuge machen den Ablauf
        unerwartet schwer. Dieser Leitfaden von Objekträumung Wien zeigt Ihnen, wie Sie das
        hervorragende System der MA 48 effizient nutzen, Abfälle richtig trennen — und wann es
        sinnvoller ist, den Transport an Profis wie unsere{" "}
        <Link href="/services/entsorgung-wien" className={linkClass}>
          Entsorgungsleistung in Wien
        </Link>{" "}
        abzugeben.
      </RatgeberP>

      <RatgeberH2 id="vier-schritte">In 4 Schritten zur reibungslosen Entsorgung</RatgeberH2>
      <RatgeberP>
        Ein erfolgreicher Tag am Mistplatz erfordert Struktur. Vermeiden Sie Chaos durch diese
        vorbereitenden Schritte:
      </RatgeberP>
      <RatgeberOl>
        <RatgeberLi>
          <strong>Volumen exakt berechnen:</strong> Verlassen Sie sich nicht auf Ihr Bauchgefühl.
          Bewerten Sie die Mengen realistisch — besonders{" "}
          <Link href="/services/kellerraeumung" className={linkClass}>
            Keller
          </Link>{" "}
          oder{" "}
          <Link href="/services/dachbodenraeumung" className={linkClass}>
            Dachböden
          </Link>{" "}
          verbergen meist mehr Mischmaterial, als man auf den ersten Blick annimmt.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Clevere Vorsortierung zu Hause:</strong> Definieren Sie klare Sammelzonen direkt in
          der Wohnung. Trennen Sie strikt nach Holz, Metall, Elektrogeräten, Problemstoffen und
          Restmaterial. Das beschleunigt das spätere Entladen enorm und verhindert Fehlwürfe.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Logistik &amp; Transportwege sichern:</strong> In dicht bebauten Wiener Bezirken sind
          Parkdruck und enge Ladezonen entscheidend. Organisieren Sie rechtzeitig eine Halteverbotszone
          und ein verlässliches Helferteam, bevor das Tragen beginnt.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Transparente Dokumentation:</strong> Bewahren Sie alle Nachweise über die fachgerechten
          Entsorgungswege auf, um bei Wohnungsübergaben auf der sicheren Seite zu sein.
        </RatgeberLi>
      </RatgeberOl>

      <RatgeberH2 id="trenn-guide">Der Trenn-Guide: Welches Material gehört wohin?</RatgeberH2>
      <RatgeberP>
        Die MA 48 arbeitet hochgradig effizient — unterstützen Sie diesen Prozess durch die richtige
        Vorbereitung Ihrer Ladung:
      </RatgeberP>

      <RatgeberH3 id="sperrmuell">Sperriger Hausrat (Sofas, Matratzen)</RatgeberH3>
      <RatgeberP>
        Messen Sie das Volumen im Vorfeld genau ab, um unangenehme Zusatzfahrten wegen Platzmangel zu
        vermeiden. Bei größeren Mengen lohnt sich ein Vergleich mit einer{" "}
        <Link href="/services/entrumpelung-wien" className={linkClass}>
          professionellen Entrümpelung
        </Link>
        .
      </RatgeberP>

      <RatgeberH3 id="holz-metall">Holz &amp; Metall</RatgeberH3>
      <RatgeberP>
        Sammeln und verladen Sie Regalteile, Rohre oder Platten unbedingt getrennt. Entfernen Sie vorab
        Schrauben und Beschläge aus dem Holz. Eine Mischladung mit Restmüll verlangsamt die Abgabe vor
        Ort massiv.
      </RatgeberP>

      <RatgeberH3 id="elektro">Elektrogeräte</RatgeberH3>
      <RatgeberP>
        Zerstören oder zerlegen Sie alte Geräte und Monitore auf keinen Fall. Halten Sie die Kabel
        gebündelt und nutzen Sie die getrennte Elektrosammlung.
      </RatgeberP>

      <RatgeberH3 id="restmaterial">Restmaterial</RatgeberH3>
      <RatgeberP>
        Führen Sie Verbundstoffe oder stark verschmutzte Teile erst nach einer sauberen und konsequenten
        Vorsortierung dem Restmüll zu.
      </RatgeberP>

      <RatgeberH2 id="gefahrengut">Achtung Gefahrengut: Die häufigsten Fehler bei Problemstoffen</RatgeberH2>
      <RatgeberP>
        Bei der Selbstorganisation bergen Problemstoffe das größte Risiko. Die MA 48 hat hierfür
        strenge, aber enorm wichtige Sicherheitsregeln:
      </RatgeberP>
      <RatgeberUl>
        <RatgeberLi>Mischen Sie Farben oder Lacke niemals mit gewöhnlichem Restmüll.</RatgeberLi>
        <RatgeberLi>Werfen Sie alte Batterien nicht lose in Kartons mit Metallteilen.</RatgeberLi>
        <RatgeberLi>
          Nutzen Sie stets die Originalbehälter, sorgen Sie für eine eindeutige Kennzeichnung und lagern
          Sie diese sicher im Fahrzeug.
        </RatgeberLi>
      </RatgeberUl>

      <RatgeberCallout>
        <strong>MA-48-Respekt:</strong> Die städtische Abfallwirtschaft Wien bietet eine hervorragende
        Infrastruktur. Unsere Aufgabe als Profis ist es, diese Standards bei Räumungsprojekten
        einzuhalten — damit Sie sich auf Besichtigung, Übergabe und Neuvermietung konzentrieren können.
      </RatgeberCallout>

      <RatgeberH2 id="selbst-vs-profi">Selbstorganisation vs. Profi-Räumung: Was rechnet sich?</RatgeberH2>
      <RatgeberP>
        Die entscheidende Frage bei einer Wohnungsauflösung lautet selten nur „Was kostet die Fahrt?“,
        sondern vielmehr „Wie viel Zeit, Kraft und Risiko kostet mich das gesamte Projekt?“
      </RatgeberP>

      <RatgeberH3 id="selbst-machen">Wann Sie es selbst machen sollten</RatgeberH3>
      <RatgeberP>
        Wenn es sich um eine kleine Menge Abfall handelt, das Objekt im Erdgeschoss liegt und Sie keinen
        zeitlichen Druck haben, ist die Eigenanlieferung bei der MA 48 oft die günstigste Lösung.
      </RatgeberP>

      <RatgeberH3 id="profi-wirtschaftlicher">Wann der Profi wirtschaftlicher ist</RatgeberH3>
      <RatgeberP>
        Bei einer 2- bis 3-Zimmer-Wohnung im 3. Stock ohne Aufzug stoßen Laien schnell an physische
        Grenzen. Wenn der Hausrat stark gemischt ist, Problemstoffe im Keller lagern oder eine
        fristgebundene Schlüsselübergabe drängt, ist ein professionelles Räumungsteam meist die sicherere
        und letztlich wirtschaftlichere Wahl — etwa über unsere{" "}
        <Link href="/services/haushaltsaufloesung" className={linkClass}>
          Haushaltsauflösung
        </Link>{" "}
        oder{" "}
        <Link href="/services/wohnungsaufloesung" className={linkClass}>
          Wohnungsauflösung
        </Link>
        .
      </RatgeberP>

      <RatgeberH3 id="wertausgleich">Der Wertausgleich</RatgeberH3>
      <RatgeberP>
        Ein Profi erkennt zudem verwertbare Gegenstände und bietet eine{" "}
        <Link href="/services/moebel-wertanrechnung" className={linkClass}>
          Wertanrechnung
        </Link>{" "}
        an, was die Kosten weiter senken kann. Details dazu in unserem Leitfaden{" "}
        <Link href="/ratgeber/haushaltsaufloesung-preise-wien-2026" className={linkClass}>
          Haushaltsauflösung Preise Wien 2026
        </Link>{" "}
        und{" "}
        <Link href="/ratgeber/moebel-bewerten-objektrueumung-wien" className={linkClass}>
          Möbel bewerten
        </Link>
        .
      </RatgeberP>

      <RatgeberH2 id="checkliste-mistplatz">Checkliste für Ihren Einsatztag am Mistplatz</RatgeberH2>
      <RatgeberP>Bevor Sie den Motor starten, prüfen Sie diese finalen Punkte:</RatgeberP>
      <RatgeberUl>
        <RatgeberLi>Ist das Material bereits am Vorabend sauber in Fraktionen getrennt worden?</RatgeberLi>
        <RatgeberLi>
          Haben Sie die maximale Fahrzeughöhe und die speziellen Zufahrtsregeln des gewählten Mistplatzes
          überprüft?
        </RatgeberLi>
        <RatgeberLi>Sind die Tragewege in der Wohnung frei von Stolperfallen?</RatgeberLi>
        <RatgeberLi>
          Sind alle Problemstoffe separat verpackt und gut lesbar beschriftet?
        </RatgeberLi>
        <RatgeberLi>
          Ist genügend Zeitpuffer eingeplant, um das angestrebte Übergabeziel (besenrein) nicht zu
          gefährden?
        </RatgeberLi>
      </RatgeberUl>

      <RatgeberP>
        Regionale Besonderheiten in den Wiener Bezirken finden Sie in unserem{" "}
        <Link href="/locations" className={linkClass}>
          Standorte-Überblick
        </Link>
        . Transparente Kosten erfahren Sie auf der{" "}
        <Link href="/prices" className={linkClass}>
          Preisseite
        </Link>
        .
      </RatgeberP>

      <RatgeberCta
        title="MA 48-konform entsorgen — ohne Stress und Schwerstarbeit"
        text="Wenn Volumen, enge Stiegenhäuser oder Fristen über den Kopf wachsen: Objekt Räumung Wien übernimmt Transport, Trennung und fachgerechte Entsorgung — professionell und in bester Zusammenarbeit mit den Richtlinien unserer Stadt."
        href="/#contact"
        label="Jetzt Entsorgung anfragen"
      />
    </RatgeberArticleBody>
  );
}
